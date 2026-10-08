import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, Move } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import {
  Eyebrow,
  FadeUp,
  HoverRevealList,
  MaskLines,
  Marquee,
  NextPage,
  PageHero,
  PageTabs,
  ScrollStatement,
} from "../../components/About/AboutKit";
import { chapter, chapterPages, colonies } from "../../data/chapter";
import "./ChapterPage.css";

const ease = [0.22, 1, 0.36, 1];

/* ---- The Girmitiya Story ------------------------------------------- */

function Facts({ facts, origins, body }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-[#0A101D] pt-20 text-[#FAF7F2] sm:pt-28">
      <div className="content-container">
        <Eyebrow light>In numbers</Eyebrow>
        <dl className="mt-10 grid gap-y-10 border-t border-white/10 sm:grid-cols-3">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              className="border-b border-white/10 pb-8 pt-8 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "-60px" }}
            >
              <dd className="overflow-hidden">
                <motion.span
                  className="block whitespace-nowrap text-[clamp(2.75rem,1.5rem+3.6vw,5rem)] font-semibold leading-none tracking-[-0.05em] text-[#E5B869]"
                  variants={{ hidden: { y: reduceMotion ? 0 : "105%" }, shown: { y: 0 } }}
                  transition={{ duration: 1, delay: i * 0.12, ease }}
                >
                  {fact.value}
                </motion.span>
              </dd>
              <dt className="t-eyebrow mt-4 text-white/60">{fact.label}</dt>
            </motion.div>
          ))}
        </dl>

        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-12">
          <FadeUp className="lg:col-span-5">
            <p className="t-eyebrow text-white/50">They came mostly from</p>
            <p className="mt-4 font-serif text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)] italic leading-[1.15] text-[#F2E2C2]">{origins}</p>
          </FadeUp>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7">
            {body.map((text, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <p className="t-body text-white/72">{text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Nine colonies, scrolling past in outline */}
      <div className="ch-colonies border-t border-white/10 py-6 sm:py-8" aria-label={`Colonies: ${colonies.join(", ")}`}>
        <div className="ch-colonies-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <span key={copy} className="ch-colonies-set">
              {colonies.map((name) => (
                <span key={name} className="ch-colony">
                  {name}
                  <span className="ch-colony-star">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Girmitiya Yatra ------------------------------------------------ */

function FocusAreas({ intro, focus }) {
  return (
    <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
      <div className="content-container">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Focus areas</Eyebrow>
            <MaskLines lines={["Seven ways the"]} accent="Yatra connects" className="t-h2 mt-5 text-[#18181B]" />
          </div>
          <FadeUp className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="t-body text-[#4B5563]">{intro}</p>
          </FadeUp>
        </div>
        <div className="mt-12 sm:mt-16">
          <HoverRevealList items={focus} />
        </div>
      </div>
    </section>
  );
}

/* ---- Reconnect to your Roots ---------------------------------------- */

function Aims({ intro, aims }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
      <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-44">
            <Eyebrow>Through this initiative</Eyebrow>
            <MaskLines lines={["What we"]} accent="set out to do" className="t-h2 mt-5 text-[#18181B]" />
            <FadeUp>
              <p className="t-body mt-6 text-[#4B5563]">{intro}</p>
            </FadeUp>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {aims.map((aim, i) => (
            <motion.li
              key={aim}
              className="group relative flex items-baseline gap-5 py-7 sm:gap-8 sm:py-9"
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "-40px" }}
            >
              {/* Rule draws in from the left */}
              <motion.span
                className="absolute inset-x-0 top-0 h-px origin-left bg-[#18181B]/15"
                variants={{ hidden: { scaleX: reduceMotion ? 1 : 0 }, shown: { scaleX: 1 } }}
                transition={{ duration: 1.1, ease }}
              />
              <span className="font-mono text-xs font-medium tracking-[0.14em] text-[#B9873A]">{String(i + 1).padStart(2, "0")}</span>
              <motion.p
                className="text-[clamp(1.25rem,1rem+1vw,2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-[#18181B] transition-colors duration-300 group-hover:text-[#B9873A]"
                variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 18 }, shown: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
              >
                {aim}
              </motion.p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Newspaper clippings scattered on a desk — each can be picked up and moved. */
const scatter = [
  { x: "2%", y: "4%", r: -6, w: "32%" },
  { x: "34%", y: "0%", r: 4, w: "30%" },
  { x: "60%", y: "22%", r: -3, w: "36%" },
  { x: "18%", y: "48%", r: 6, w: "26%" },
];

function PressDesk({ press }) {
  const deskRef = useRef(null);
  const reduceMotion = useReducedMotion();
  return (
    <section className="overflow-hidden bg-[#F2ECE1] py-20 sm:py-28">
      <div className="content-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>In the news</Eyebrow>
            <MaskLines lines={["Reunions that made"]} accent="headlines" className="t-h2 mt-5 text-[#18181B]" />
          </div>
          <p className="t-eyebrow hidden items-center gap-2 text-[#6B7280] md:inline-flex">
            <Move className="h-3.5 w-3.5" aria-hidden="true" /> Drag the clippings
          </p>
        </div>

        {/* Desktop: a free-form desk */}
        <div ref={deskRef} className="relative mt-12 hidden h-[620px] md:block">
          {press.map((clip, i) => (
            <motion.figure
              key={clip.caption}
              className="ch-clip absolute cursor-grab active:cursor-grabbing"
              style={{ left: scatter[i].x, top: scatter[i].y, width: scatter[i].w }}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: scatter[i].r }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
              drag={!reduceMotion}
              dragConstraints={deskRef}
              dragElastic={0.15}
              dragTransition={{ bounceStiffness: 260, bounceDamping: 22 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 20 }}
            >
              <img src={clip.image} alt={`Newspaper clipping: ${clip.caption}`} draggable={false} loading="lazy" />
              <figcaption>{clip.caption}</figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Phones: a simple swipeable row */}
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {press.map((clip) => (
            <figure key={clip.caption} className="ch-clip w-[78%] shrink-0 snap-center">
              <img src={clip.image} alt={`Newspaper clipping: ${clip.caption}`} loading="lazy" />
              <figcaption>{clip.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Shared --------------------------------------------------------- */

function SupportStrip() {
  return (
    <section className="bg-[#0A101D] py-20 text-[#FAF7F2] sm:py-24">
      <div className="content-container grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow light>Be part of the next chapter</Eyebrow>
          <MaskLines lines={["Help a family find"]} accent="its way home" light className="t-h1 mt-5" />
        </div>
        <FadeUp className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <a href="/donate" className="btn-gold justify-center">
            Donate now <Heart className="h-4 w-4" />
          </a>
          <a href="/contact" className="btn-outline justify-center">
            Contact us <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export default function ChapterPage({ slug }) {
  const data = chapter[slug];
  const meta = chapterPages.find((page) => page.slug === slug);

  useEffect(() => {
    document.title = `${meta.label} | Girmitiya Foundation`;
  }, [meta.label]);

  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <PageHero hero={data.hero} />
        <PageTabs pages={chapterPages} current={slug} label="Girmitiya Chapter" />
        <ScrollStatement
          eyebrow={slug === "story" ? "The word" : "The chapter"}
          text={data.statement}
          image={data.statementImage}
          imageCaption={data.statementCaption}
        />
        {slug === "story" && <Facts facts={data.facts} origins={data.origins} body={data.body} />}
        {slug === "girmitiya-yatra" && <FocusAreas intro={data.intro} focus={data.focus} />}
        {slug === "reconnect-to-your-roots" && (
          <>
            <Aims intro={data.intro} aims={data.aims} />
            <PressDesk press={data.press} />
          </>
        )}
        <section className="overflow-hidden bg-[#FAF7F2] py-16 sm:py-20">
          <div className="content-container mb-8">
            <Eyebrow>Along the way</Eyebrow>
          </div>
          <Marquee items={data.gallery} />
        </section>
        <SupportStrip />
        <NextPage pages={chapterPages} current={slug} />
      </main>
      <Footer />
    </>
  );
}
