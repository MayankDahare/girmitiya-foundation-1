import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronUp, MapPin, Phone } from "lucide-react";
import logo from "../../assets/logos/girmitiya logo.png";
import { footerQuickLinks, footerPolicyLinks } from "../../data/homepage";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";
import "./Footer.css";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

/* The indenture voyages, 1834–1920. India sits at the centre of the map;
   each route arcs out to the colony where the first ships landed. */
const ORIGIN = { x: 600, y: 190 };
const voyages = [
  { place: "Guyana", year: 1838, x: 70, y: 112, lift: 150 },
  { place: "Suriname", year: 1873, x: 150, y: 150, lift: 120 },
  { place: "Trinidad", year: 1845, x: 235, y: 92, lift: 135 },
  { place: "South Africa", year: 1860, x: 380, y: 236, lift: 70 },
  { place: "Mauritius", year: 1834, x: 485, y: 262, lift: 40 },
  { place: "Fiji", year: 1879, x: 1110, y: 236, lift: 120 },
];

const clocks = [
  { city: "New Delhi", zone: "Asia/Kolkata" },
  { city: "Suva", zone: "Pacific/Fiji" },
  { city: "Port Louis", zone: "Indian/Mauritius" },
  { city: "Port of Spain", zone: "America/Port_of_Spain" },
  { city: "Georgetown", zone: "America/Guyana" },
  { city: "Durban", zone: "Africa/Johannesburg" },
  { city: "Paramaribo", zone: "America/Paramaribo" },
];

const statement = ["Every", "root", "finds", "its", "way", "home."];

function arcPath({ x, y, lift }) {
  const cx = (ORIGIN.x + x) / 2;
  const cy = Math.min(ORIGIN.y, y) - lift;
  return `M${ORIGIN.x},${ORIGIN.y} Q${cx},${cy} ${x},${y}`;
}

function RevealWord({ word, index, total, progress }) {
  const start = 0.04 + (index / total) * 0.32;
  const opacity = useTransform(progress, [start, start + 0.1], [0.12, 1]);
  const y = useTransform(progress, [start, start + 0.1], ["0.35em", "0em"]);
  return (
    <motion.span className="vf-word" style={{ opacity, y }}>
      {word}
    </motion.span>
  );
}

function Route({ voyage, index, progress, reduceMotion }) {
  const start = 0.12 + index * 0.035;
  const length = useTransform(progress, [start, start + 0.22], [0, 1]);
  const labelOpacity = useTransform(progress, [start + 0.16, start + 0.24], [0, 1]);
  const d = arcPath(voyage);
  return (
    <g>
      <motion.path d={d} className="vf-route" style={{ pathLength: reduceMotion ? 1 : length }} />
      {!reduceMotion && (
        <circle r="2.6" className="vf-ship">
          <animateMotion dur={`${7 + index * 0.9}s`} repeatCount="indefinite" path={d} begin={`${index * 0.6}s`} />
        </circle>
      )}
      <motion.g style={{ opacity: reduceMotion ? 1 : labelOpacity }}>
        <circle cx={voyage.x} cy={voyage.y} r="4" className="vf-port" />
        <circle cx={voyage.x} cy={voyage.y} r="10" className="vf-port-ring" />
        <text x={voyage.x} y={voyage.y + 26} className="vf-port-name" textAnchor="middle">
          {voyage.place}
        </text>
        <text x={voyage.x} y={voyage.y + 42} className="vf-port-year" textAnchor="middle">
          {voyage.year}
        </text>
      </motion.g>
    </g>
  );
}

function MagneticLink({ href, children, reduceMotion }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 15, mass: 0.4 });

  const onMove = (event) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.35);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className="vf-magnet"
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <span className="vf-magnet-fill" aria-hidden="true" />
      <span className="vf-magnet-label">{children}</span>
    </motion.a>
  );
}

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(timer);
  }, []);
  return now;
}

