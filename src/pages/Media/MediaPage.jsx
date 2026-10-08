import { useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Hand, MousePointerClick } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import DomeGallery from "../../components/DomeGallery";
import Stack from "../../components/Stack";
import { Eyebrow, FadeUp, MaskLines } from "../../components/About/AboutKit";
import { clippings, photos } from "../../data/media";
import "./MediaPage.css";

const ease = [0.22, 1, 0.36, 1];

/* ---- Hero: a dome of photographs you can spin ----------------------- */

function DomeHero() {
  const reduceMotion = useReducedMotion();
  const lines = [
    { key: "l1", content: "Every frame," },
    { key: "l2", content: <>a <span className="t-accent text-[#E5B869]">homecoming.</span></> },
  ];
  return (
    <section className="md-hero" aria-label="Photo gallery">
      <motion.div
        className="md-dome"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
      >
        <DomeGallery
          images={photos}
          overlayBlurColor="#05070C"
          fit={0.62}
          minRadius={520}
          grayscale
          imageBorderRadius="18px"
          openedImageBorderRadius="20px"
          openedImageWidth="min(520px, 86vw)"
          openedImageHeight="min(390px, 64vw)"
        />
      </motion.div>

      <div className="md-hero-copy content-container">
        <motion.p
          className="t-eyebrow text-[#E5B869]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
        >
          Media · {photos.length} photographs
        </motion.p>
        <h1 className="t-display mt-4 text-[#FAF7F2]" style={{ fontSize: "min(var(--text-display), 10svh)" }}>
          {lines.map((line, i) => (
            <span key={line.key} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: reduceMotion ? 0 : "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6 + i * 0.12, ease }}
              >
                {line.content}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="md-hint"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          <Hand aria-hidden="true" /> Drag to spin <span aria-hidden="true">·</span> <MousePointerClick aria-hidden="true" /> Tap a photo to open
        </motion.p>
      </div>
    </section>
  );
}

/* ---- News: a deck of clippings ---------------------------------------- */

function Clipping({ clip }) {
  return (
    <figure className="md-clip">
      <div className="md-clip-paper">
        <img src={clip.image} alt={clip.hindi ?? clip.english} draggable={false} />
      </div>
      <figcaption>
        {clip.paper && <span className="t-eyebrow text-[#B9873A]">{clip.paper}</span>}
        <span className="md-clip-en">{clip.english}</span>
      </figcaption>
    </figure>
  );
}

function Newsroom() {
  // Stable card list: Stack resets itself whenever the array identity changes.
  const cards = useMemo(() => [...clippings].reverse().map((clip) => <Clipping key={clip.image} clip={clip} />), []);
  return (
    <section id="news" className="md-news" aria-labelledby="news-heading">
      <div className="content-container grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Eyebrow>In the papers</Eyebrow>
          <div id="news-heading">
            <MaskLines lines={["Our story in"]} accent="the headlines" className="t-h1 mt-5 text-[#18181B]" />
          </div>
          <FadeUp>
            <p className="t-lead mt-6 max-w-md text-[#4B5563]">
              Festivals, diplomacy, relief work and reunions — {clippings.length} clippings from the Hindi and English press.
            </p>
            <p className="md-hint md-hint--dark mt-8">
              <Hand aria-hidden="true" />
              <span className="md-hint-pointer">Throw the top clipping aside to read the next</span>
              <span className="md-hint-touch">Tap the clipping to read the next</span>
            </p>
          </FadeUp>
        </div>

        <FadeUp className="flex justify-center lg:col-span-7" delay={0.1}>
          <div className="md-stack">
            <Stack cards={cards} sensitivity={140} randomRotation={false} sendToBackOnClick mobileClickOnly />
          </div>
        </FadeUp>
      </div>

      {/* Every headline, drifting past */}
      <div className="md-ticker" aria-label="Headlines">
        <ul className="md-ticker-track">
          {[0, 1].map((copy) =>
            clippings
              .filter((clip) => clip.hindi)
              .map((clip) => (
                <li key={`${copy}-${clip.image}`} aria-hidden={copy === 1 ? "true" : undefined}>
                  <span lang="hi">{clip.hindi}</span>
                  <span className="md-ticker-star" aria-hidden="true">✦</span>
                </li>
              ))
          )}
        </ul>
      </div>
    </section>
  );
}

export default function MediaPage() {
  useEffect(() => {
    document.title = "Media | Girmitiya Foundation";
  }, []);

  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <DomeHero />
        <Newsroom />
      </main>
      <Footer />
    </>
  );
}
