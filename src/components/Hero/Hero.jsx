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
  const [indexHovered, setIndexHovered] = useState(false);
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
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#FAF7F2] lg:h-screen lg:max-h-screen"
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

        {/* Luxury Dual Gradient Overlays for High Contrast & Crystal-Clear Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-[#FAF7F2]/30 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D]/40 via-transparent to-[#FAF7F2]/50 z-1" />
      </div>

      {/* Far Left Section Index & Active Animated Dots */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easeTransition }}
        onMouseEnter={() => setIndexHovered(true)}
        onMouseLeave={() => setIndexHovered(false)}
        className="group absolute left-4 sm:left-6 lg:left-8 top-[36%] hidden -translate-y-1/2 flex-col items-center gap-3 text-[#B9873A] md:flex z-20 select-none cursor-default"
      >
        {/* Number '01' with Micro-interactions */}
        <motion.div
          animate={{
            scale: indexHovered ? 1.2 : [1, 1.06, 1],
            color: indexHovered ? "#9A6B1A" : "#B9873A",
          }}
          transition={{
            scale: indexHovered ? { duration: 0.25 } : { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative flex items-center justify-center font-display text-xs sm:text-sm font-bold tracking-widest"
        >
          {/* Ambient Glow Aura on Hover */}
          <motion.span
            animate={{
              opacity: indexHovered ? 0.6 : 0,
              scale: indexHovered ? 1.6 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-2 rounded-full bg-[#C59B27]/30 blur-md pointer-events-none"
          />
          <span className="relative drop-shadow-xs">01</span>
        </motion.div>

        {/* Vertical Connecting Guide Line on Hover */}
        <motion.div
          animate={{
            height: indexHovered ? 12 : 6,
            opacity: indexHovered ? 0.8 : 0.35,
          }}
          transition={{ duration: 0.3 }}
          className="w-px bg-gradient-to-b from-[#B9873A] to-transparent rounded-full"
        />

        {/* 3 Active Animated Dots with Wave Ripple Animation & Hover Interaction */}
        <div className="flex flex-col items-center gap-2.5 relative">
          {[0, 1, 2].map((dotIndex) => (
            <motion.span
              key={dotIndex}
              animate={{
                scale: indexHovered
                  ? [1, 1.8, 1]
                  : shouldReduceMotion
                  ? 1
                  : [1, 1.45, 1],
                opacity: indexHovered
                  ? [0.7, 1, 0.7]
                  : shouldReduceMotion
                  ? 0.6
                  : [0.4, 0.95, 0.4],
                boxShadow: indexHovered
                  ? [
                      "0 0 0px rgba(197,155,39,0)",
                      "0 0 10px rgba(197,155,39,0.9)",
                      "0 0 0px rgba(197,155,39,0)",
                    ]
                  : "0 0 4px rgba(197,155,39,0.3)",
              }}
              transition={{
                duration: indexHovered ? 0.8 : 2,
                repeat: Infinity,
                delay: dotIndex * (indexHovered ? 0.18 : 0.35),
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#B9873A] transition-colors"
            />
          ))}
        </div>

        {/* Floating Tooltip Reveal on Hover */}
        <motion.div
          initial={{ opacity: 0, x: -10, pointerEvents: "none" }}
          animate={{
            opacity: indexHovered ? 1 : 0,
            x: indexHovered ? 0 : -10,
          }}
          transition={{ duration: 0.25, ease: easeTransition }}
          className="absolute left-9 sm:left-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0A101D] px-3 py-1.5 text-[11px] font-semibold text-[#FAF6F0] shadow-xl border border-[#C59B27]/40 pointer-events-none z-30"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27] animate-ping" />
            <span className="text-[#C59B27] font-bold">01</span>
            <span className="text-white/40">•</span>
            <span>Welcome & Heritage</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Area — vertically centered to fit in 100vh */}
      <div className="content-container relative flex flex-1 items-center pt-14 sm:pt-18 md:pt-20 pb-1 z-10">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text & Call to Action Column */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Eyebrow Tagline */}
            <div className="overflow-hidden mb-2 sm:mb-3 pt-2 sm:pt-3 md:pt-4">
              <motion.p
                initial="hidden"
                animate="show"
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B9873A] uppercase font-sans select-text"
              >
                <span className="h-px w-5 bg-[#B9873A]/60" />
                PRESERVING HERITAGE. EMPOWERING FUTURES.
              </motion.p>
            </div>

            {/* Main Headline with Masked Staggered Line Reveal (100% Selectable Text) */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.4rem] font-bold leading-[1.12] text-[#18181B] select-text">
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
                  className="block text-[#C59B27] drop-shadow-sm"
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
              className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-[15px] leading-relaxed text-[#4B5563] select-text"
            >
              A socio-cultural and educational skill development trust improving lives
              through education, women empowerment, skill training and cultural
              enrichment for marginalized and underprivileged communities.
            </motion.p>

            {/* Action Buttons with Micro-interactions */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5"
            >
              {/* Primary Button */}
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#C59B27] px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#C59B27]/20 transition-all duration-200 hover:bg-[#B58B20] hover:shadow-lg hover:shadow-[#C59B27]/30 cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#chapter"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group inline-flex items-center gap-2 rounded-md border border-[#18181B]/40 bg-white/80 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-[#18181B] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:border-[#18181B] hover:shadow-md cursor-pointer"
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
        <div className="relative overflow-hidden bg-[#0A101D] -mt-[1px] pb-7 sm:pb-9 pt-1 text-[#FAF6F0]">
          {/* Pillars & Scroll to Explore Container — Clean, Spacious & Balanced */}
          <div className="content-container relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 z-10">
            {/* Scroll To Explore */}
            <motion.div
              whileHover={{ y: 2 }}
              className="flex items-center gap-2.5 text-[#FAF6F0]/80 shrink-0 cursor-default group"
            >
              <span className="flex h-6 w-3.5 items-center justify-center rounded-full border border-[#C59B27]/70 transition-colors group-hover:border-[#C59B27] group-hover:shadow-[0_0_8px_rgba(197,155,39,0.5)]">
                <motion.span
                  animate={{ y: shouldReduceMotion ? 0 : [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1 w-1 rounded-full bg-[#C59B27]"
                />
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#E5D8B8] transition-colors group-hover:text-white">
                SCROLL TO EXPLORE
              </span>
            </motion.div>

            {/* 4 Pillars — Balanced spacing, prominent icons, clear text */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 w-full sm:w-auto sm:flex-1 sm:max-w-4xl lg:max-w-5xl relative z-10">
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
                  <span className="font-display text-sm sm:text-base font-semibold text-white tracking-wide transition-colors duration-200 group-hover:text-[#E5B869]">
                    {title}
                  </span>
                  <span className="mt-0.5 text-[11px] sm:text-xs text-white/80 transition-colors duration-200 group-hover:text-white">
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
