import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Heart, Mail } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import {
  Eyebrow,
  FadeUp,
  HorizontalGallery,
  MaskLines,
  Marquee,
  NextPage,
  PageHero,
  PageTabs,
  ScrollStatement,
} from "../../components/About/AboutKit";
import { work, workPages } from "../../data/work";
import { contact } from "../../data/contact";

const ease = [0.22, 1, 0.36, 1];

function Objectives({ overview, objectives }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
      <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-44">
            <Eyebrow>Objectives</Eyebrow>
            <MaskLines lines={["What we"]} accent="aim for" className="t-h2 mt-5 text-[#18181B]" />
            <FadeUp>
              <p className="t-body mt-6 text-[#4B5563]">{overview}</p>
            </FadeUp>
          </div>
        </div>

        <ul className="border-t border-[#18181B]/12 lg:col-span-7">
          {objectives.map((text, i) => (
            <motion.li
              key={text}
              className="group flex items-start gap-5 border-b border-[#18181B]/12 py-7 sm:py-9"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
            >
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C59B27]/50 text-[#B9873A] transition-colors duration-300 group-hover:border-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-white">
                <Check className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <p className="text-[clamp(1.15rem,1rem+0.7vw,1.6rem)] font-medium leading-snug tracking-[-0.02em] text-[#18181B] transition-transform duration-500 group-hover:translate-x-1.5">
                {text.replace(/^To /, "").replace(/^./, (c) => c.toUpperCase())}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Support({ label }) {
  return (
    <section className="bg-[#0A101D] py-20 text-[#FAF7F2] sm:py-28">
      <div className="content-container grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow light>Get involved</Eyebrow>
          <MaskLines lines={[`Support ${label.toLowerCase()}`]} accent="with us" light className="t-h1 mt-5" />
        </div>
        <FadeUp className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <a href="/donate" className="btn-gold justify-center">
            Donate now <Heart className="h-4 w-4" />
          </a>
          <a href={`mailto:${contact.email}`} className="btn-outline justify-center">
            Volunteer <Mail className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export default function WorkPage({ slug }) {
  const data = work[slug];
  const meta = workPages.find((page) => page.slug === slug);

  useEffect(() => {
    document.title = `${meta.label} | Girmitiya Foundation`;
  }, [meta.label]);

  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <PageHero hero={data.hero} />
        <PageTabs pages={workPages} current={slug} label="Our Work" />
        <ScrollStatement eyebrow="Overview" text={data.statement} image={data.statementImage} />
        <Objectives overview={data.overview} objectives={data.objectives} />
        <HorizontalGallery eyebrow="Key initiatives" title="How we make" accent="it happen" items={data.initiatives} />
        <section className="overflow-hidden bg-[#F2ECE1] py-16 sm:py-20">
          <div className="content-container mb-8">
            <Eyebrow>From the field</Eyebrow>
          </div>
          <Marquee items={data.gallery} />
        </section>
        <Support label={meta.label} />
        <NextPage pages={workPages} current={slug} />
      </main>
      <Footer />
    </>
  );
}
