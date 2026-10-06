import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import "./RootsBorder.css";

/* Roots that grow down both edges of the viewport as the page is scrolled.
   Geometry is generated in real pixels for the current viewport height so
   strokes never distort; the right edge is the left edge mirrored with a
   different seed. Drawing is imperative (dashoffset on refs) so scrolling
   never re-renders React. */

const WIDTH = 120;

function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Catmull-Rom through the points, emitted as cubic beziers.
function smoothPath(pts) {
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

function growBranch(rand, origin, depth, height, out, startT) {
  const steps = depth === 0 ? 4 + Math.floor(rand() * 3) : depth === 1 ? 3 + Math.floor(rand() * 2) : 2;
  const reach = depth === 0 ? 18 + rand() * 16 : depth === 1 ? 9 + rand() * 8 : 5 + rand() * 4;
  const pts = [origin];
  let [x, y] = origin;
  let dir = depth === 0 ? 1 : rand() > 0.35 ? 1 : -1;
  for (let s = 0; s < steps; s++) {
    x = Math.max(4, Math.min(WIDTH - 6, x + dir * reach * (1 - s * 0.12) + (rand() - 0.5) * 6));
    y += (depth === 2 ? 8 : 14) + rand() * (depth === 0 ? 30 : 18);
    if (rand() < 0.3) dir *= -1;
    pts.push([x, y]);
  }
  const span = (pts[pts.length - 1][1] - origin[1]) / height;
  const branch = {
    d: smoothPath(pts),
    width: depth === 0 ? 1.4 : depth === 1 ? 0.8 : 0.45,
    start: startT,
    end: Math.min(1, startT + span * 1.6 + 0.02),
    tip: pts[pts.length - 1],
  };
  out.push(branch);
  if (depth < 2) {
    const forks = depth === 0 ? 2 + Math.floor(rand() * 2) : Math.floor(rand() * 3);
    for (let f = 0; f < forks; f++) {
      const at = pts[1 + Math.floor(rand() * (pts.length - 2))];
      const t = branch.start + ((at[1] - origin[1]) / height) * 1.6;
      growBranch(rand, at, depth + 1, height, out, Math.min(0.98, t));
    }
  }
}

function generateRoots(seed, height) {
  const rand = mulberry32(seed);
  const trunks = [];
  const branches = [];

  // Two intertwined taproots: a heavy one hugging the edge and a finer companion.
  [
    { base: 16, wander: 12, width: 2.4 },
    { base: 26, wander: 16, width: 1.1 },
  ].forEach(({ base, wander, width }, idx) => {
    const pts = [[base, -24]];
    let y = -24;
    while (y < height + 40) {
      y += 48 + rand() * 44;
      pts.push([base + (rand() - 0.5) * wander * 2, y]);
    }
    trunks.push({ d: smoothPath(pts), width, start: idx * 0.03, end: 1 });
    if (idx === 0) {
      pts.slice(1, -1).forEach(([px, py]) => {
        if (rand() < 0.88) growBranch(rand, [px, py], 0, height, branches, Math.max(0, py / height));
      });
    }
  });

  return { trunks, branches };
}

function RootSide({ side, seed, height, progress, sway }) {
  const { trunks, branches } = useMemo(() => generateRoots(seed, height), [seed, height]);
  const all = useMemo(() => [...trunks, ...branches], [trunks, branches]);
  const pathRefs = useRef([]);
  const tipRef = useRef(null);
  const tipGlowRef = useRef(null);
  const lengths = useRef(0);

  const paint = (p) => {
    all.forEach((seg, i) => {
      const el = pathRefs.current[i];
      if (!el) return;
      const local = Math.min(1, Math.max(0, (p - seg.start) / (seg.end - seg.start)));
      el.style.strokeDashoffset = String(1 - local);
      el.style.opacity = local > 0.001 ? "1" : "0";
    });
    const lead = pathRefs.current[0];
    if (lead && tipRef.current) {
      if (!lengths.current) lengths.current = lead.getTotalLength();
      const local = Math.min(1, Math.max(0, (p - all[0].start) / (all[0].end - all[0].start)));
      const pt = lead.getPointAtLength(local * lengths.current);
      const visible = local > 0.002 && local < 0.999 ? "1" : "0";
      for (const el of [tipRef.current, tipGlowRef.current]) {
        el.setAttribute("cx", pt.x.toFixed(1));
        el.setAttribute("cy", pt.y.toFixed(1));
        el.style.opacity = visible;
      }
    }
  };

  useLayoutEffect(() => {
    lengths.current = 0;
    paint(progress.get());
  });

  useMotionValueEvent(progress, "change", paint);

  return (
    <div className={`roots-border__side roots-border__side--${side}`}>
    <motion.svg
      className="roots-border__svg"
      width={WIDTH}
      height={height}
      viewBox={`0 0 ${WIDTH} ${height}`}
      style={{ skewX: sway }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`roots-grad-${side}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5B869" />
          <stop offset="55%" stopColor="#C59B27" />
          <stop offset="100%" stopColor="#8C6B1A" />
        </linearGradient>
      </defs>
      <g stroke={`url(#roots-grad-${side})`} fill="none" strokeLinecap="round" strokeLinejoin="round">
        {all.map((seg, i) => (
          <path
            key={i}
            ref={(el) => (pathRefs.current[i] = el)}
            d={seg.d}
            strokeWidth={seg.width}
            pathLength="1"
            strokeDasharray="1 1"
            strokeDashoffset="1"
            className={i < trunks.length ? "roots-border__trunk" : "roots-border__branch"}
          />
        ))}
      </g>
      <circle ref={tipGlowRef} r="7" className="roots-border__tip-glow" />
      <circle ref={tipRef} r="2.4" className="roots-border__tip" />
    </motion.svg>
    </div>
  );
}

export default function RootsBorder() {
  const reduceMotion = useReducedMotion();
  const [height, setHeight] = useState(() =>
    typeof window === "undefined" ? 900 : window.innerHeight
  );

  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setHeight(window.innerHeight));
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const { scrollYProgress, scrollY } = useScroll();

  // A short head start so the roots are already reaching in on first paint,
  // then a soft spring so they trail the scroll instead of snapping to it.
  const target = useTransform(scrollYProgress, (v) => (reduceMotion ? 1 : 0.3 + v * 0.7));
  const progress = useSpring(target, { stiffness: 70, damping: 22, mass: 0.6, restDelta: 0.0005 });

  // Scroll speed leans the roots slightly, like something dragged through soil.
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 220, damping: 40 });
  const sway = useTransform(smoothVelocity, [-2500, 0, 2500], reduceMotion ? [0, 0, 0] : [2.2, 0, -2.2], {
    clamp: true,
  });

  return (
    <div className="roots-border" aria-hidden="true">
      <RootSide side="left" seed={1877} height={height} progress={progress} sway={sway} />
      <RootSide side="right" seed={1920} height={height} progress={progress} sway={sway} />
    </div>
  );
}
