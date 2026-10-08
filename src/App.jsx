import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import WorkPage from "./pages/Work/WorkPage";
import { aboutPages } from "./data/about";
import { workPages } from "./data/work";
import { handleLinkClick, usePath } from "./lib/router";

const curtainEase = [0.76, 0, 0.24, 1];
const homeTitle = document.title;

function pageFor(path) {
  const about = aboutPages.find((page) => page.href === path);
  if (about) return <AboutPage slug={about.slug} />;
  if (path === "/about") return <AboutPage slug={aboutPages[0].slug} />;
  const program = workPages.find((page) => page.href === path);
  if (program) return <WorkPage slug={program.slug} />;
  if (path === "/work") return <WorkPage slug={workPages[0].slug} />;
  return <Home />;
}

function scrollToTarget() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id && document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  else window.scrollTo({ top: 0, behavior: "instant" });
}

export default function App() {
  const path = usePath();
  const reduceMotion = useReducedMotion();
  const [shownPath, setShownPath] = useState(path);
  // idle → cover (curtain rises over the old page) → reveal (curtain lifts off the new one)
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  useEffect(() => {
    if (path === shownPath) return;
    if (reduceMotion) setShownPath(path);
    else setPhase("cover");
  }, [path, shownPath, reduceMotion]);

  useLayoutEffect(() => {
    // About and Work pages set their own title; everything else falls back to the home one.
    if (!/^\/(about|work)\//.test(shownPath)) document.title = homeTitle;
    scrollToTarget();
  }, [shownPath]);

  const onCurtainDone = () => {
    if (phase === "cover") {
      setShownPath(path);
      setPhase("reveal");
    } else if (phase === "reveal") {
      setPhase("idle");
    }
  };

  return (
    <>
      <div key={shownPath}>{pageFor(shownPath)}</div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#0A101D]"
        initial={false}
        animate={phase}
        variants={{
          idle: { clipPath: "inset(100% 0% 0% 0%)", transition: { duration: 0 } },
          cover: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.6, ease: curtainEase } },
          reveal: { clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.7, ease: curtainEase, delay: 0.1 } },
        }}
        onAnimationComplete={onCurtainDone}
      >
        <motion.span
          className="font-serif text-4xl italic text-[#E5B869] sm:text-5xl"
          animate={phase === "cover" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: phase === "cover" ? 0.25 : 0 }}
        >
          Reconnect to your roots
        </motion.span>
      </motion.div>
    </>
  );
}
