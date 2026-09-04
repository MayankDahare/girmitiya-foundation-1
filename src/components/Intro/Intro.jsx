import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Landmark,
  Calendar,
  Award,
} from "lucide-react";
import girmitiyaLogo2 from "../../assets/logos/girmitiya logo 2.jpg";

export default function Intro() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState(null);
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });

  // Awwwards easing
  const easeTransition = [0.22, 1, 0.36, 1];

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardRotate({ x: y * -6, y: x * 6 });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  const trustCards = [
    {
      icon: ShieldCheck,
      text: "The Foundation is registered under the",
      bold1: "Indian Trust Act 1882",
      text2: "and was established in",
      bold2: "2019.",
    },
    {
      icon: Users,
      text: "The Foundation also supports Girmitiya families in their search for ancestral roots, birth places, ancestral lands and the villages of origin in India.",
      bold1: null,
      text2: null,
      bold2: null,
    },
    {
      icon: Landmark,
      text: "We believe that our roots represent our Identity, Culture, Pride and serve as a foundation for Education and Heritage.",
      bold1: null,
      text2: null,
      bold2: null,
    },
  ];

  const stats = [
    {
      icon: ShieldCheck,
      title: "REGISTERED TRUST",
      desc: "Indian Trust Act 1882",
    },
    {
      icon: Calendar,
      title: "ESTABLISHED IN",
      desc: "2019",
    },
    {
      icon: Users,
      title: "COMMUNITIES IMPACTED",
      desc: "Across India",
    },
    {
      icon: Award,
      title: "COMMITMENT TO EXCELLENCE",
      desc: "Education • Culture Empowerment",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF7F2] pt-14 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8"
    >
      {/* Background Subtle Luxury Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#C59B27]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#C59B27]/5 blur-3xl" />
      </div>

      <div className="content-container relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Heading, Description & 3 Trust Cards */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: easeTransition }}
          className="lg:col-span-6 xl:col-span-6"
        >
          {/* Eyebrow with Classical Ornate Gold Flourish */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B9873A] uppercase">
              WELCOME TO
            </span>
            {/* Elegant Filigree Ornament */}
            <svg
              width="54"
              height="12"
              viewBox="0 0 54 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#C59B27]"
            >
              <path
                d="M 0 6 L 18 6 M 36 6 L 54 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M 21 6 C 21 3.5 24 2 27 2 C 30 2 33 3.5 33 6 C 33 8.5 30 10 27 10 C 24 10 21 8.5 21 6 Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="27" cy="6" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Main Serif Heading */}
          <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-[2.9rem] font-bold tracking-tight text-[#18181B] leading-[1.15]">
            Girmitiya Foundation
          </h2>

          {/* Under-heading Ornate Gold Filigree Divider */}
          <div className="mt-2.5 flex items-center gap-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C59B27]/70" />
            <svg
              width="24"
              height="10"
              viewBox="0 0 24 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#C59B27]"
            >
              <path
                d="M 2 5 Q 6 1 12 5 Q 18 9 22 5"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="12" cy="5" r="1.5" fill="currentColor" />
            </svg>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C59B27]/70" />
          </div>

          {/* Intro Description */}
          <p className="mt-4 max-w-xl text-sm sm:text-[14.5px] leading-relaxed text-[#4B5563]">
            Girmitiya Foundation is a socio-cultural and educational skill development
            trust focused on improving lives through{" "}
            <strong className="font-bold text-[#18181B]">
              Education, Women Empowerment,
            </strong>{" "}
            <strong className="font-bold text-[#18181B]">Skill training</strong> and{" "}
            <strong className="font-bold text-[#18181B]">Cultural</strong>{" "}
            enrichment, particularly among marginalized and underprivileged
            communities.
          </p>

          {/* 3 Trust Cards matching reference design */}
          <div className="mt-6 flex flex-col gap-3.5 sm:gap-4">
            {trustCards.map((card, idx) => {
              const Icon = card.icon;
              const isHovered = activeCard === idx;

              return (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className={`group relative flex items-center gap-4 rounded-2xl bg-[#FCFAF6] p-3.5 sm:p-4 border transition-all duration-300 ${
                    isHovered
                      ? "border-[#C59B27] shadow-[0_10px_30px_rgba(197,155,39,0.14)] bg-white"
                      : "border-[#EADFCB]/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-[#C59B27]/60"
                  }`}
                >
                  {/* Left Circular Golden Icon Badge */}
                  <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E2B961] via-[#C59B27] to-[#8C6B1A] p-[2px] shadow-md shadow-[#C59B27]/25">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#DCAE53] to-[#A87E1B] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 text-white drop-shadow-xs" />
                    </div>
                  </div>

                  {/* Vertical Golden Pin / Divider Dot */}
                  <div className="flex flex-col items-center justify-center h-8 shrink-0">
                    <span className="h-2.5 w-px bg-[#C59B27]/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                    <span className="h-2.5 w-px bg-[#C59B27]/40" />
                  </div>

                  {/* Text Content */}
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#374151]">
                    {card.bold1 ? (
                      <>
                        {card.text}{" "}
                        <strong className="font-bold text-[#18181B]">
                          {card.bold1}
                        </strong>{" "}
                        {card.text2}{" "}
                        <strong className="font-bold text-[#18181B]">
                          {card.bold2}
                        </strong>
                      </>
                    ) : (
                      card.text
                    )}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Official Luxury Heritage Certificate Plaque */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeTransition }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center"
        >
          {/* Certificate Card Plaque with Vintage Scalloped Notched Corners */}
          <div className="relative w-full max-w-[500px] rounded-3xl bg-[#FDFBF7] p-5 sm:p-7 shadow-[0_20px_50px_rgba(20,27,45,0.08)] border-2 border-[#E7DECD] overflow-hidden">
            {/* Inner Double Gold Border with Scalloped Corners */}
            <div className="pointer-events-none absolute inset-2.5 sm:inset-3 rounded-2xl border border-[#C59B27]/50" />
            <div className="pointer-events-none absolute inset-3.5 sm:inset-4 rounded-xl border border-[#C59B27]/25" />

            {/* Corner Decorative Brass Rivets */}
            <div className="pointer-events-none absolute top-4 left-4 h-2 w-2 rounded-full border border-[#C59B27] bg-[#E5D8B8]" />
            <div className="pointer-events-none absolute top-4 right-4 h-2 w-2 rounded-full border border-[#C59B27] bg-[#E5D8B8]" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-2 w-2 rounded-full border border-[#C59B27] bg-[#E5D8B8]" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-2 w-2 rounded-full border border-[#C59B27] bg-[#E5D8B8]" />

            {/* Watermark Laurel Wreaths in Background */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 opacity-[0.07]">
              {/* Left Laurel Branch */}
              <svg width="80" height="240" viewBox="0 0 80 240" fill="none" className="text-[#C59B27]">
                <path
                  d="M 60 20 C 30 70 20 150 55 220"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                {[30, 60, 90, 120, 150, 180, 210].map((y, i) => (
                  <ellipse
                    key={i}
                    cx={45 + (i % 2 === 0 ? 8 : -8)}
                    cy={y}
                    rx="10"
                    ry="5"
                    fill="currentColor"
                    transform={`rotate(${i % 2 === 0 ? 25 : -25} ${45 + (i % 2 === 0 ? 8 : -8)} ${y})`}
                  />
                ))}
              </svg>

              {/* Right Laurel Branch */}
              <svg width="80" height="240" viewBox="0 0 80 240" fill="none" className="text-[#C59B27]">
                <path
                  d="M 20 20 C 50 70 60 150 25 220"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
                {[30, 60, 90, 120, 150, 180, 210].map((y, i) => (
                  <ellipse
                    key={i}
                    cx={35 + (i % 2 === 0 ? -8 : 8)}
                    cy={y}
                    rx="10"
                    ry="5"
                    fill="currentColor"
                    transform={`rotate(${i % 2 === 0 ? -25 : 25} ${35 + (i % 2 === 0 ? -8 : 8)} ${y})`}
                  />
                ))}
              </svg>
            </div>

            {/* Plaque Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Centerpiece: Official Girmitiya Foundation Logo 2 */}
              <div className="relative flex items-center justify-center pt-1 pb-1">
                <motion.img
                  src={girmitiyaLogo2}
                  alt="Girmitiya Foundation Official Seal"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 object-contain select-none mix-blend-multiply"
                />
              </div>

              {/* Brand Typography */}
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-[#18181B] uppercase">
                GIRMITIYA
              </h3>
              <p className="mt-0.5 font-serif text-xs sm:text-sm font-bold tracking-[0.28em] text-[#18181B] uppercase">
                — FOUNDATION —
              </p>

              {/* Gold Filigree Divider */}
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <span className="h-px w-6 bg-[#C59B27]/60" />
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#C59B27]"
                >
                  <path
                    d="M 0 4 Q 4 1 8 4 Q 12 7 16 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
                <span className="h-px w-6 bg-[#C59B27]/60" />
              </div>

              {/* Est. 2019 Tag */}
              <p className="mt-1 font-sans text-[10.5px] sm:text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase">
                EST. 2019
              </p>

              {/* 4 Trust Metrics / Badges in 4 Columns */}
              <div className="mt-5 grid w-full grid-cols-4 gap-1.5 sm:gap-2 border-t border-b border-[#E7DECD] py-3 text-center">
                {stats.map((stat) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={stat.title}
                      whileHover={{ y: -2 }}
                      className="group flex flex-col items-center px-1"
                    >
                      {/* Icon with Gold Color */}
                      <div className="mb-1 flex h-6 w-6 items-center justify-center text-[#C59B27] transition-transform duration-300 group-hover:scale-115">
                        <StatIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
                      </div>

                      {/* Metric Title */}
                      <span className="font-sans text-[8.5px] sm:text-[9.5px] font-bold tracking-tight text-[#18181B] uppercase leading-tight line-clamp-2">
                        {stat.title}
                      </span>

                      {/* Metric Subtitle */}
                      <span className="mt-0.5 text-[7.5px] sm:text-[8.5px] text-[#6B7280] leading-tight">
                        {stat.desc}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Luxury Navy/Gold Ribbon */}
              <div className="mt-4 relative w-full flex items-center justify-center">
                <div className="relative flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#080E1A] via-[#101827] to-[#080E1A] px-4 sm:px-6 py-2 shadow-md border border-[#C59B27]/40 w-full max-w-[420px]">
                  {/* Left Gold Star */}
                  <span className="text-[#C59B27] text-xs">★</span>

                  {/* Ribbon Text */}
                  <span className="font-serif text-[10px] sm:text-[11.5px] font-bold tracking-[0.14em] text-[#FAF7F2] uppercase text-center">
                    ROOTED IN HERITAGE • GROWING THE FUTURE
                  </span>

                  {/* Right Gold Star */}
                  <span className="text-[#C59B27] text-xs">★</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
