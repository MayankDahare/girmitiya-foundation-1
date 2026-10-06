import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import socialWelfareImg from "../../assets/images/social walfare.png";
import educationImg from "../../assets/images/education and skill.png";
import womenImg from "../../assets/images/woman empowerment.png";
import healthImg from "../../assets/images/childrean and healt development.png";
import cultureImg from "../../assets/images/culture and litrature.png";
import ancestralImg from "../../assets/images/ancestral connection.png";

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
    image: socialWelfareImg,
  },
  {
    id: "02",
    IconComponent: IconEducation,
    title: "Education and Skill",
    description: "Empowering youth with learning, training, and employment pathways.",
    image: educationImg,
  },
  {
    id: "03",
    IconComponent: IconWomen,
    title: "Women Empowerment",
    description: "Helping women gain confidence, independence, and leadership skills.",
    image: womenImg,
  },
  {
    id: "04",
    IconComponent: IconChildrenHealth,
    title: "Children and Health Development",
    description: "Promoting health, nutrition, and holistic care for children and families.",
    image: healthImg,
  },
  {
    id: "05",
    IconComponent: IconCulture,
    title: "Culture and Literature",
    description: "Preserving traditions, literature, and art, ensuring India's heritage is celebrated.",
    image: cultureImg,
  },
  {
    id: "06",
    IconComponent: IconAncestral,
    title: "Ancestral Connection",
    description: "Assisting Girmitiya families to rediscover and connect with their roots in India.",
    image: ancestralImg,
  },
];

// Modern Art-Deco Kinetic Gold Flourish for "What We Do" Heading (Left)
function HeadingFlourishLeft({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{
        x: isHovered ? -6 : (shouldReduceMotion ? 0 : [0, -3, 0]),
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{
        x: isHovered ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.3 },
      }}
      className="relative flex items-center justify-center select-none"
    >
      <svg width="64" height="28" viewBox="0 0 64 28" fill="none" className="text-[#C59B27] drop-shadow-xs">
        <path d="M 0 14 L 46 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 12 8 L 44 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M 12 20 L 44 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
        <polygon points="46,14 53,7 60,14 53,21" fill="currentColor" />
        <circle cx="53" cy="14" r="2" fill="#FFF2C6" />
      </svg>
      <motion.div
        animate={{
          scale: [0.7, 1.3, 0.7],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1 right-2 h-1.5 w-1.5 rounded-full bg-[#FFE8A3] blur-[0.5px]"
      />
    </motion.div>
  );
}

// Modern Art-Deco Kinetic Gold Flourish for "What We Do" Heading (Right)
function HeadingFlourishRight({ isHovered = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{
        x: isHovered ? 6 : (shouldReduceMotion ? 0 : [0, 3, 0]),
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{
        x: isHovered ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.3 },
      }}
      className="relative flex items-center justify-center select-none"
    >
      <svg width="64" height="28" viewBox="0 0 64 28" fill="none" className="text-[#C59B27] drop-shadow-xs">
        <path d="M 18 14 L 64 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 20 8 L 52 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M 20 20 L 52 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
        <polygon points="4,14 11,7 18,14 11,21" fill="currentColor" />
        <circle cx="11" cy="14" r="2" fill="#FFF2C6" />
      </svg>
      <motion.div
        animate={{
          scale: [0.7, 1.3, 0.7],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1 left-2 h-1.5 w-1.5 rounded-full bg-[#FFE8A3] blur-[0.5px]"
      />
    </motion.div>
  );
}

// Kinetic Art Deco Gold Ornament for Button (Left)
function ButtonFlourishLeft({ isHovered = false }) {
  return (
    <motion.div
      animate={{
        x: isHovered ? -4 : 0,
        scale: isHovered ? 1.15 : 1,
      }}
      transition={{ duration: 0.25 }}
      className="relative flex items-center justify-center select-none"
    >
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none" className="text-[#C59B27] drop-shadow-xs">
        <path d="M 2 10 L 22 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M 10 5 L 20 10 L 10 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="24,10 28,6 32,10 28,14" fill="currentColor" />
        <circle cx="28" cy="10" r="1.2" fill="#FFF8E0" />
      </svg>
      {isHovered && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0.5, 1.4, 0.8], opacity: [0.5, 1, 0.8] }}
          className="absolute -top-1 left-1 h-1.5 w-1.5 rounded-full bg-[#FFE8A3]"
        />
      )}
    </motion.div>
  );
}

// Kinetic Art Deco Gold Ornament for Button (Right)
function ButtonFlourishRight({ isHovered = false }) {
  return (
    <motion.div
      animate={{
        x: isHovered ? 4 : 0,
        scale: isHovered ? 1.15 : 1,
      }}
      transition={{ duration: 0.25 }}
      className="relative flex items-center justify-center select-none"
    >
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none" className="text-[#C59B27] drop-shadow-xs">
        <polygon points="2,10 6,6 10,10 6,14" fill="currentColor" />
        <circle cx="6" cy="10" r="1.2" fill="#FFF8E0" />
        <path d="M 24 5 L 14 10 L 24 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 12 10 L 32 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {isHovered && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0.5, 1.4, 0.8], opacity: [0.5, 1, 0.8] }}
          className="absolute -top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#FFE8A3]"
        />
      )}
    </motion.div>
  );
}

