import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import { Eyebrow, FadeUp, MaskLines, RevealImage } from "../../components/About/AboutKit";
import { posts } from "../../data/blog";
import { contact } from "../../data/contact";
import "./BlogPage.css";

const ease = [0.22, 1, 0.36, 1];

function HeroTitle({ lines, accent, className = "", delay = 0.2 }) {
  const reduceMotion = useReducedMotion();
  const all = [...lines, accent];
  return (
    <h1 className={className}>
      {all.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${i === all.length - 1 ? "t-accent text-[#B9873A]" : ""}`}
            initial={{ y: reduceMotion ? 0 : "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: delay + i * 0.1, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function Meta({ post, light = false }) {
  return (
    <p className={`bl-meta ${light ? "bl-meta--light" : ""}`}>
      <span>{post.category}</span>
      <span aria-hidden="true">·</span>
      <span>{post.date}</span>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </p>
  );
}

/* ---- Index ------------------------------------------------------------ */

/* A featured story card with a "Read" disc that trails the cursor. */
function FeaturedStory({ post }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 300, damping: 28, mass: 0.5 });

  const onMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  return (
    <motion.a
      ref={ref}
      href={post.href}
      className="bl-feature group"
      onPointerMove={onMove}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="bl-feature-media">
        <motion.img
          src={post.cover}
          alt={post.coverCaption}
          initial={reduceMotion ? false : { clipPath: "inset(14% 10% 14% 10%)", scale: 1.15 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        />
        {!reduceMotion && (
          <motion.span
            className="bl-cursor"
            style={{ x, y }}
            animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
            transition={{ duration: 0.3, ease }}
            aria-hidden="true"
          >
            Read
          </motion.span>
        )}
      </div>
      <div className="bl-feature-body">
        <Meta post={post} />
        <h2 className="bl-feature-title">{post.title}</h2>
        <p className="t-lead text-[#4B5563]">{post.excerpt}</p>
        <p className="bl-byline">
          <span className="bl-avatar" aria-hidden="true">{post.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
          <span>
            <strong>{post.author}</strong>
            <span>{post.authorNote}</span>
          </span>
        </p>
        <span className="bl-read-link">
          Read the story <ArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  );
}

function ShareYourStory() {
  return (
    <section className="bg-[#0A101D] py-20 text-[#FAF7F2] sm:py-28">
      <div className="content-container grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Eyebrow light>Your story</Eyebrow>
          <MaskLines lines={["Found your village?", "Still"]} accent="searching?" light className="t-h1 mt-5" />
          <FadeUp>
            <p className="t-lead mt-6 max-w-xl text-white/70">
              Girmitiya descendants everywhere are retracing the journey. Write to us — your story could help the next family find their way home.
            </p>
          </FadeUp>
        </div>
        <FadeUp className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent("My Girmitiya story")}`} className="btn-gold justify-center">
            Share your story <Mail className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

export function BlogIndex() {
  useEffect(() => {
    document.title = "Blog | Girmitiya Foundation";
  }, []);
  const reduceMotion = useReducedMotion();
  return (
    <>
      <RootsBorder />
      <Navbar />
      <main className="bg-[#FAF7F2]">
        <section className="content-container pb-14 pt-36 sm:pb-20 sm:pt-44">
          <motion.p
            className="t-eyebrow text-[#B9873A]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            Blog · Your Story
          </motion.p>
          <div className="mt-5 grid items-end gap-8 lg:grid-cols-12">
            <HeroTitle lines={["Stories of"]} accent="return" className="t-display text-[#18181B] lg:col-span-7" />
            <motion.p
              className="t-lead text-[#4B5563] lg:col-span-4 lg:col-start-9"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              First-person accounts from Girmitiya descendants who went looking for home — and found it.
            </motion.p>
          </div>
        </section>

        <section className="content-container pb-24 sm:pb-32">
          {posts.map((post) => (
            <FeaturedStory key={post.slug} post={post} />
          ))}
        </section>

        <ShareYourStory />
      </main>
      <Footer />
    </>
  );
}

/* ---- Article ---------------------------------------------------------- */

function Timeline({ items }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <ol ref={ref} className="bl-timeline">
      <motion.span className="bl-timeline-line" style={{ scaleY: reduceMotion ? 1 : line }} aria-hidden="true" />
      {items.map((item, i) => (
        <motion.li
          key={item.when}
          initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-25% 0px" }}
          transition={{ duration: 0.7, delay: i * 0.05, ease }}
        >
          <span className="bl-timeline-dot" aria-hidden="true" />
          <span className="t-eyebrow text-[#B9873A]">{item.when}</span>
          <p className="t-body mt-2 text-[#3C4553]">{item.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}

function Quote({ text }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.blockquote
      className="bl-quote"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: reduceMotion ? 0 : "110%" }, shown: { y: 0 } }}
            transition={{ duration: 0.8, delay: i * 0.035, ease }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.blockquote>
  );
}

function Block({ block, first }) {
  switch (block.type) {
    case "h":
      return (
        <FadeUp as="h2" className="bl-h">
          {block.text}
        </FadeUp>
      );
    case "quote":
      return <Quote text={block.text} />;
    case "timeline":
      return <Timeline items={block.items} />;
    case "image":
      return (
        <div className={`bl-figure ${block.tall ? "bl-figure--tall" : ""}`}>
          <RevealImage src={block.src} alt={block.caption} caption={block.caption} className={`rounded-2xl ${block.tall ? "aspect-[4/5]" : "aspect-[16/9]"}`} />
        </div>
      );
    default:
      return <p className={`bl-p ${first ? "bl-p--first" : ""}`}>{block.text}</p>;
  }
}

export function BlogPost({ slug }) {
  const post = posts.find((p) => p.slug === slug);
  const reduceMotion = useReducedMotion();
  const coverRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  const { scrollYProgress: coverProgress } = useScroll({ target: coverRef, offset: ["start end", "end start"] });
  const coverY = useTransform(coverProgress, [0, 1], ["-8%", "8%"]);

  useEffect(() => {
    document.title = `${post.title} | Girmitiya Foundation`;
  }, [post.title]);

  const firstParagraph = post.body.findIndex((b) => b.type === "p");

  return (
    <>
      <RootsBorder />
      <Navbar />
      <motion.div className="bl-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <main className="bg-[#FAF7F2]">
        <article>
          <header className="content-container pb-12 pt-36 sm:pt-44">
            <motion.a
              href="/blog"
              className="bl-back"
              initial={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <ArrowLeft aria-hidden="true" /> All stories
            </motion.a>
            <div className="mt-8">
              <Meta post={post} />
            </div>
            <HeroTitle lines={post.titleLines} accent={post.titleAccent} className="t-display mt-5 max-w-[14ch] text-[#18181B]" />
            <motion.p
              className="bl-byline mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="bl-avatar" aria-hidden="true">{post.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
              <span>
                <strong>{post.author}</strong>
                <span>{post.authorNote}</span>
              </span>
            </motion.p>
          </header>

          <figure ref={coverRef} className="bl-cover">
            <motion.img
              src={post.cover}
              alt={post.coverCaption}
              style={reduceMotion ? undefined : { y: coverY }}
              initial={reduceMotion ? false : { clipPath: "inset(10% 6% 10% 6%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />
            <figcaption>{post.coverCaption}</figcaption>
          </figure>

          <div className="bl-body">
            {post.body.map((block, i) => (
              <Block key={i} block={block} first={i === firstParagraph} />
            ))}
          </div>
        </article>

        <section className="bl-end content-container">
          <FadeUp>
            <p className="t-eyebrow text-[#B9873A]">Searching for your own village?</p>
            <a href="/girmitiya-chapter/reconnect-to-your-roots" className="bl-end-link group">
              Reconnect to your <span className="t-accent text-[#B9873A]">roots</span>
              <span className="bl-end-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </a>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
