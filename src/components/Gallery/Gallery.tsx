import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ScanEye } from "lucide-react";

import g1 from "../../assets/documents/greeting-01.svg";
import g2 from "../../assets/documents/greeting-02.svg";
import g3 from "../../assets/documents/greeting-03.svg";
import g4 from "../../assets/documents/greeting-04.svg";
import g5 from "../../assets/documents/greeting-05.svg";
import g6 from "../../assets/documents/greeting-06.svg";

const greetings = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section id="media" className="bg-cream-200 py-16 md:py-20">
      <div className="content-container">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-2xl font-bold text-navy-900 sm:text-3xl"
        >
          Greetings Message
        </motion.h2>

        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll gallery left"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500 text-gold-600 transition-colors hover:bg-gold-500 hover:text-navy-950 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex flex-1 gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {greetings.map((src, i) => (
              <a
                href="#media"
                key={i}
                className="group relative aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-md border border-navy-900/10 bg-white shadow-sm sm:w-36"
              >
                <img src={src} alt={`Greeting message ${i + 1}`} className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-navy-950/0 text-cream-100 opacity-0 transition-all duration-200 group-hover:bg-navy-950/50 group-hover:opacity-100">
                  <ScanEye className="h-6 w-6" />
                </span>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll gallery right"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500 text-gold-600 transition-colors hover:bg-gold-500 hover:text-navy-950 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#media"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-5 py-2 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:border-gold-500"
          >
            View All Messages <ScanEye className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
