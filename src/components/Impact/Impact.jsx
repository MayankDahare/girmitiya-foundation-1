import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HandHeart, BookOpen, Landmark, Users } from "lucide-react";
import Counter from "./Counter";

const impactStats = [
  {
    icon: HandHeart,
    value: 6,
    suffix: "+",
    label: "Years of Dedicated Service",
    blobBg: "bg-[#EBF3ED]",
    iconColor: "text-[#2D5A3E]",
  },
  {
    icon: BookOpen,
    value: 150,
    suffix: "+",
    label: "Research / Reconnected",
    blobBg: "bg-[#F7EFE8]",
    iconColor: "text-[#2D5A3E]",
  },
  {
    icon: Landmark,
    value: 190,
    suffix: "+",
    label: "Years of Girmitiya legacy",
    blobBg: "bg-[#EBF3ED]",
    iconColor: "text-[#2D5A3E]",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "People Successfully Reunited",
    blobBg: "bg-[#F7EFE8]",
    iconColor: "text-[#2D5A3E]",
  },
];

// Botanical Centerpiece Flourish (3-Leaf Sprig with Horizontal Lines)
function BotanicalFlourish() {
  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C59B27]/60" />
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="text-[#2D5A3E]">
        <path d="M 12 16 C 12 10 12 4 12 1 C 10 6 10 11 12 16 Z" fill="currentColor" />
        <path d="M 12 16 C 10 12 6 8 1 8 C 5 11 8 14 12 16 Z" fill="currentColor" />
        <path d="M 12 16 C 14 12 18 8 23 8 C 19 11 16 14 12 16 Z" fill="currentColor" />
      </svg>
      <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C59B27]/60" />
    </div>
  );
}

