import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProgramCard({ icon: Icon, title, description, image, index }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href="#programs"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative block h-72 overflow-hidden rounded-md shadow-md shadow-black/10"
    >
      <img
        src={image}
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/55 to-navy-950/20" />

      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/90 text-navy-950">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>

        <div>
          <h3 className="font-display text-xl font-semibold text-cream-100">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-cream-100/75">{description}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 transition-transform group-hover:translate-x-1">
            Read More <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
