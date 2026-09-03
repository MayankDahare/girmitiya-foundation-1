import { motion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import worldMap from "../../assets/images/world-map.svg";
import { globalMarkers } from "../../data/homepage";

export default function GlobalFamily() {
  return (
    <section id="chapter" className="bg-cream-100 py-20 md:py-28">
      <div className="content-container grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">GIRMITIYA FOUNDATION</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            Connecting
            <br />A Global Family
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-700">
            Bridging Continents, Reconnecting Generations, Upholding Heritage
          </p>
          <a href="#chapter" className="btn-gold mt-7 bg-navy-900 text-cream-100 hover:bg-navy-800">
            Our Global Presence <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <img src={worldMap} alt="World map showing the Girmitiya diaspora's connected countries" className="w-full" />
          <Plane className="absolute left-[6%] top-[70%] h-7 w-7 -rotate-45 text-gold-500" strokeWidth={1.5} />
          {globalMarkers.map((marker) => (
            <span
              key={marker.name}
              style={{ top: marker.top, left: marker.left }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              title={marker.name}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-navy-900 text-base shadow-md">
                {marker.flag}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
