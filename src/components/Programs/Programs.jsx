import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// Precise custom SVG icons matching reference design
function IconSocialWelfare() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="10" r="3.2" fill="white" />
      <circle cx="10" cy="12" r="2.6" fill="white" />
      <circle cx="22" cy="12" r="2.6" fill="white" />
      <path d="M 11.5 24 C 11.5 17.5 20.5 17.5 20.5 24 Z" fill="white" />
      <path d="M 6.5 24 C 6.5 19 12.5 19 13.5 24 Z" fill="white" opacity="0.9" />
      <path d="M 25.5 24 C 25.5 19 19.5 19 18.5 24 Z" fill="white" opacity="0.9" />
      <path
        d="M 16 17 C 14.5 15 12 16.5 13.5 18.5 L 16 21 L 18.5 18.5 C 20 16.5 17.5 15 16 17 Z"
        fill="#C59B27"
      />
    </svg>
  );
}

function IconEducation() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="9" r="3.2" fill="white" />
      <path
        d="M 6 16.5 C 11 15 15 17 16 18.5 C 17 17 21 15 26 16.5 L 26 24.5 C 21 23 17 25 16 26.5 C 15 25 11 23 6 24.5 Z"
        fill="white"
      />
      <path d="M 16 18.5 L 16 26.5" stroke="#C59B27" strokeWidth="1.2" />
    </svg>
  );
}

function IconWomen() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="8.5" r="3.2" fill="white" />
      <path d="M 16 13.5 L 12.5 24.5 L 19.5 24.5 Z" fill="white" />
      <path d="M 11 16.5 C 14 15 18 15 21 16.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconChildrenHealth() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="2.8" fill="white" />
      <path d="M 7 24 C 7 17 13 17 13 24 Z" fill="white" />
      <circle cx="16" cy="13" r="2.2" fill="white" />
      <path d="M 13.5 24 C 13.5 19 18.5 19 18.5 24 Z" fill="white" />
      <circle cx="22" cy="10" r="2.8" fill="white" />
      <path d="M 19 24 C 19 17 25 17 25 24 Z" fill="white" />
      <path d="M 9 17 L 16 19 L 23 17" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

function IconCulture() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 9 10 L 23 7 L 24 10 L 10 13 Z" fill="white" />
      <path d="M 8 14 L 24 12 L 25 15 L 9 17 Z" fill="white" opacity="0.9" />
      <path d="M 7 19 L 25 18 L 26 22 L 8 23 Z" fill="white" />
      <path d="M 8 23 L 26 22 L 25 25 L 7 26 Z" fill="white" opacity="0.85" />
    </svg>
  );
}

function IconAncestral() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="10" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="16" cy="16" r="4.5" fill="white" />
      <circle cx="16" cy="12" r="2" fill="white" />
      <circle cx="16" cy="6" r="1.8" fill="white" />
      <circle cx="16" cy="26" r="1.8" fill="white" />
      <circle cx="6" cy="16" r="1.8" fill="white" />
      <circle cx="26" cy="16" r="1.8" fill="white" />
    </svg>
  );
}

const programs = [
  {
    id: "01",
    IconComponent: IconSocialWelfare,
    title: "Social Welfare",
    description: "Creating opportunities for underprivileged communities to thrive.",
  },
  {
    id: "02",
    IconComponent: IconEducation,
    title: "Education and Skill",
    description: "Empowering youth with learning, training, and employment pathways.",
  },
  {
    id: "03",
    IconComponent: IconWomen,
    title: "Women Empowerment",
    description: "Helping women gain confidence, independence, and leadership skills.",
  },
  {
    id: "04",
    IconComponent: IconChildrenHealth,
    title: "Children and Health Development",
    description: "Promoting health, nutrition, and holistic care for children and families.",
  },
  {
    id: "05",
    IconComponent: IconCulture,
    title: "Culture and Literature",
    description: "Preserving traditions, literature, and art, ensuring India's heritage is celebrated.",
  },
  {
    id: "06",
    IconComponent: IconAncestral,
    title: "Ancestral Connection",
    description: "Assisting Girmitiya families to rediscover and connect with their roots in India.",
  },
];

