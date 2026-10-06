import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Moments.css";

// Photographs published on girmitiyafoundation.org
import archiveRoots from "../../assets/moments/archive-roots.webp";
import launch2021 from "../../assets/moments/mahotsav-2021-launch.webp";
import hall2021 from "../../assets/moments/mahotsav-2021-hall.webp";
import mahotsav2023 from "../../assets/moments/mahotsav-2023.webp";
import mahotsav2024 from "../../assets/moments/mahotsav-2024.webp";
import mahotsav2025 from "../../assets/moments/mahotsav-2025.webp";
import welcome from "../../assets/moments/welcome-procession.webp";
import village from "../../assets/moments/village-outreach.webp";
import community from "../../assets/moments/community-visit.webp";
import thanks from "../../assets/moments/thanks-rally.webp";
import school from "../../assets/moments/school-assembly.webp";
import classroom from "../../assets/moments/classroom.webp";
import childrenSession from "../../assets/moments/children-session.webp";
import childrenBooks from "../../assets/moments/children-books.webp";
import sewing from "../../assets/moments/sewing-institute.webp";

/* The reel reads as four chapters. `size` sets the card height; `align`
   staggers cards vertically so the row has an editorial rhythm. */
const chapters = [
  {
    id: "remember",
    label: "Remember",
    items: [
      { src: archiveRoots, title: "Where it began", caption: "Girmitiya ancestors, and the families who carry their story today.", size: "xl", align: "center", ratio: "5 / 4" },
    ],
  },
  {
    id: "celebrate",
    label: "Celebrate",
    items: [
      { src: launch2021, title: "Souvenir release", caption: "Girmitiya Mahotsav 2021", size: "lg", align: "top", ratio: "5 / 4" },
      { src: hall2021, title: "A full house", caption: "Girmitiya Mahotsav 2021, India International Centre, New Delhi", size: "md", align: "bottom", ratio: "5 / 4" },
      { src: mahotsav2023, title: "Music of the diaspora", caption: "Girmitiya Mahotsav 2023", size: "sm", align: "top", ratio: "3 / 2" },
      { src: mahotsav2024, title: "One stage, many shores", caption: "Girmitiya Mahotsav 2024", size: "md", align: "center", ratio: "4 / 3" },
      { src: mahotsav2025, title: "The family grows", caption: "Girmitiya Mahotsav 2025", size: "sm", align: "bottom", ratio: "4 / 3" },
    ],
  },
  {
    id: "reconnect",
    label: "Reconnect",
    items: [
      { src: welcome, title: "A homecoming", caption: "Welcomed with garlands in an ancestral village", size: "sm", align: "top", ratio: "23 / 10" },
      { src: village, title: "Back to the village", caption: "Meeting families where the journey started", size: "lg", align: "center", ratio: "5 / 4" },
      { src: community, title: "Shared roots", caption: "Community visit", size: "md", align: "bottom", ratio: "4 / 3" },
      { src: thanks, title: "Thank you, Bihar", caption: "Villagers greet the Foundation", size: "sm", align: "top", ratio: "27 / 10" },
    ],
  },
  {
    id: "empower",
    label: "Empower",
    items: [
      { src: school, title: "Education for all", caption: "School programme", size: "lg", align: "top", ratio: "5 / 4" },
      { src: classroom, title: "Learning together", caption: "Village classroom", size: "md", align: "bottom", ratio: "4 / 3" },
      { src: childrenBooks, title: "A book for every child", caption: "Children's education drive", size: "md", align: "top", ratio: "4 / 3" },
      { src: childrenSession, title: "Finding their voice", caption: "Children's session", size: "sm", align: "bottom", ratio: "4 / 3" },
      { src: sewing, title: "Skills that last", caption: "Sewing & Knitting Training Institute, managed by Girmitiya Foundation", size: "md", align: "center", ratio: "4 / 3" },
    ],
  },
];

const allItems = chapters.flatMap((chapter) =>
  chapter.items.map((item) => ({ ...item, chapter: chapter.label }))
);

