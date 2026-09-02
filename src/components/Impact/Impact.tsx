import { motion } from "framer-motion";
import { Users, UsersRound, Landmark, Heart } from "lucide-react";
import Counter from "./Counter";
import { impactStats } from "../../data/homepage";

const icons = [Users, UsersRound, Landmark, Heart];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 md:py-20">
      <div className="content-container relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          GIRMITIYA FOUNDATION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 font-display text-3xl font-bold text-cream-100 sm:text-4xl"
        >
          A Lifelong Journey of <span className="text-gold-400">Reconnection</span> and{" "}
          <span className="text-gold-400">Belonging</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream-100/70"
        >
          The Girmitiya Foundation is dedicated to transforming dreams of reconnecting
          with ancestral heritage into a reality. Our mission is to bridge the gap of
          generations, linking the Indian diaspora with their roots. We believe that a
          strong sense of identity, culture, and pride comes from understanding where
          we come from.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-cream-100/10 pt-10 md:grid-cols-4">
          {impactStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                <Icon className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
                <span className="font-display text-3xl font-bold text-cream-100 sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-cream-100/60 sm:text-sm">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