// Bottom Button Laurel Left
function ButtonLaurelLeft() {
  return (
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" className="text-[#C59B27]">
      <path d="M 26 24 C 20 18 12 11 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="20" cy="18" rx="3.5" ry="1.8" transform="rotate(-30 20 18)" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="3.5" ry="1.8" transform="rotate(-40 12 12)" fill="currentColor" />
      <ellipse cx="5" cy="6" rx="3" ry="1.5" transform="rotate(-45 5 6)" fill="currentColor" />
    </svg>
  );
}

// Bottom Button Laurel Right
function ButtonLaurelRight() {
  return (
    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" className="text-[#C59B27]">
      <path d="M 4 24 C 10 18 18 11 27 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="10" cy="18" rx="3.5" ry="1.8" transform="rotate(30 10 18)" fill="currentColor" />
      <ellipse cx="18" cy="12" rx="3.5" ry="1.8" transform="rotate(40 18 12)" fill="currentColor" />
      <ellipse cx="25" cy="6" rx="3" ry="1.5" transform="rotate(45 25 6)" fill="currentColor" />
    </svg>
  );
}

function ProgramCardItem({ id, IconComponent, title, description, index }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center pt-9 pb-7 px-5 sm:px-6 rounded-2xl bg-[#FCFAF6] border-2 border-[#E7DECD] shadow-[0_12px_32px_rgba(20,27,45,0.05)] transition-all duration-300 hover:border-[#C59B27] hover:shadow-[0_18px_45px_rgba(197,155,39,0.18)]"
    >
      {/* SVG Concave Notched Certificate Border Frame Overlay */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 360 300"
      >
        <rect
          x="8"
          y="8"
          width="344"
          height="284"
          rx="12"
          fill="none"
          stroke="#C59B27"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <circle cx="16" cy="16" r="2" fill="#C59B27" fillOpacity="0.6" />
        <circle cx="344" cy="16" r="2" fill="#C59B27" fillOpacity="0.6" />
        <circle cx="16" cy="284" r="2" fill="#C59B27" fillOpacity="0.6" />
        <circle cx="344" cy="284" r="2" fill="#C59B27" fillOpacity="0.6" />
      </svg>

      {/* Top Overlapping Animated Golden Orbit & Badge */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center z-10 select-none">
        {/* Animated Golden Orbit Rings SVG */}
        <motion.svg
          viewBox="0 0 96 96"
          className="absolute -inset-4 h-22 w-22 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            duration: isHovered ? 8 : (shouldReduceMotion ? 0 : 22),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Outer Dashed Orbit Ring */}
          <circle
            cx="48"
            cy="48"
            r="44"
            fill="none"
            stroke="#C59B27"
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity={isHovered ? "0.9" : "0.45"}
          />
          {/* Revolving Orbit Satellite Dot */}
          <circle cx="48" cy="4" r="2.5" fill="#E5B869" />
          <circle cx="48" cy="92" r="1.8" fill="#C59B27" />
        </motion.svg>

        {/* Circular Gold Gradient Orb */}
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-gradient-to-br from-[#E8C16E] via-[#C59B27] to-[#8C6B1A] p-[2.5px] shadow-lg shadow-[#C59B27]/35"
        >
          {/* Ambient Glow Aura on Hover */}
          <div
            className={`absolute -inset-1 rounded-full bg-[#C59B27]/40 blur-md transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#DCB054] to-[#A87E1B]">
            <IconComponent />
          </div>

          {/* Micro Sparkle Accent on Hover */}
          {isHovered && (
            <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-[#FFF3CC] animate-pulse" />
          )}
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center text-center mt-2.5 w-full">
        {/* Initiative Number 01 - 06 */}
        <span className="font-display text-base sm:text-lg font-bold text-[#B9873A] tracking-wider">
          {id}
        </span>

        {/* Initiative Title */}
        <h3 className="mt-1 font-display text-xl sm:text-[22px] font-bold text-[#18181B] leading-snug min-h-[56px] flex items-center justify-center px-1">
          {title}
        </h3>

        {/* Golden Star Separator */}
        <div className="my-1.5 flex items-center justify-center">
          <span className="text-[#C59B27] text-xs">★</span>
        </div>

        {/* Initiative Description */}
        <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-[#4B5563] max-w-[270px] flex-1">
          {description}
        </p>

        {/* Bottom READ MORE Button with Laurel Accents */}
        <div className="mt-5 flex items-center justify-center gap-1.5 w-full">
          <div className="transition-transform duration-300 group-hover:-translate-x-1">
            <ButtonLaurelLeft />
          </div>

          <a
            href="#programs"
            className="group/btn relative inline-flex items-center gap-1.5 rounded-md bg-[#B8860B] hover:bg-[#A67809] px-5 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-sm shadow-[#B8860B]/30 transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <span>READ MORE</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>

          <div className="transition-transform duration-300 group-hover:translate-x-1">
            <ButtonLaurelRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="programs" className="relative overflow-hidden bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
      {/* Background Subtle Golden Aura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-[#C59B27]/5 blur-3xl" />
      </div>

      <div className="content-container relative z-10">
        {/* Section Header with Clean Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Main Serif Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B]">
            What We Do
          </h2>

          {/* Under-heading Star */}
          <div className="mt-2.5 flex items-center justify-center">
            <span className="text-[#C59B27] text-xs">★</span>
          </div>

          {/* Subtitle / Statement */}
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4B5563]">
            At Girmitiya Foundation, we believe{" "}
            <strong className="font-bold text-[#B9873A]">
              every individual and community has potential waiting to be unlocked.
            </strong>
          </p>
          <p className="mt-1 text-xs sm:text-sm font-medium text-[#4B5563]">
            Our initiatives focus on:
          </p>
        </motion.div>

        {/* 6 Initiative Cards Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 gap-y-12 sm:gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCardItem key={program.id} index={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