// Index of each chapter's first photo within allItems.
const chapterStarts = chapters.map((_, i) =>
  chapters.slice(0, i).reduce((sum, c) => sum + c.items.length, 0)
);

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function MomentCard({ item, index, progress, onOpen, pinned }) {
  // Image drifts slightly against the reel for depth.
  const drift = useTransform(progress, [0, 1], ["-7%", "7%"]);
  return (
    <figure className={`mo-card mo-card--${item.size} mo-card--${item.align}`} style={{ aspectRatio: item.ratio }}>
      <button type="button" className="mo-card-btn" onClick={() => onOpen(index)} aria-label={`Open photo: ${item.title}`}>
        <motion.img
          src={item.src}
          alt={`${item.title} — ${item.caption}`}
          loading="lazy"
          decoding="async"
          style={pinned ? { x: drift, scale: 1.16 } : undefined}
        />
        <span className="mo-card-shade" aria-hidden="true" />
      </button>
      <figcaption className="mo-card-cap">
        <span className="mo-card-index">{String(index + 1).padStart(2, "0")} · {item.chapter}</span>
        <span className="mo-card-title">{item.title}</span>
        <span className="mo-card-sub">{item.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function Moments() {
  const reduceMotion = useReducedMotion();
  const isWide = useMediaQuery("(min-width: 900px)");
  const pinned = isWide && !reduceMotion;

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [viewportH, setViewportH] = useState(800);
  const [activeChapter, setActiveChapter] = useState(chapters[0].label);
  const [lightbox, setLightbox] = useState(null);

  // Measure how far the track must travel sideways.
  useLayoutEffect(() => {
    if (!pinned || !trackRef.current) return undefined;
    const measure = () => {
      const track = trackRef.current;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
      setViewportH(window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.35, restDelta: 0.0005 });
  const x = useTransform(smooth, (v) => -v * distance);
  const bar = useTransform(smooth, [0, 1], [0, 1]);

  // Which chapter sits under the centre of the screen.
  useMotionValueEvent(smooth, "change", () => {
    if (!pinned) return;
    const centre = window.innerWidth / 2;
    const marks = trackRef.current?.querySelectorAll("[data-chapter]") ?? [];
    let current = chapters[0].label;
    marks.forEach((el) => {
      if (el.getBoundingClientRect().left < centre) current = el.dataset.chapter;
    });
    setActiveChapter((prev) => (prev === current ? prev : current));
  });

  useEffect(() => {
    if (lightbox === null) return undefined;
    const total = allItems.length;
    const onKey = (event) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((i) => (i + 1) % total);
      if (event.key === "ArrowLeft") setLightbox((i) => (i - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const track = (
    <motion.div ref={trackRef} className="mo-track" style={pinned ? { x } : undefined}>
      <div className="mo-intro">
        <p className="t-eyebrow mo-eyebrow">Gallery · {allItems.length} moments</p>
        <h2 className="mo-title">
          Moments that <span className="t-accent">connect</span> us
        </h2>
        <p className="mo-lede">
          Festivals in New Delhi, homecomings in ancestral villages, classrooms and workshops.
          A few frames from the work of reconnecting a global family.
        </p>
        {pinned && (
          <p className="mo-hint" aria-hidden="true">
            Scroll to travel <ArrowRight />
          </p>
        )}
      </div>

      {chapters.map((chapter, c) => (
        <div key={chapter.id} className="mo-chapter" data-chapter={chapter.label}>
          <div className="mo-chapter-mark" aria-hidden="true">
            <span className="mo-chapter-num">{String(c + 1).padStart(2, "0")}</span>
            <span className="mo-chapter-name">{chapter.label}</span>
          </div>
          {chapter.items.map((item, i) => (
            <MomentCard
              key={item.title}
              item={allItems[chapterStarts[c] + i]}
              index={chapterStarts[c] + i}
              progress={smooth}
              onOpen={setLightbox}
              pinned={pinned}
            />
          ))}
        </div>
      ))}

      <div className="mo-outro">
        <p className="mo-outro-line">
          The next chapter is <span className="t-accent">yours.</span>
        </p>
        <a href="#donate" className="mo-outro-cta">
          Be part of it <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className={`mo ${pinned ? "mo--pinned" : "mo--native"}`}
      style={pinned ? { height: `${distance + viewportH}px` } : undefined}
      aria-label="Photo gallery"
    >
      {pinned ? (
        <div className="mo-sticky">
          {track}
          <div className="mo-hud" aria-hidden="true">
            <div className="mo-hud-chapters">
              {chapters.map((c) => (
                <span key={c.id} className={c.label === activeChapter ? "is-active" : undefined}>
                  {c.label}
                </span>
              ))}
            </div>
            <div className="mo-hud-bar">
              <motion.span style={{ scaleX: bar }} />
            </div>
          </div>
        </div>
      ) : (
        <div className="mo-native-scroller">{track}</div>
      )}

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="mo-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setLightbox(null)}
          >
            <motion.figure
              className="mo-lightbox-panel"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={allItems[lightbox].src} alt={`${allItems[lightbox].title} — ${allItems[lightbox].caption}`} />
              <figcaption>
                <span className="t-eyebrow">{String(lightbox + 1).padStart(2, "0")} / {allItems.length} · {allItems[lightbox].chapter}</span>
                <strong>{allItems[lightbox].title}</strong>
                <span>{allItems[lightbox].caption}</span>
              </figcaption>
              <button type="button" className="mo-lb-btn mo-lb-prev" onClick={() => setLightbox((i) => (i - 1 + allItems.length) % allItems.length)} aria-label="Previous photo"><ChevronLeft /></button>
              <button type="button" className="mo-lb-btn mo-lb-next" onClick={() => setLightbox((i) => (i + 1) % allItems.length)} aria-label="Next photo"><ChevronRight /></button>
              <button type="button" className="mo-lb-btn mo-lb-close" onClick={() => setLightbox(null)} aria-label="Close photo viewer"><X /></button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
