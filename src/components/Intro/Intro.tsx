import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import seal from "../../assets/logos/foundation-seal.svg";
import { introPoints } from "../../data/homepage";

export default function Intro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden bg-cream-100 py-20 md:py-28">
      <div className="content-container grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">WELCOME TO</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Girmitiya Foundation
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-700">
            Girmitiya Foundation is a socio-cultural and educational skill
            development trust focused on improving lives through Education,{" "}
            <strong className="font-semibold text-ink-900">
              Women Empowerment, Skill training
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-ink-900">Cultural</strong>{" "}
            enrichment, particularly among marginalized and underprivileged
            communities.
          </p>

          <ul className="mt-7 flex flex-col gap-4">
            {introPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-ink-700">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto flex max-w-sm items-center justify-center"
        >
          <img
            src={seal}
            alt="Girmitiya Foundation official seal — Reconnect to your roots"
            className="w-full max-w-[320px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
