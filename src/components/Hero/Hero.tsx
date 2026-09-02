import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "../../assets/images/hero.svg";
import { heroPillars } from "../../data/homepage";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pb-24 pt-20 md:pb-32 md:pt-24">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" role="presentation" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      {/* vertical "01" section index, left edge */}
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-cream-100/50 md:flex">
        <span className="text-xs font-semibold tracking-widest">01</span>
        <span className="h-16 w-px bg-cream-100/30" />
      </div>

      <div className="content-container relative">
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="max-w-2xl font-display text-4xl font-bold leading-[1.1] text-cream-100 sm:text-5xl md:text-6xl"
        >
          Reconnecting
          <br />
          Generations
          <br />
          <span className="text-gold-400">With Their Roots</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-6 max-w-lg text-base leading-relaxed text-cream-100/80 md:text-lg"
        >
          A socio-cultural and educational skill development trust improving lives
          through education, women empowerment, skill training and cultural
          enrichment for marginalized and underprivileged communities.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#programs" className="btn-gold">
            Explore Our Work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#donate" className="btn-outline">
            Donate Now <Heart className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <div className="content-container relative mt-16 md:mt-20">
        <div className="hidden items-center gap-2 text-cream-100/60 md:flex">
          <span className="flex h-8 w-5 items-center justify-center rounded-full border border-cream-100/30">
            <span className="h-2 w-2 animate-bounce rounded-full bg-cream-100/60" />
          </span>
          <span className="text-xs font-semibold tracking-widest">SCROLL TO EXPLORE</span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-cream-100/10 pt-8 sm:grid-cols-4 sm:gap-4">
          {heroPillars.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
              <span className="font-display text-base font-semibold text-cream-100">{title}</span>
              <span className="text-xs text-cream-100/60">{subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
