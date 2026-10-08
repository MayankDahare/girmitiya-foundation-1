import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

/* ---- Small pieces ---------------------------------------------------- */

export function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="rule-gold" />
      <span className={`t-eyebrow ${light ? "text-[#E5B869]" : "text-[#B9873A]"}`}>{children}</span>
    </div>
  );
}

export function FadeUp({ children, className = "", delay = 0, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/* Heading whose lines rise out of a mask when scrolled into view. */
export function MaskLines({ lines, accent, className = "", light = false }) {
  const reduceMotion = useReducedMotion();
  const all = accent ? [...lines, accent] : lines;
  return (
    // The heading watches the viewport, not each line: a line starts fully
    // clipped by its mask, so it would never register as visible itself.
    <motion.h2 className={className} initial="hidden" whileInView="shown" viewport={{ once: true, margin: "-60px" }}>
      {all.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${accent && i === all.length - 1 ? `t-accent ${light ? "text-[#E5B869]" : "text-[#B9873A]"}` : ""}`}
            variants={{ hidden: { y: reduceMotion ? 0 : "105%" }, shown: { y: 0 } }}
            transition={{ duration: 0.9, delay: i * 0.08, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

/* ---- Images ---------------------------------------------------------- */

/* Photograph with a slow parallax drift while it crosses the viewport.
   It is never hidden or delayed: the image shows as soon as it scrolls in. */
export function RevealImage({ src, alt = "", caption, className = "", imgClassName = "", parallax = 8 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <figure ref={ref} className={`relative overflow-hidden bg-[#E7DECD] ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover ${imgClassName}`}
        style={reduceMotion ? undefined : { y }}
      />
      {caption && (
        <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 font-mono text-[10.5px] tracking-[0.08em] text-white/90 backdrop-blur-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ---- Page hero ------------------------------------------------------- */

export function PageHero({ hero }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const lines = [...hero.titleLines, hero.accent];

  return (
    <section ref={ref} className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#0A101D] text-[#FAF7F2]">
      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y: imageY }}>
        <motion.img
          src={hero.image}
          alt={hero.caption}
          className="h-full w-full object-cover"
          initial={reduceMotion ? false : { scale: 1.18, clipPath: "inset(12% 8% 12% 8%)" }}
          animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ scale: { duration: 2.2, ease }, clipPath: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } }}
        />
      </motion.div>
      {/* Shade only where the text sits: low band + top band for the nav */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#0A101D]/90 via-[#0A101D]/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent" />

      <motion.div
        className="content-container relative z-10 pb-14 pt-36 sm:pb-20"
        style={reduceMotion ? undefined : { y: textY, opacity: fade }}
      >
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <h1
            className="t-display drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] lg:col-span-8"
            style={{ fontSize: "min(var(--text-display), 10svh)" }}
          >
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className={`block ${i === lines.length - 1 ? "t-accent pr-2 bg-gradient-to-r from-[#F2E2C2] via-[#E5B869] to-[#C59B27] bg-clip-text text-transparent" : ""}`}
                  initial={{ y: reduceMotion ? 0 : "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.35 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="lg:col-span-4 lg:pb-3"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
          >
            <span className="mb-4 block h-px w-12 bg-[#E5B869]" />
            <p className="t-lead max-w-sm text-white/85">{hero.lede}</p>
          </motion.div>
        </div>

        <motion.p
          className="mt-10 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.1em] text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5B869]" /> {hero.caption}
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ---- Sub navigation between sibling pages ---------------------------- */

export function PageTabs({ pages, current, label }) {
  const listRef = useRef(null);

  // On narrow screens the row scrolls sideways; bring the current tab into view.
  useLayoutEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector('[aria-current="page"]');
    if (!list || !active) return;
    list.scrollLeft = active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2;
  }, [current]);

  return (
    <div className="sticky top-16 z-30 border-b border-[#E7DECD] bg-[#FAF7F2]/90 backdrop-blur-md sm:top-20 md:top-24">
      <nav aria-label={label} className="content-container">
        <ul ref={listRef} className="relative -mx-1 flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pages.map((page) => {
            const active = page.slug === current;
            return (
              <li key={page.slug} className="shrink-0">
                <a
                  href={page.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? "text-[#FAF7F2]" : "text-[#3C4553] hover:text-[#18181B]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId={`tab-pill-${label}`}
                      className="absolute inset-0 rounded-full bg-[#0A101D]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{page.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

/* ---- Scroll-linked statement ---------------------------------------- */

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">
      {word}
    </motion.span>
  );
}

/* Paragraph that "reads itself" as the visitor scrolls: words light up in order. */
export function ScrollStatement({ eyebrow, text, image, imageCaption }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <section className="bg-[#FAF7F2] py-20 sm:py-28 lg:py-32">
      <div className="content-container grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-8" ref={ref}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <p className="mt-7 text-[clamp(1.6rem,1.1rem+2vw,2.75rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-[#18181B]">
            {reduceMotion
              ? text
              : words.map((word, i) => (
                  <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
                ))}
          </p>
        </div>
        {image && (
          <div className="lg:col-span-4 lg:pt-14">
            <RevealImage src={image} alt={imageCaption || ""} caption={imageCaption} className="aspect-[4/5] rounded-[22px]" />
          </div>
        )}
      </div>
    </section>
  );
}

/* ---- Infinite image marquee ----------------------------------------- */

export function Marquee({ items, reverse = false }) {
  const row = [...items, ...items];
  return (
    <div className="about-marquee group relative overflow-hidden py-2" aria-hidden="true">
      <div className={`about-marquee-track flex w-max gap-4 ${reverse ? "about-marquee-reverse" : ""}`}>
        {row.map((item, i) => (
          <figure key={i} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-96">
            <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            {item.caption && (
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 font-mono text-[10.5px] tracking-[0.08em] text-white/90 backdrop-blur-sm">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---- Pinned horizontal gallery -------------------------------------- */

/* Vertical scroll drives a horizontal track while the section is pinned.
   Below lg it falls back to a native swipeable row. */
export function HorizontalGallery({ eyebrow, title, accent, items }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const wide = window.matchMedia("(min-width: 1024px)").matches && !reduceMotion;
      setDistance(wide ? Math.max(0, track.scrollWidth - window.innerWidth + 80) : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reduceMotion]);

  const pinned = distance > 0;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A101D] text-[#FAF7F2]"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-20 sm:py-24"}>
        <div className="content-container mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>{eyebrow}</Eyebrow>
            <MaskLines lines={[title]} accent={accent} light className="t-h2 mt-5" />
          </div>
          {pinned && (
            <span className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase lg:flex">
              Scroll <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>

        <motion.ul
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={`flex gap-5 px-5 md:px-10 about-track-pad ${
            pinned ? "w-max" : "snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }`}
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative h-[58svh] max-h-[520px] min-h-[340px] w-[78vw] shrink-0 snap-start overflow-hidden rounded-[24px] sm:w-[48vw] lg:w-[min(30rem,34vw)]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span className="mb-3 block h-px w-10 bg-[#E5B869]" />
                <h3 className="t-h3 text-2xl text-white sm:text-[1.7rem]">{item.title}</h3>
                <p className="t-small mt-2 max-w-xs text-white/75">{item.text}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* ---- Sticky stacking cards ------------------------------------------ */

function StackCard({ item, index, total, progress, kicker }) {
  const target = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, target]);
  return (
    <div className="sticky top-28 flex h-[78svh] items-start justify-center sm:top-32 md:top-36">
      <motion.article
        style={{ scale, top: `${index * 22}px` }}
        className="relative grid h-[64svh] min-h-[420px] w-full origin-top overflow-hidden rounded-[28px] bg-[#0E1C30] text-[#FAF7F2] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.35)] md:grid-cols-2"
      >
        <div className="relative z-10 flex flex-col justify-between p-7 sm:p-10">
          <span className="t-eyebrow text-[#E5B869]">{kicker}</span>
          <div>
            <h3 className="t-display" style={{ fontSize: "clamp(3rem, 2rem + 5vw, 6rem)" }}>
              {item.title}
              <span className="text-[#C59B27]">.</span>
            </h3>
            <p className="t-lead mt-4 max-w-sm text-white/75">{item.text}</p>
          </div>
        </div>
        <div className="absolute inset-0 md:relative">
          <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover opacity-35 md:opacity-100" />
        </div>
      </motion.article>
    </div>
  );
}

export function StackCards({ items, kicker }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  if (reduceMotion) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[24px] bg-[#0E1C30] text-white">
            <img src={item.image} alt={item.title} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
              <h3 className="t-h2">{item.title}</h3>
              <p className="t-body mt-2 text-white/75">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      {items.map((item, i) => (
        <StackCard key={item.title} item={item} index={i} total={items.length} progress={scrollYProgress} kicker={kicker} />
      ))}
    </div>
  );
}

/* ---- List with a cursor-following photograph ------------------------ */

export function HoverRevealList({ items }) {
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.5 });
  const y = useSpring(my, { stiffness: 220, damping: 26, mass: 0.5 });

  const onMove = (event) => {
    const rect = listRef.current.getBoundingClientRect();
    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  return (
    <ul ref={listRef} className="relative border-t border-[#18181B]/12" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          onPointerEnter={() => setActive(i)}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: i * 0.04, ease }}
          className="group relative grid items-center gap-x-8 gap-y-3 border-b border-[#18181B]/12 py-6 sm:grid-cols-[1fr_minmax(0,22rem)] sm:py-8"
        >
          <h3 className="text-[clamp(2rem,1.3rem+3vw,4.25rem)] font-semibold leading-none tracking-[-0.045em] text-[#18181B] transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-[#B9873A]">
            {item.title}
          </h3>
          <p className="t-body text-[#4B5563]">{item.text}</p>
          <img src={item.image} alt="" loading="lazy" className="aspect-[16/9] w-full rounded-2xl object-cover sm:col-span-2 lg:hidden" />
        </motion.li>
      ))}

      {/* Floating preview, desktop pointer only */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-64 w-52 overflow-hidden rounded-2xl shadow-2xl lg:block"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.6 : 1, rotate: active === null ? -8 : -3 }}
        transition={{ duration: 0.35, ease }}
      >
        {items.map((item, i) => (
          <img
            key={item.title}
            src={item.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500"
            style={{ opacity: active === i ? 1 : 0, transform: active === i ? "scale(1)" : "scale(1.15)" }}
          />
        ))}
      </motion.div>
    </ul>
  );
}

/* ---- Columns drifting at different speeds --------------------------- */

function DriftColumn({ images, progress, speed, offset }) {
  const y = useTransform(progress, [0, 1], [`${offset}%`, `${offset - speed}%`]);
  return (
    <motion.div style={{ y }} className="flex flex-col gap-4">
      {images.map((src) => (
        <img key={src} src={src} alt="" loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
      ))}
    </motion.div>
  );
}

export function DriftColumns({ columns }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const speeds = [18, 34, 22];
  const offsets = [6, 18, 2];
  return (
    <div ref={ref} className="grid h-[90svh] min-h-[560px] grid-cols-3 gap-4 overflow-hidden" aria-hidden="true">
      {columns.map((images, i) => (
        <DriftColumn key={i} images={images} progress={scrollYProgress} speed={reduceMotion ? 0 : speeds[i]} offset={reduceMotion ? 0 : offsets[i]} />
      ))}
    </div>
  );
}

/* ---- Captioned masonry gallery -------------------------------------- */

export function Mosaic({ items }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {items.map((item, i) => (
        <div key={item.caption} className="break-inside-avoid">
          <RevealImage
            src={item.image}
            alt={item.caption}
            caption={item.caption}
            parallax={6}
            className={`rounded-[20px] ${["aspect-[4/5]", "aspect-[4/3]", "aspect-square"][i % 3]}`}
          />
        </div>
      ))}
    </div>
  );
}

/* ---- Next page link -------------------------------------------------- */

export function NextPage({ pages, current }) {
  const reduceMotion = useReducedMotion();
  const i = pages.findIndex((page) => page.slug === current);
  const next = pages[(i + 1) % pages.length];

  return (
    <section className="bg-[#FAF7F2] py-16 sm:py-24">
      <div className="content-container">
        <a href={next.href} className="group relative block overflow-hidden rounded-[28px] bg-[#0A101D] text-[#FAF7F2]">
          <img
            src={next.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-45 transition-[opacity,transform] duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A101D]/85 via-[#0A101D]/40 to-transparent" />
          <div className="relative flex min-h-[320px] flex-col justify-between gap-10 p-8 sm:min-h-[400px] sm:p-12">
            <span className="t-eyebrow text-[#E5B869]">Next</span>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <motion.h2
                  className="t-display"
                  style={{ fontSize: "clamp(2.75rem, 1.6rem + 5vw, 6.5rem)" }}
                  initial="hidden"
                  whileInView="shown"
                  viewport={{ once: true }}
                >
                  <span className="block overflow-hidden">
                    <motion.span
                      className="block"
                      variants={{ hidden: { y: reduceMotion ? 0 : "100%" }, shown: { y: 0 } }}
                      transition={{ duration: 0.9, ease }}
                    >
                      {next.label}
                    </motion.span>
                  </span>
                </motion.h2>
                <p className="t-lead mt-3 text-white/75">{next.blurb}</p>
              </div>
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C59B27] text-[#0A101D] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 sm:h-24 sm:w-24">
                <ArrowUpRight className="h-8 w-8" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
