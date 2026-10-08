import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Check, Copy, Landmark } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import { Eyebrow, FadeUp, MaskLines } from "../../components/About/AboutKit";
import familyReunion from "../../assets/about/family-reunion.webp";
import { chapterPages } from "../../data/chapter";
import { workPages } from "../../data/work";
import "./DonatePage.css";

const ease = [0.22, 1, 0.36, 1];

// Bank details as published on girmitiyafoundation.org/donate
const bank = {
  name: "Girmitiya Foundation",
  type: "Current Account",
  bank: "Bank of Baroda",
  account: "27520200003523",
  ifsc: "BARB0MAYVIH",
  branch: "Mayur Vihar Phase 1",
};

const rows = [
  { label: "Account name", value: bank.name },
  { label: "Account number", value: bank.account, display: bank.account.replace(/(\d{4})(?=\d)/g, "$1 "), mono: true },
  { label: "IFSC", value: bank.ifsc, mono: true },
  { label: "Bank", value: bank.bank },
  { label: "Branch", value: bank.branch },
  { label: "Account type", value: bank.type },
];

const allDetails = rows.map((row) => `${row.label}: ${row.value}`).join("\n");

const causes = [
  { ...chapterPages[2], label: "Reconnecting families" },
  { ...chapterPages[1] },
  { ...workPages[1] },
  { ...workPages[2] },
];

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers without async clipboard access.
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

function useCopied() {
  const [copied, setCopied] = useState(null);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async (key, text) => {
    if (await copyText(text)) {
      setCopied(key);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(null), 1800);
    }
  };
  return [copied, copy];
}

/* ---- Hero ----------------------------------------------------------- */

function DonateHero() {
  const reduceMotion = useReducedMotion();
  const lines = ["Your gift brings", "a family"];
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-[#05070C] text-[#FAF7F2]">
      <motion.img
        src={familyReunion}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={reduceMotion ? false : { scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2, ease }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070C] via-[#05070C]/70 to-[#05070C]/30" />
      <div className="content-container relative z-10 pb-16 pt-36 sm:pb-24">
        <motion.p
          className="t-eyebrow text-[#E5B869]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          Donate
        </motion.p>
        <h1 className="t-display mt-5 max-w-[14ch]" style={{ fontSize: "min(var(--text-display), 11svh)" }}>
          {[...lines, "home."].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${i === lines.length ? "t-accent text-[#E5B869]" : ""}`}
                initial={{ y: reduceMotion ? 0 : "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="t-lead mt-6 max-w-xl text-white/72"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          Support the search for ancestral villages, the Girmitiya Yatra, and education and skills for communities in India.
        </motion.p>
      </div>
    </section>
  );
}

/* ---- Tilting bank card ---------------------------------------------- */

function BankCard() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-14, 14]), spring);
  const shineX = useTransform(px, [0, 1], ["0%", "100%"]);
  const shineY = useTransform(py, [0, 1], ["0%", "100%"]);
  const shine = useMotionTemplate`radial-gradient(circle at ${shineX} ${shineY}, rgba(255,240,200,0.28), transparent 45%)`;

  const onMove = (event) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className="dn-card-stage"
      style={{ transformPerspective: 1100 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 50, rotateX: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease }}
    >
      <motion.div ref={ref} className="dn-card" style={reduceMotion ? undefined : { rotateX, rotateY }}>
        <motion.span className="dn-card-shine" style={{ background: shine }} aria-hidden="true" />
        <div className="dn-card-top">
          <span className="dn-card-chip" aria-hidden="true" />
          <span className="dn-card-bank">
            <Landmark aria-hidden="true" /> {bank.bank}
          </span>
        </div>
        <p className="dn-card-number">{rows[1].display}</p>
        <div className="dn-card-bottom">
          <div>
            <span className="dn-card-label">Account name</span>
            <span className="dn-card-value">{bank.name}</span>
          </div>
          <div className="text-right">
            <span className="dn-card-label">IFSC</span>
            <span className="dn-card-value">{bank.ifsc}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Details() {
  const [copied, copy] = useCopied();
  const reduceMotion = useReducedMotion();
  return (
    <section className="dn-transfer overflow-x-clip bg-[#05070C] pb-24 text-[#FAF7F2] sm:pb-32">
      <div className="content-container">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow light>Give by bank transfer</Eyebrow>
            <MaskLines lines={["Transfer directly"]} accent="to the foundation" light className="t-h2 mt-5" />
            <div className="mt-10">
              <BankCard />
            </div>
          </div>

          <div className="lg:col-span-6">
            <dl className="border-t border-white/10">
              {rows.map((row, i) => {
                const isCopied = copied === row.label;
                return (
                  <motion.div
                    key={row.label}
                    className="dn-row"
                    initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease }}
                  >
                    <dt className="t-eyebrow text-white/50">{row.label}</dt>
                    <dd className={`dn-row-value ${row.mono ? "font-mono tracking-[0.04em]" : ""}`}>{row.display ?? row.value}</dd>
                    <button
                      type="button"
                      className={`dn-copy ${isCopied ? "is-copied" : ""}`}
                      onClick={() => copy(row.label, row.value)}
                      aria-label={`Copy ${row.label}`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={isCopied ? "done" : "copy"}
                          className="flex items-center gap-1.5"
                          initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
                          transition={{ duration: 0.18 }}
                        >
                          {isCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                          {isCopied ? "Copied" : "Copy"}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </dl>

            <FadeUp className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" className="btn-gold justify-center" onClick={() => copy("all", allDetails)}>
                {copied === "all" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied === "all" ? "All details copied" : "Copy all details"}
              </button>
              <a href="/contact" className="btn-outline justify-center">
                Questions? Contact us <ArrowUpRight className="h-4 w-4" />
              </a>
            </FadeUp>
            <p className="sr-only" aria-live="polite">{copied ? "Copied to clipboard" : ""}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Where it goes -------------------------------------------------- */

function Causes() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="bg-[#FAF7F2] py-20 sm:py-28">
      <div className="content-container">
        <Eyebrow>Where your gift goes</Eyebrow>
        <MaskLines lines={["Work you make"]} accent="possible" className="t-h2 mt-5 text-[#18181B]" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {causes.map((cause, i) => (
            <motion.li
              key={cause.href}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <a href={cause.href} className="dn-cause group">
                <img src={cause.image} alt="" loading="lazy" />
                <span className="dn-cause-shade" aria-hidden="true" />
                <span className="dn-cause-body">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-[#E5B869]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-auto block text-xl font-semibold leading-tight tracking-[-0.02em]">{cause.label}</span>
                  <span className="mt-2 block text-sm text-white/70">{cause.blurb}</span>
                </span>
                <span className="dn-cause-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function DonatePage() {
  useEffect(() => {
    document.title = "Donate | Girmitiya Foundation";
  }, []);

  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <DonateHero />
        <Details />
        <Causes />
      </main>
      <Footer />
    </>
  );
}
