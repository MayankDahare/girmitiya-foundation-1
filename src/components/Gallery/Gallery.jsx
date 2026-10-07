import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import "./Gallery.css";

// Letters of support published on girmitiyafoundation.org
import g1 from "../../assets/greetings/greeting-01.jpg";
import g2 from "../../assets/greetings/greeting-02.jpg";
import g3 from "../../assets/greetings/greeting-03.jpg";
import g4 from "../../assets/greetings/greeting-04.jpg";
import g5 from "../../assets/greetings/greeting-05.jpg";
import g6 from "../../assets/greetings/greeting-06.jpg";
import g7 from "../../assets/greetings/greeting-07.jpg";
import g8 from "../../assets/greetings/greeting-08.jpg";

const greetingDetails = [g1, g2, g3, g4, g5, g6, g7, g8].map((src, index) => ({
  src,
  alt: `Letter of support ${index + 1} sent to Girmitiya Foundation`,
  label: `Message ${String(index + 1).padStart(2, "0")}`,
}));

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const reduceMotion = useReducedMotion();
  const total = greetingDetails.length;

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current - 1 + total) % total);
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current + 1) % total);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, total]);

  // The track holds the set twice so translating it by half its width loops seamlessly.
  const renderSet = (copy) =>
    greetingDetails.map((greeting, index) => (
      <button
        type="button"
        key={`${copy}-${greeting.src}`}
        onClick={() => setLightboxIndex(index)}
        className="gm-card"
        aria-label={copy === 0 ? `Open ${greeting.alt}` : undefined}
        aria-hidden={copy === 1 ? "true" : undefined}
        tabIndex={copy === 1 ? -1 : undefined}
      >
        <span className="gm-card-frame">
          <img src={greeting.src} alt={copy === 0 ? greeting.alt : ""} loading="lazy" decoding="async" />
        </span>
        <span className="gm-card-label">
          <span>{greeting.label}</span>
          <Eye aria-hidden="true" />
        </span>
      </button>
    ));

  return (
    <section id="media" className="greetings-message-section">
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

        <div
          className={`gm-marquee ${lightboxIndex !== null ? "gm-marquee-paused" : ""}`}
          aria-label="Letters of support, hover to pause"
          role="region"
        >
          <div className="gm-track">
            {renderSet(0)}
            {!reduceMotion && renderSet(1)}
          </div>
        </div>

        <p className="gm-hint" aria-hidden="true"><span className="gm-hint-pointer">Hover to pause &nbsp;·&nbsp; Click a letter to read it</span><span className="gm-hint-touch">Tap a letter to read it</span></p>

        <div className="text-center">
          <a
            href="#media"
            onClick={(event) => { event.preventDefault(); setLightboxIndex(0); }}
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
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="greetings-message-lightbox-panel"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : .96, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : .96 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="greetings-message-lightbox-arrow" onClick={() => setLightboxIndex((current) => (current - 1 + total) % total)} aria-label="Previous document"><ChevronLeft aria-hidden="true" /></button>
              <img className="greetings-message-lightbox-document" src={greetingDetails[lightboxIndex].src} alt={greetingDetails[lightboxIndex].alt} />
              <button type="button" className="greetings-message-lightbox-arrow" onClick={() => setLightboxIndex((current) => (current + 1) % total)} aria-label="Next document"><ChevronRight aria-hidden="true" /></button>
              <button type="button" className="greetings-message-lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close document viewer"><X aria-hidden="true" /></button>
              <span className="greetings-message-lightbox-counter">{lightboxIndex + 1} / {total}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
