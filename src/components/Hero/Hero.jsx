import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf, Users, Star, HandHeart, HeartHandshake } from "lucide-react";

import hero1 from "../../assets/images/hero 1 (1).jpg";
import hero2 from "../../assets/images/hero 2.jpg";
import hero3 from "../../assets/images/hero 3.jpg";
import hero4 from "../../assets/images/hero 4.webp";
import hero5 from "../../assets/images/hero 5.jpg";
import hero6 from "../../assets/images/hero 6.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const pillars = [
  {
    icon: HandHeart,
    title: "Care",
    subtitle: "For Communities",
  },
  {
    icon: Users,
    title: "Connect",
    subtitle: "Generations & Roots",
  },
  {
    icon: Star,
    title: "Celebrate",
    subtitle: "Culture & Heritage",
  },
  {
    icon: HeartHandshake,
    title: "Contribute",
    subtitle: "For A Better Tomorrow",
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5-second automatic slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Awwwards-style easing curve
  const easeTransition = [0.22, 1, 0.36, 1];

  const lineVariants = {
    hidden: { y: "110%", opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.12 * i,
        ease: easeTransition,
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: 0.25 + i * 0.1,
        ease: easeTransition,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0A101D]"
    >
      {/* Full-screen Background Awwwards Image Slider (5-second auto change, Ken Burns zoom) */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: easeTransition },
              scale: { duration: 6, ease: "easeOut" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentSlide]}
              alt={`Girmitiya Foundation Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Light top band so the nav stays legible; the rest of the image is left bright */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-1" />
      </div>

      {/* Main Content Area — vertically centered to fit in 100vh */}
      <div className="content-container relative flex flex-1 items-center pt-28 pb-10 sm:pt-28 md:pt-32 lg:pb-4 z-10">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text & Call to Action Column */}
          <div className="relative lg:col-span-7 xl:col-span-6">
            {/* Soft shadow limited to the text block */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 -inset-y-12 -z-10 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.35)_45%,transparent_72%)] blur-2xl"
            />

            {/* Main Headline with Masked Staggered Line Reveal (100% Selectable Text) */}
            <h1 className="t-display text-[#FAF7F2] select-text drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]" style={{ fontSize: "min(var(--text-display), 8.6svh)" }}>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  custom={0}
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  Reconnecting
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  Generations
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  className="t-accent block pr-2 bg-gradient-to-r from-[#F2E2C2] via-[#E5B869] to-[#C59B27] bg-clip-text text-transparent"
                >
                  With Their Roots
                </motion.span>
              </span>
            </h1>

            {/* Description Paragraph (100% Selectable Text) */}
            <motion.p
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="t-lead mt-5 max-w-[30rem] text-white/85 select-text drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
            >
              Helping the Girmitiya diaspora find their ancestral villages in India.
            </motion.p>

            {/* Action Buttons with Micro-interactions */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3"
            >
              {/* Primary Button */}
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[#C59B27] px-6 py-3.5 sm:py-3 text-[15px] sm:text-base font-semibold text-[#0A101D] shadow-md shadow-[#C59B27]/20 transition-[background-color,box-shadow] duration-200 hover:bg-[#B58B20] hover:shadow-lg hover:shadow-[#C59B27]/30 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="/girmitiya-chapter"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 sm:py-3 text-[15px] sm:text-base font-semibold text-[#FAF7F2] backdrop-blur-md transition-[background-color,border-color] duration-200 hover:bg-white/10 hover:border-white/60 cursor-pointer"
              >
                <span>Reconnect Your Roots</span>
                <Leaf className="h-4 w-4 text-[#C59B27] transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-110" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Clean spacious area */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 h-[190px] lg:h-[250px] xl:h-[290px] w-full" />
        </div>
      </div>

      {/* Bottom Curved Wave Section — Perfectly Balanced Positioning */}
      <div className="relative mt-auto shrink-0 z-20 w-full">
        {/* Sweeping Curve SVG Header */}
        <div className="w-full leading-none overflow-hidden select-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block align-bottom"
            preserveAspectRatio="none"
          >
            <path
              d="M -2,95 C 320,95 500,68 800,32 C 1040,10 1260,4 1442,0 L 1442,122 L -2,122 Z"
              fill="#0A101D"
            />
            <path
              d="M -2,95 C 320,95 500,68 800,32 C 1040,10 1260,4 1442,0"
              stroke="#C59B27"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Dark Bottom Area — Comfortably centered with ample breathing room above & below */}
        <div className="relative overflow-hidden bg-[#0A101D] -mt-[1px] pb-8 sm:pb-9 pt-2 text-[#FAF6F0]">
          {/* Pillars & Scroll to Explore Container — Clean, Spacious & Balanced */}
          <div className="content-container relative z-10">
            {/* 4 Pillars — Balanced spacing, prominent icons, clear text */}
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0 sm:divide-x divide-white/10 relative z-10">
              {pillars.map(({ icon: Icon, title, subtitle }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col items-center text-center px-3 sm:px-6 py-1 sm:py-0.5 cursor-default"
                >
                  <div className="relative flex items-center justify-center mb-1.5">
                    <span className="absolute inset-0 rounded-full bg-[#E5B869]/15 blur-sm transition-all duration-300 group-hover:bg-[#E5B869]/35" />
                    <Icon
                      className="relative h-7 w-7 sm:h-8 sm:w-8 md:h-8.5 md:w-8.5 text-[#E5B869] drop-shadow-[0_0_8px_rgba(229,184,105,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:text-[#FDE047]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[15px] sm:text-base font-semibold tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-[#E5B869]">
                    {title}
                  </span>
                  <span className="mt-1 text-xs sm:text-[13px] text-white/60 transition-colors duration-200 group-hover:text-white/85">
                    {subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
