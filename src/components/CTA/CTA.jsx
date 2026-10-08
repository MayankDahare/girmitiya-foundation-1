import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import ctaPhoto from "../../assets/moments/children-books.webp";

export default function CTA() {
  return (
    <section id="donate" className="relative overflow-hidden bg-navy-950 py-14 md:py-16">
      <div className="content-container grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src={ctaPhoto}
          alt="Children holding books at a Girmitiya Foundation education drive"
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-gold-500/60 ring-offset-4 ring-offset-navy-950 md:h-24 md:w-24"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="t-h2 text-cream-100">
            Be a part of this <span className="t-accent text-gold-400">journey</span>
          </h2>
          <p className="t-body mt-3 max-w-md text-cream-100/70">
            Together, we can preserve heritage, transform lives and reconnect
            generations. Your support makes it possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <a href="/donate" className="btn-gold justify-center">
            Support Our Work <Heart className="h-4 w-4" />
          </a>
          <a href="/girmitiya-chapter" className="btn-outline justify-center">
            Reconnect to Your Roots <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