export default function Footer() {
  const footerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const now = useClock();

  const { scrollYProgress } = useScroll({ target: footerRef, offset: ["start end", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const fill = useTransform(progress, [0.6, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);

  const onPointerMove = (event) => {
    const el = footerRef.current;
    if (!el || reduceMotion) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const timeFor = (zone) =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: zone }).format(now);

  return (
    <footer id="contact" ref={footerRef} className="vf" onPointerMove={onPointerMove}>
      <div className="vf-spotlight" aria-hidden="true" />
      <div className="vf-grain" aria-hidden="true" />

      {/* 1. Statement */}
      <div className="vf-inner vf-hero">
        <p className="vf-kicker">
          <span className="vf-kicker-dot" aria-hidden="true" /> Girmitiya Foundation · Est. 2019
        </p>
        <h2 className="vf-statement" aria-label={statement.join(" ")}>
          {statement.map((word, index) =>
            reduceMotion ? (
              <span key={word} className="vf-word">{word}</span>
            ) : (
              <RevealWord key={word} word={word} index={index} total={statement.length} progress={progress} />
            )
          )}
        </h2>
        <div className="vf-hero-row">
          <p className="vf-lede">
            Between 1834 and 1920, over a million Indians crossed the oceans under indenture.
            We help their descendants trace the villages, birth places and families they left behind.
          </p>
          <MagneticLink href="#chapter" reduceMotion={reduceMotion}>
            Begin your<br />search <ArrowUpRight aria-hidden="true" />
          </MagneticLink>
        </div>
      </div>

      {/* 2. The voyages */}
      <div className="vf-inner">
        <div className="vf-map" role="img" aria-label="Map of indenture voyages from India to Guyana, Suriname, Trinidad, South Africa, Mauritius and Fiji">
          <svg viewBox="0 0 1200 320" className="vf-map-svg" aria-hidden="true">
            <defs>
              <linearGradient id="vf-route-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#E5B869" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#C59B27" />
                <stop offset="100%" stopColor="#E5B869" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <line x1="0" y1="300" x2="1200" y2="300" className="vf-horizon" />
            {voyages.map((voyage, index) => (
              <Route key={voyage.place} voyage={voyage} index={index} progress={progress} reduceMotion={reduceMotion} />
            ))}
            <circle cx={ORIGIN.x} cy={ORIGIN.y} r="22" className="vf-origin-pulse" />
            <circle cx={ORIGIN.x} cy={ORIGIN.y} r="7" className="vf-origin" />
            <text x={ORIGIN.x} y={ORIGIN.y + 34} textAnchor="middle" className="vf-origin-name">India</text>
            <text x={ORIGIN.x} y={ORIGIN.y + 50} textAnchor="middle" className="vf-port-year">Kolkata · Chennai</text>
          </svg>
          <ul className="vf-map-list">
            {voyages.map((v) => (
              <li key={v.place}><span>{v.place}</span><span>{v.year}</span></li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Directory */}
      <div className="vf-inner vf-grid">
        <div className="vf-col vf-brand">
          <a href="#home" className="vf-logo">
            <img src={logo} alt="Girmitiya Foundation logo" />
            <span>Girmitiya<br />Foundation<em>Reconnect to your roots</em></span>
          </a>
          <p className="vf-about">
            An NGO in India helping Girmitiya families find their ancestral roots, birth places
            and villages, while working in education, women empowerment, skill training and
            Indian traditional culture.
          </p>
          <div className="vf-social">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}><Icon /></a>
            ))}
          </div>
        </div>

        <nav className="vf-col" aria-label="Footer">
          <h3 className="vf-heading">Explore</h3>
          <ul className="vf-links">
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}><span data-text={link.label}>{link.label}</span></a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="vf-col">
          <h3 className="vf-heading">Policies</h3>
          <ul className="vf-links">
            {footerPolicyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}><span data-text={link.label}>{link.label}</span></a>
              </li>
            ))}
          </ul>
        </div>

        <address className="vf-col vf-contact">
          <h3 className="vf-heading">Reach us</h3>
          <a href="mailto:girmitiya.foundation2023@gmail.com" className="vf-contact-big">
            girmitiya.foundation2023<wbr />@gmail.com
          </a>
          <a href="tel:+919891598276" className="vf-contact-row"><Phone aria-hidden="true" /> +91 98915 98276 <small>India</small></a>
          <a href="tel:+41797416368" className="vf-contact-row"><Phone aria-hidden="true" /> +41 79 741 63 68 <small>Switzerland</small></a>
          <p className="vf-contact-row">
            <MapPin aria-hidden="true" />
            <span>32-A, Ground Floor, Mayur Vihar Phase-I, near Uma Enclave, C-Block, D2, New Delhi 110091</span>
          </p>
        </address>
      </div>

      {/* 4. One family, many clocks */}
      <div className="vf-clocks" aria-label="Local time across the Girmitiya diaspora">
        <div className="vf-clocks-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="vf-clocks-set" aria-hidden={copy === 1 ? "true" : undefined}>
              {clocks.map((c) => (
                <li key={c.city}>
                  <span className="vf-clock-city">{c.city}</span>
                  <time className="vf-clock-time tabular">{timeFor(c.zone)}</time>
                  <span className="vf-clock-sep" aria-hidden="true">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* 5. Wordmark */}
      <div className="vf-wordmark" aria-hidden="true">
        <span className="vf-wordmark-outline">GIRMITIYA</span>
        <motion.span className="vf-wordmark-fill" style={{ clipPath: reduceMotion ? "none" : fill }}>
          GIRMITIYA
        </motion.span>
      </div>

      <div className="vf-inner vf-bottom">
        <p>© {now.getFullYear()} Girmitiya Foundation. All rights reserved.</p>
        <p className="vf-bottom-mantra">Reconnect · Preserve · Empower</p>
        <a href="#home" onClick={handleBackToTop} className="vf-top">
          Back to top <span><ChevronUp aria-hidden="true" /></span>
        </a>
      </div>
    </footer>
  );
}
