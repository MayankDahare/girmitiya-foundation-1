import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";

import g1 from "../../assets/documents/greeting-01.svg";
import g2 from "../../assets/documents/greeting-02.svg";
import g3 from "../../assets/documents/greeting-03.svg";
import g4 from "../../assets/documents/greeting-04.svg";
import g5 from "../../assets/documents/greeting-05.svg";
import g6 from "../../assets/documents/greeting-06.svg";

const greetings = [g1, g2, g3, g4, g5, g6];
const greetingDetails = greetings.map((src, index) => ({
  src,
  alt: `Greeting message document ${index + 1} from a Girmitiya Foundation supporter`,
  label: `Message ${String(index + 1).padStart(2, "0")}`,
}));

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current - 1 + greetingDetails.length) % greetingDetails.length);
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current + 1) % greetingDetails.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    if (reduceMotion || lightboxIndex !== null) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % greetingDetails.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [lightboxIndex, reduceMotion]);

  const orderedGreetings = greetingDetails.map((_, offset) => {
    const index = (activeIndex - 2 + offset + greetingDetails.length) % greetingDetails.length;
    return { ...greetingDetails[index], index };
  });

  return (
    <section id="media" className="greetings-message-section">
      <style>{`
        .greetings-message-section { position: relative; overflow: hidden; padding: 4rem 0 3.8rem; background: #f7f1e5; color: #102238; }
        .greetings-message-section::before { content: "“"; position: absolute; top: 2rem; left: 3.5%; color: rgba(184,139,63,.12); font: 400 10rem/.8 var(--font-display); pointer-events: none; }
        .greetings-message-section::after { content: ""; position: absolute; inset: 0; opacity: .34; pointer-events: none; background: radial-gradient(circle at 48% 40%, rgba(255,255,255,.8), transparent 42%), repeating-linear-gradient(0deg, rgba(140,104,46,.025) 0 1px, transparent 1px 5px); }
        .greetings-message-inner { position: relative; z-index: 1; width: 100%; max-width: 1540px; margin: 0 auto; }
        .greetings-message-header { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 1.25rem; text-align: center; }
        .greetings-message-eyebrow { display: inline-flex; align-items: center; gap: .8rem; color: #bd8624; font: 700 .72rem/1 var(--font-sans); letter-spacing: .24em; }
        .greetings-message-eyebrow::before, .greetings-message-eyebrow::after { content: ""; width: 2.7rem; height: 1px; background: #c79a4b; }
        .greetings-message-heading { display: block; margin: .75rem 0 .65rem; font: 600 clamp(2.8rem, 5vw, 4.1rem)/1 var(--font-display); letter-spacing: -.04em; }
        .greetings-message-heading span { color: #c18714; }
        .greetings-message-description { display: block; max-width: 720px; margin: 0 auto; color: #516172; font: 400 .98rem/1.55 var(--font-sans); }
        .greetings-message-ornament { position: absolute; right: 3%; top: 4rem; color: rgba(174,132,65,.2); font: italic 1.15rem/1.45 var(--font-display); transform: rotate(-8deg); }
        .greetings-message-ornament::after { content: ""; display: block; width: 70px; height: 1px; margin: .6rem auto 0; background: #c79a4b; }
        .greetings-message-gallery { position: relative; margin-top: 2rem; padding: 0 1rem; }
        .greetings-message-track { display: flex; align-items: end; gap: 1.25rem; padding: .5rem 0 1rem; }
        .greetings-message-card { position: relative; flex: 1 1 0; min-width: 0; padding: .45rem; border: 1px solid rgba(196,148,65,.52); border-radius: .45rem; background: #fffdf8; box-shadow: 0 9px 17px rgba(83,60,25,.12); cursor: zoom-in; opacity: .9; transition: transform 700ms cubic-bezier(.22,1,.36,1), box-shadow 320ms ease, border-color 320ms ease, opacity 320ms ease; }
        .greetings-message-card:nth-child(1), .greetings-message-card:nth-child(6) { opacity: .72; }
        .greetings-message-card:nth-child(2), .greetings-message-card:nth-child(5) { opacity: .84; }
        .greetings-message-card:hover, .greetings-message-card.greetings-message-card-active { transform: translateY(-4px); border-color: rgba(187,133,30,.8); box-shadow: 0 16px 26px rgba(83,60,25,.18); opacity: 1; }
        .greetings-message-card img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: contain; background: #fff; }
        .greetings-message-card-label { position: absolute; right: .75rem; bottom: .75rem; padding: .25rem .4rem; color: #a8751d; background: rgba(255,253,248,.86); font: 700 .55rem/1 var(--font-sans); letter-spacing: .12em; opacity: 0; transition: opacity 200ms ease; }
        .greetings-message-card:hover .greetings-message-card-label, .greetings-message-card-active .greetings-message-card-label { opacity: 1; }
        .greetings-message-pagination { display: flex; justify-content: center; gap: .45rem; margin: .35rem 0 1.05rem; }
        .greetings-message-dot { width: .45rem; height: .45rem; border: 0; border-radius: 50%; background: rgba(163,126,65,.35); transition: transform 220ms ease, background 220ms ease; }
        .greetings-message-dot-active { background: #c68c1b; transform: scale(1.35); }
        .greetings-message-view-all { display: inline-flex; align-items: center; gap: .55rem; padding: .72rem 1.8rem; border: 1px solid #c99943; border-radius: .35rem; background: rgba(255,253,248,.75); color: #213247; font: 700 .82rem/1 var(--font-sans); box-shadow: 0 4px 10px rgba(83,60,25,.08); transition: background 240ms ease, color 240ms ease, transform 240ms ease, box-shadow 240ms ease; }
        .greetings-message-view-all:hover { background: #c68c1b; color: #fffaf0; transform: translateY(-2px); box-shadow: 0 8px 15px rgba(83,60,25,.16); }
        .greetings-message-view-all svg { color: #c68c1b; transition: color 240ms ease, transform 240ms ease; }.greetings-message-view-all:hover svg { color: #fffaf0; transform: scale(1.08); }
        .greetings-message-lightbox { position: fixed; inset: 0; z-index: 50; display: grid; place-items: center; padding: 2rem; background: rgba(6,16,28,.84); backdrop-filter: blur(5px); }
        .greetings-message-lightbox-panel { position: relative; display: flex; align-items: center; gap: 1rem; width: min(860px, 100%); height: min(90vh, 780px); }
        .greetings-message-lightbox-document { display: block; width: min(560px, calc(100% - 5rem)); height: 100%; margin: auto; object-fit: contain; border: .5rem solid #fffdf8; background: #fff; box-shadow: 0 25px 60px rgba(0,0,0,.35); }
        .greetings-message-lightbox-close { position: absolute; top: -1.7rem; right: 0; display: grid; place-items: center; width: 2.4rem; height: 2.4rem; border: 1px solid rgba(255,255,255,.4); border-radius: 50%; background: transparent; color: #fff; }
        .greetings-message-lightbox-arrow { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; flex: 0 0 auto; border: 1px solid rgba(255,255,255,.5); border-radius: 50%; background: rgba(198,140,27,.9); color: #fff; }
        .greetings-message-lightbox-counter { position: absolute; bottom: -1.8rem; left: 50%; color: #f9f0de; font: 600 .75rem/1 var(--font-sans); letter-spacing: .15em; transform: translateX(-50%); }
        @media (max-width: 1100px) { .greetings-message-track { gap: 1rem; }.greetings-message-card { flex: 0 0 calc((100% - 2rem) / 3); }.greetings-message-card:nth-child(n+4) { display: none; }.greetings-message-gallery { padding: 0 1rem; } }
        @media (max-width: 640px) { .greetings-message-section { padding: 3.2rem 0 3rem; }.greetings-message-ornament { display: none; }.greetings-message-gallery { margin-top: 1.5rem; padding: 0 1rem; }.greetings-message-track { display: block; padding-inline: 0; }.greetings-message-card { display: none !important; max-width: 275px; margin: 0 auto; }.greetings-message-card.greetings-message-card-active { display: block !important; transform: none; }.greetings-message-lightbox { padding: 1rem; }.greetings-message-lightbox-panel { height: 82vh; }.greetings-message-lightbox-document { width: calc(100% - 3rem); }.greetings-message-lightbox-arrow { width: 2.1rem; height: 2.1rem; }.greetings-message-lightbox-close { top: -2.5rem; right: 0; } }
        @media (prefers-reduced-motion: reduce) { .greetings-message-section *, .greetings-message-section::before, .greetings-message-section::after { animation: none !important; transition-duration: .01ms !important; } }
      `}</style>
      <div className="greetings-message-inner">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="greetings-message-header"
        >
          <span className="greetings-message-eyebrow">LETTERS OF SUPPORT</span>
          <span className="greetings-message-heading">Greetings <span>Message</span></span>
          <span className="greetings-message-description">Words of encouragement from dignitaries, organizations and well-wishers who support our mission of reconnecting generations.</span>
        </motion.h2>
        <div className="greetings-message-ornament" aria-hidden="true">Messages of Support<br />for a Brighter Tomorrow</div>

        <div className="greetings-message-gallery">
          <motion.div layout className="greetings-message-track">
            {orderedGreetings.map((greeting, position) => (
              <motion.button
                layout
                type="button"
                key={greeting.src}
                onClick={() => { setActiveIndex(greeting.index); setLightboxIndex(greeting.index); }}
                className={`greetings-message-card ${position === 2 ? "greetings-message-card-active" : ""}`}
                aria-label={`Open ${greeting.alt}`}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={greeting.src} alt={greeting.alt} loading={position > 2 ? "lazy" : "eager"} />
                <span className="greetings-message-card-label">{greeting.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="greetings-message-pagination" aria-label="Greeting message pages">
          {greetingDetails.map((greeting, index) => (
            <button
              key={greeting.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`greetings-message-dot ${index === activeIndex ? "greetings-message-dot-active" : ""}`}
              aria-label={`Show greeting message ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#media"
            onClick={(event) => { event.preventDefault(); setLightboxIndex(activeIndex); }}
            className="greetings-message-view-all"
          >
            View All Messages <Eye className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="greetings-message-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Greeting message viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="greetings-message-lightbox-panel"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : .96, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : .96 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="greetings-message-lightbox-arrow" onClick={() => setLightboxIndex((current) => (current - 1 + greetingDetails.length) % greetingDetails.length)} aria-label="Previous document"><ChevronLeft aria-hidden="true" /></button>
              <img className="greetings-message-lightbox-document" src={greetingDetails[lightboxIndex].src} alt={greetingDetails[lightboxIndex].alt} />
              <button type="button" className="greetings-message-lightbox-arrow" onClick={() => setLightboxIndex((current) => (current + 1) % greetingDetails.length)} aria-label="Next document"><ChevronRight aria-hidden="true" /></button>
              <button type="button" className="greetings-message-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close document viewer"><X aria-hidden="true" /></button>
              <span className="greetings-message-lightbox-counter">{lightboxIndex + 1} / {greetingDetails.length}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