// Awwwards Animated Historic Voyage Ship & Celestial Navigation Compass SVG (Far Left Background)
function AnimatedHeritageVoyageSVG() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 h-[340px] sm:h-[400px] w-[260px] sm:w-[320px] select-none opacity-[0.45] z-0">
      {/* Rotating Celestial Navigation Orbit & North Star */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: shouldReduceMotion ? 0 : 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-4 left-10 h-24 w-24 flex items-center justify-center"
      >
        <svg viewBox="0 0 96 96" className="h-full w-full text-[#C59B27]">
          <circle cx="48" cy="48" r="44" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
          <polygon points="48,20 51,45 76,48 51,51 48,76 45,51 20,48 45,45" fill="currentColor" fillOpacity="0.7" />
          <circle cx="48" cy="48" r="2.5" fill="#FFF2C6" />
        </svg>
      </motion.div>

      {/* Floating Seagulls Animation */}
      <motion.div
        animate={{
          x: shouldReduceMotion ? 0 : [0, 14, 0],
          y: shouldReduceMotion ? 0 : [0, -6, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-36 text-[#7E8B79] opacity-70"
      >
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path d="M 6 14 Q 14 6 22 14 Q 30 6 38 14 Q 30 10 22 18 Q 14 10 6 14 Z" fill="currentColor" />
          <path d="M 42 22 Q 48 16 54 22 Q 60 16 66 22 Q 60 19 54 25 Q 48 19 42 22 Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Animated Heritage Sailboat with Rolling Wave Motion */}
      <motion.div
        animate={{
          y: shouldReduceMotion ? 0 : [0, -8, 0],
          rotate: shouldReduceMotion ? 0 : [-1.5, 2, -1.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-4"
      >
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
          <defs>
            <linearGradient id="sailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5EFE0" />
              <stop offset="50%" stopColor="#E0CFAC" />
              <stop offset="100%" stopColor="#C59B27" />
            </linearGradient>
            <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D3748" />
              <stop offset="100%" stopColor="#1A202C" />
            </linearGradient>
          </defs>

          {/* Tall Central Mast */}
          <line x1="110" y1="20" x2="110" y2="135" stroke="#8C6B1A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="40" x2="65" y2="135" stroke="#8C6B1A" strokeWidth="2" strokeLinecap="round" />
          <line x1="155" y1="45" x2="155" y2="135" stroke="#8C6B1A" strokeWidth="2" strokeLinecap="round" />

          {/* Main Billowing Sails (Center) */}
          <path d="M 110 30 Q 145 55 110 75 Q 85 55 110 30 Z" fill="url(#sailGrad)" opacity="0.9" />
          <path d="M 110 80 Q 150 105 110 125 Q 80 105 110 80 Z" fill="url(#sailGrad)" opacity="0.95" />

          {/* Fore Sails (Left) */}
          <path d="M 65 48 Q 95 68 65 85 Q 45 68 65 48 Z" fill="url(#sailGrad)" opacity="0.85" />
          <path d="M 65 90 Q 98 110 65 125 Q 40 110 65 90 Z" fill="url(#sailGrad)" opacity="0.9" />

          {/* Mizzen Sails (Right) */}
          <path d="M 155 55 Q 180 72 155 88 Q 138 72 155 55 Z" fill="url(#sailGrad)" opacity="0.85" />
          <path d="M 155 92 Q 185 110 155 125 Q 135 110 155 92 Z" fill="url(#sailGrad)" opacity="0.9" />

          {/* Front Jib Triangular Sail */}
          <path d="M 65 48 L 15 130 L 65 125 Z" fill="url(#sailGrad)" opacity="0.8" />

          {/* Ship Hull */}
          <path
            d="M 15 130 L 30 150 Q 110 158 190 150 L 205 130 Q 110 136 15 130 Z"
            fill="url(#hullGrad)"
          />
          <path d="M 22 136 Q 110 142 198 136" stroke="#C59B27" strokeWidth="1.5" />

          {/* Rigging Lines */}
          <line x1="110" y1="20" x2="15" y2="130" stroke="#8C6B1A" strokeWidth="0.8" opacity="0.6" />
          <line x1="110" y1="20" x2="205" y2="130" stroke="#8C6B1A" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Layered Animated Ocean Waves */}
      <motion.div
        animate={{
          x: shouldReduceMotion ? 0 : [0, -18, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-0 w-[280px]"
      >
        <svg width="280" height="40" viewBox="0 0 280 40" fill="none" className="text-[#C59B27] opacity-60">
          <path
            d="M 0 20 Q 35 10 70 20 T 140 20 T 210 20 T 280 20"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M 0 28 Q 35 18 70 28 T 140 28 T 210 28 T 280 28"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Awwwards Animated Global Diaspora Roots & Tree of Heritage SVG (Far Right Background)
function AnimatedHeritageRootsRightSVG() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 h-[340px] sm:h-[400px] w-[260px] sm:w-[320px] select-none opacity-[0.45] z-0">
      {/* Counter-Rotating Celestial Global Orbit Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: shouldReduceMotion ? 0 : 38, repeat: Infinity, ease: "linear" }}
        className="absolute top-6 right-8 h-28 w-28 flex items-center justify-center"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full text-[#C59B27]">
          {/* Dashed Orbit Ring */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" strokeOpacity="0.45" />
          {/* Inner Globe Longitude Curve */}
          <ellipse cx="50" cy="50" rx="22" ry="46" fill="none" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.35" />
          <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.35" />
          {/* Orbit Nodes */}
          <circle cx="50" cy="4" r="2.2" fill="#E5B869" />
          <circle cx="96" cy="50" r="1.8" fill="#C59B27" />
          <circle cx="50" cy="96" r="2.2" fill="#E5B869" />
        </svg>
      </motion.div>

      {/* Floating Golden Leaves / Spores Animation */}
      <motion.div
        animate={{
          y: shouldReduceMotion ? 0 : [0, -15, 0],
          x: shouldReduceMotion ? 0 : [0, -6, 0],
          opacity: shouldReduceMotion ? 0.6 : [0.3, 0.85, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-36 text-[#C59B27]"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <ellipse cx="20" cy="20" rx="3.5" ry="2" transform="rotate(-30 20 20)" fill="currentColor" />
          <ellipse cx="40" cy="35" rx="3" ry="1.6" transform="rotate(40 40 35)" fill="currentColor" />
          <circle cx="30" cy="12" r="1.5" fill="#FFE8A3" />
        </svg>
      </motion.div>

      {/* Animated Heritage Tree of Roots Artwork */}
      <motion.div
        animate={{
          y: shouldReduceMotion ? 0 : [0, -6, 0],
          scale: shouldReduceMotion ? 1 : [1, 1.025, 1],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-4"
      >
        <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
          <defs>
            <linearGradient id="treeCanopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D78A" />
              <stop offset="50%" stopColor="#C59B27" />
              <stop offset="100%" stopColor="#8C6B1A" />
            </linearGradient>
            <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A5568" />
              <stop offset="100%" stopColor="#1A202C" />
            </linearGradient>
          </defs>

          {/* Golden Leaves / Tree Canopy Nodes */}
          <g fill="url(#treeCanopyGrad)">
            {/* Top Apex Leaves */}
            <circle cx="110" cy="35" r="4.5" />
            <circle cx="95" cy="42" r="5" />
            <circle cx="125" cy="42" r="5" />

            {/* Middle Canopy */}
            <circle cx="80" cy="55" r="5.5" />
            <circle cx="110" cy="52" r="6" />
            <circle cx="140" cy="55" r="5.5" />

            <circle cx="68" cy="72" r="5" />
            <circle cx="92" cy="70" r="5.5" />
            <circle cx="128" cy="70" r="5.5" />
            <circle cx="152" cy="72" r="5" />

            {/* Outer Leaf Sprays */}
            <ellipse cx="55" cy="85" rx="5" ry="3" transform="rotate(-25 55 85)" />
            <ellipse cx="165" cy="85" rx="5" ry="3" transform="rotate(25 165 85)" />
            <ellipse cx="75" cy="98" rx="4.5" ry="2.6" transform="rotate(-35 75 98)" />
            <ellipse cx="145" cy="98" rx="4.5" ry="2.6" transform="rotate(35 145 98)" />
          </g>

          {/* Central Trunk & Branches */}
          <path
            d="M 108 68 C 108 90 98 115 88 135 L 132 135 C 122 115 112 90 112 68 Z"
            fill="url(#trunkGrad)"
          />
          {/* Left Branch */}
          <path d="M 108 78 C 96 72 80 74 72 82 L 76 86 C 82 80 96 80 106 88 Z" fill="url(#trunkGrad)" />
          {/* Right Branch */}
          <path d="M 112 78 C 124 72 140 74 148 82 L 144 86 C 138 80 124 80 114 88 Z" fill="url(#trunkGrad)" />

          {/* Spreading Ancestral Roots */}
          <path
            d="M 88 135 C 72 150 48 165 25 175 L 28 178 C 52 168 76 153 92 138 Z"
            fill="#8C6B1A"
            opacity="0.85"
          />
          <path
            d="M 132 135 C 148 150 172 165 195 175 L 192 178 C 168 168 144 153 128 138 Z"
            fill="#8C6B1A"
            opacity="0.85"
          />
          <path
            d="M 110 135 C 110 155 110 175 110 188 L 112 188 C 112 175 112 155 112 135 Z"
            stroke="#8C6B1A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 100 135 C 92 152 78 168 62 180 L 64 182 C 80 170 94 154 102 136 Z"
            fill="#8C6B1A"
            opacity="0.75"
          />
          <path
            d="M 120 135 C 128 152 142 168 158 180 L 156 182 C 140 170 126 154 118 136 Z"
            fill="#8C6B1A"
            opacity="0.75"
          />

          {/* Pulsing Glowing Diamond Nodes at Roots */}
          <circle cx="26" cy="176" r="2.5" fill="#FFE8A3" />
          <circle cx="63" cy="181" r="2.2" fill="#E5B869" />
          <circle cx="111" cy="188" r="3" fill="#FFE8A3" />
          <circle cx="157" cy="181" r="2.2" fill="#E5B869" />
          <circle cx="194" cy="176" r="2.5" fill="#FFE8A3" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function Impact() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Awwwards easing
  const easeTransition = [0.22, 1, 0.36, 1];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24">
      {/* Animated Historic Voyage Ship & Celestial Navigation SVG on the Far Left */}
      <AnimatedHeritageVoyageSVG />

      {/* Animated Global Diaspora Roots & Tree of Heritage SVG on the Far Right */}
      <AnimatedHeritageRootsRightSVG />

      {/* Subtle Central Golden Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-[#C59B27]/5 blur-3xl" />
      </div>

      <div className="content-container relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeTransition }}
          className="mx-auto max-w-3xl"
        >
          {/* Eyebrow with Flanking Horizontal Lines */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-[#B9873A]/60" />
            <p className="t-eyebrow text-[#B9873A]">
              GIRMITIYA FOUNDATION
            </p>
            <span className="h-px w-8 sm:w-12 bg-[#B9873A]/60" />
          </div>

          {/* Main Headline */}
          <h2 className="t-h2 mt-5 text-[#18181B]">
            A Lifelong Journey of{" "}
            <span className="t-accent block text-[#B5732A]">
              Reconnection and Belonging
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="t-lead mt-5 max-w-2xl mx-auto text-[#4B5563]">
            The <strong className="font-semibold text-[#18181B]">Girmitiya Foundation</strong> is dedicated
            to transforming dreams of reconnecting with ancestral heritage into a reality.
            Our mission is to bridge the gap of generations, linking the Indian diaspora
            with their roots. We believe that a strong sense of identity, culture, and pride
            comes from understanding where we came from.
          </p>

          {/* Botanical 3-Leaf Flourish */}
          <BotanicalFlourish />
        </motion.div>

        {/* 4 Impact Metric Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 max-w-5xl mx-auto">
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            const isHovered = hoveredCard === i;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeTransition }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative flex flex-col items-center justify-between rounded-2xl bg-white px-3 py-5 sm:p-7 border transition-[border-color,box-shadow] duration-300 ${
                  isHovered
                    ? "border-[#C59B27] shadow-[0_16px_40px_rgba(197,155,39,0.18)]"
                    : "border-[#EADFCB]/60 shadow-[0_10px_30px_rgba(20,27,45,0.04)] hover:border-[#C59B27]/50"
                }`}
              >
                {/* Top Badge: Organic Watercolor-Style Soft Shape */}
                <div className="relative flex items-center justify-center mb-4">
                  <motion.div
                    animate={{
                      scale: isHovered ? [1, 1.12, 1] : 1,
                      rotate: isHovered ? [0, 6, -6, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`h-11 w-11 sm:h-15 sm:w-15 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] ${stat.blobBg} flex items-center justify-center shadow-xs`}
                  >
                    <Icon className={`h-6 w-6 sm:h-6.5 sm:w-6.5 ${stat.iconColor}`} strokeWidth={1.75} />
                  </motion.div>
                </div>

                {/* Metric Number with Live Counter Animation */}
                <div className="t-stat mt-2 text-[2rem] sm:text-5xl text-[#18181B]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Metric Label */}
                <p className="mt-2 text-[13px] leading-snug sm:text-sm font-medium text-[#4B5563] max-w-[180px]">
                  {stat.label}
                </p>

                {/* Bottom Short Golden Accent Bar */}
                <div className="mt-3.5 h-[2px] w-8 rounded-full bg-[#C59B27] transition-all duration-300 group-hover:w-12 group-hover:bg-[#B58B20]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