function ProgramCardItem({ id, IconComponent, title, description, image, index }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center pt-9 pb-7 px-5 sm:px-6 rounded-2xl bg-[#0A101D] border-2 border-[#E7DECD] shadow-[0_12px_32px_rgba(20,27,45,0.05)] transition-[border-color,box-shadow] duration-300 hover:border-[#C59B27] hover:shadow-[0_18px_45px_rgba(197,155,39,0.18)] overflow-visible"
    >
      {/* Golden Border Rectangular Frame Area with Fitted Full Image */}
      <div className="absolute inset-2 rounded-xl overflow-hidden pointer-events-none z-0">
        {/* Background Initiative Image - Clearly Visible */}
        <motion.img
          src={image}
          alt={title}
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover object-center opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Dark scrim: top stays open so the photograph reads, bottom carries the copy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 via-50% to-black/15 transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Inner Hairline Golden Border */}
        <div className="absolute inset-0 rounded-xl border border-[#C59B27]/40 pointer-events-none" />

        {/* 4 Corner Brass Rivets */}
        <span className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-[#C59B27]/70" />
        <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-[#C59B27]/70" />
        <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-[#C59B27]/70" />
        <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[#C59B27]/70" />
      </div>

      {/* Top Overlapping Animated Golden Orbit & Badge */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center z-20 select-none">
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

      {/* Card Content (Layered over the background image) */}
      <div className="relative z-10 flex flex-1 flex-col items-center text-center mt-2.5 w-full">
        {/* Initiative Number 01 - 06 */}
        <span className="font-mono text-xs font-medium tracking-[0.2em] text-[#E5B869]">
          {id}
        </span>

        {/* Initiative Title */}
        <h3 className="t-h3 mt-2 text-[#FAF7F2] min-h-[56px] flex items-center justify-center px-1">
          {title}
        </h3>

        {/* Golden Star Separator */}
        <div className="my-1.5 flex items-center justify-center">
          <span className="text-[#C59B27] text-xs">★</span>
        </div>

        {/* Initiative Description */}
        <p className="t-small mt-1 text-white/78 max-w-[270px] flex-1">
          {description}
        </p>

        {/* Bottom READ MORE Button with Animated SVGs (Left & Right) */}
        <div
          className="mt-5 flex items-center justify-center gap-2 w-full"
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          {/* Animated Left SVG */}
          <ButtonFlourishLeft isHovered={btnHovered || isHovered} />

          {/* READ MORE Button */}
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group/btn relative inline-flex items-center gap-1.5 rounded-md bg-[#B8860B] hover:bg-[#A67809] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-sm shadow-[#B8860B]/30 transition-all duration-300 hover:shadow-md cursor-pointer"
          >
            <span>READ MORE</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.a>

          {/* Animated Right SVG */}
          <ButtonFlourishRight isHovered={btnHovered || isHovered} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();
  const [headerHovered, setHeaderHovered] = useState(false);

  return (
    <section id="programs" className="relative overflow-hidden bg-[#FAF7F2] pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8">
      {/* Background Subtle Golden Aura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[550px] w-[850px] rounded-full bg-[#C59B27]/5 blur-3xl" />
      </div>

      <div className="content-container relative z-10">
        {/* Section Header with Animated SVGs on Left & Right of "What We Do" */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
          onMouseEnter={() => setHeaderHovered(true)}
          onMouseLeave={() => setHeaderHovered(false)}
        >
          {/* Heading Flanked by Animated Golden Art-Deco Flourish SVGs */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4">
            {/* Animated Left Heading SVG */}
            <HeadingFlourishLeft isHovered={headerHovered} />

            {/* Main Serif Heading */}
            <h2 className="t-h2 text-[#18181B] cursor-default whitespace-nowrap">
              What We <span className="t-accent text-[#B9873A]">Do</span>
            </h2>

            {/* Animated Right Heading SVG */}
            <HeadingFlourishRight isHovered={headerHovered} />
          </div>

          {/* Under-heading Star */}
          <div className="mt-2.5 flex items-center justify-center">
            <span className="text-[#C59B27] text-xs">★</span>
          </div>

          {/* Subtitle / Statement */}
          <p className="t-lead mt-5 text-[#4B5563]">
            At Girmitiya Foundation, we believe{" "}
            <strong className="font-semibold text-[#B9873A]">
              every individual and community has potential waiting to be unlocked.
            </strong>
          </p>
          <p className="t-eyebrow mt-4 text-[#6B7280]">
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
