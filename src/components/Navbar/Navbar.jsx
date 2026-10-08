import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Heart } from "lucide-react";
import { navLinks } from "../../data/homepage";
import girmitiyaLogo from "../../assets/logos/girmitiya logo.png";
import { usePath } from "../../lib/router";

// iOS-style drawer curve: quick start, long soft settle.
const drawerEase = [0.32, 0.72, 0, 1];

function MenuToggle({ open, onClick }) {
  const line = "absolute left-1/2 h-[1.75px] w-6 -translate-x-1/2 rounded-full bg-[#1A1A1A]";
  const t = { duration: 0.35, ease: drawerEase };
  return (
    <button
      type="button"
      className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/5 active:scale-95 lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onClick}
    >
      <motion.span className={line} initial={false} animate={open ? { top: "50%", rotate: 45, y: "-50%" } : { top: "36%", rotate: 0, y: "-50%" }} transition={t} />
      <motion.span className={line} initial={false} animate={open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} style={{ top: "50%", y: "-50%" }} />
      <motion.span className={line} initial={false} animate={open ? { top: "50%", rotate: -45, y: "-50%" } : { top: "64%", rotate: 0, y: "-50%" }} transition={t} />
    </button>
  );
}

const isActive = (link, path) =>
  link.children
    ? link.children.some((child) => child.href === path)
    : link.href === path || (link.label === "Home" && path === "/");

/* Desktop mega-dropdown: numbered list on the left, a photograph on the
   right that cross-fades to whichever page is hovered or focused. */
function DesktopDropdown({ link, path, open, onOpen, onClose, reduceMotion }) {
  const [preview, setPreview] = useState(0);
  const closeTimer = useRef(null);
  const active = isActive(link, path);

  const enter = () => {
    window.clearTimeout(closeTimer.current);
    onOpen();
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(onClose, 120);
  };
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  return (
    <li
      className="relative py-2"
      onPointerEnter={enter}
      onPointerLeave={leave}
      onFocus={enter}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && onClose()}
      onKeyDown={(event) => event.key === "Escape" && onClose()}
    >
      <a
        href={link.href}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 text-[14.5px] font-medium tracking-[-0.01em] transition-colors ${
          active || open ? "text-[#1A1A1A] font-semibold" : "text-[#2C2C2C] hover:text-[#C59B27]"
        }`}
      >
        {link.label}
        <ChevronDown className={`h-3.5 w-3.5 opacity-75 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </a>
      {active && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none w-8">
          <span className="h-[1.5px] w-full bg-[#C59B27]" />
        </span>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full z-50 pt-5"
            style={{ x: "-50%" }}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, clipPath: "inset(0% 0% 100% 0% round 20px)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
            exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
            transition={{ duration: 0.5, ease: drawerEase }}
          >
            <div className="grid w-[600px] grid-cols-[1fr_220px] gap-3 rounded-[20px] border border-[#EADFCB] bg-[#FDFBF7] p-3 shadow-[0_30px_60px_-20px_rgba(10,16,29,0.28)]">
              <ul className="flex flex-col py-1">
                {link.children.map((child, i) => {
                  const current = child.href === path;
                  return (
                    <motion.li
                      key={child.href}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 + i * 0.05, ease: drawerEase }}
                    >
                      <a
                        href={child.href}
                        onClick={onClose}
                        onPointerEnter={() => setPreview(i)}
                        onFocus={() => setPreview(i)}
                        aria-current={current ? "page" : undefined}
                        className={`group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors duration-200 ${
                          preview === i ? "bg-[#F2ECE1]" : ""
                        }`}
                      >
                        <span className="flex-1">
                          <span className="flex items-center gap-1.5 text-[15px] font-semibold tracking-[-0.015em] text-[#18181B]">
                            {child.label}
                            {current && <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />}
                          </span>
                          <span className="mt-0.5 block text-[12.5px] leading-snug text-[#6B7280]">{child.blurb}</span>
                        </span>
                        <ArrowUpRight
                          className={`mt-0.5 h-4 w-4 shrink-0 text-[#B9873A] transition-[opacity,transform] duration-300 ${
                            preview === i ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"
                          }`}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="relative overflow-hidden rounded-[14px] bg-[#0A101D]">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={preview}
                    src={link.children[preview].image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: drawerEase }}
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3.5 right-3.5 font-serif text-lg italic leading-tight text-white">
                  {link.children[preview].label}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const reduceMotion = useReducedMotion();
  const path = usePath();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the menu is open: lock page scroll, close on Escape or on growing to desktop.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const root = document.documentElement;
    const { overflow } = root.style;
    root.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && setMobileOpen(false);
    const mql = window.matchMedia("(min-width: 1024px)");
    const onWide = () => mql.matches && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    mql.addEventListener("change", onWide);
    return () => {
      root.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      mql.removeEventListener("change", onWide);
    };
  }, [mobileOpen]);

  const close = () => {
    setMobileOpen(false);
    setMobileSub(null);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#FAF7F2]/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur"
            : "bg-[#FAF7F2]/85 backdrop-blur-sm"
        }`}
      >
        <nav className="content-container flex h-16 items-center justify-between sm:h-20 md:h-24">
          {/* Logo & Brand Name */}
          <a href="/#home" onClick={close} className="flex items-center gap-2.5 sm:gap-3.5 group">
            <img
              src={girmitiyaLogo}
              alt="Girmitiya Foundation logo"
              className="h-11 w-11 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-semibold tracking-[0.02em] text-[#1A1A1A] sm:text-lg md:text-xl">
                GIRMITIYA
              </span>
              <span className="font-mono text-[9px] font-medium tracking-[0.24em] text-[#1A1A1A]/80 sm:text-[11px]">
                FOUNDATION
              </span>
              <span className="mt-0.5 hidden font-serif text-sm italic text-[#B9873A] sm:block">
                Reconnect to your roots
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <DesktopDropdown
                    key={link.label}
                    link={link}
                    path={path}
                    open={openMenu === link.label}
                    onOpen={() => setOpenMenu(link.label)}
                    onClose={() => setOpenMenu((current) => (current === link.label ? null : current))}
                    reduceMotion={reduceMotion}
                  />
                );
              }
              const isHome = isActive(link, path);
              return (
                <li key={link.label} className="relative py-2">
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 text-[14.5px] font-medium tracking-[-0.01em] transition-colors ${
                      isHome ? "text-[#1A1A1A] font-semibold" : "text-[#2C2C2C] hover:text-[#C59B27]"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-75" />}
                  </a>
                  {isHome && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none w-8">
                      <span className="h-[1.5px] w-full bg-[#C59B27]" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-md bg-[#C59B27] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#b58b20] hover:shadow active:scale-[0.97]"
            >
              Donate Now <Heart className="h-4 w-4" />
            </a>
          </div>

          <MenuToggle open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
        </nav>
      </header>

      {/* Mobile menu — rendered outside the header so the header's backdrop
          blur does not become its containing block. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-[#FAF7F2] pt-16 sm:pt-20 md:pt-24 lg:hidden"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: drawerEase }}
          >
            <nav aria-label="Mobile" className="content-container flex flex-1 flex-col overflow-y-auto pb-8 pt-6">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => {
                  const subOpen = mobileSub === link.label;
                  const row = (
                    <>
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-[#B9873A]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[1.75rem] font-semibold leading-none tracking-[-0.035em] text-[#18181B] transition-colors duration-200 group-active:text-[#B9873A]">
                          {link.label}
                        </span>
                      </span>
                      {link.children ? (
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 self-center transition-[transform,color] duration-300 ${
                            subOpen ? "rotate-180 text-[#B9873A]" : "text-[#18181B]/40"
                          }`}
                        />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#18181B]/30 transition-[color,transform] duration-200 group-active:translate-x-0.5 group-active:-translate-y-0.5 group-active:text-[#B9873A]" />
                      )}
                    </>
                  );
                  const rowMotion = {
                    className: "group flex w-full items-baseline justify-between gap-4 py-3.5 text-left",
                    initial: reduceMotion ? false : { y: "110%", opacity: 0 },
                    animate: { y: "0%", opacity: 1 },
                    exit: reduceMotion ? undefined : { y: "-40%", opacity: 0, transition: { duration: 0.18, ease: "easeIn" } },
                    transition: { duration: 0.6, delay: 0.12 + i * 0.045, ease: drawerEase },
                  };
                  return (
                    <li key={link.label} className="overflow-hidden border-b border-black/[0.07]">
                      {link.children ? (
                        <motion.button
                          type="button"
                          aria-expanded={subOpen}
                          onClick={() => setMobileSub(subOpen ? null : link.label)}
                          {...rowMotion}
                        >
                          {row}
                        </motion.button>
                      ) : (
                        <motion.a href={link.href} onClick={close} {...rowMotion}>
                          {row}
                        </motion.a>
                      )}

                      <AnimatePresence initial={false}>
                        {link.children && subOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: drawerEase }}
                          >
                            <ul className="grid grid-cols-2 gap-2.5 pb-4">
                              {link.children.map((child, j) => (
                                <motion.li
                                  key={child.href}
                                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: 0.05 + j * 0.05, ease: drawerEase }}
                                >
                                  <a
                                    href={child.href}
                                    onClick={close}
                                    aria-current={child.href === path ? "page" : undefined}
                                    className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-[#0A101D]"
                                  >
                                    <img src={child.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                                    <span className="absolute bottom-2.5 left-3 right-3 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-white">
                                      {child.label}
                                    </span>
                                    {child.href === path && (
                                      <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#E5B869]" />
                                    )}
                                  </a>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <motion.div
                className="mt-auto pt-10"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.5, delay: 0.12 + navLinks.length * 0.045, ease: drawerEase }}
              >
                <a
                  href="/donate"
                  onClick={close}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C59B27] py-4 text-[15px] font-semibold text-[#0A101D] transition-[background-color,transform] duration-200 hover:bg-[#d9b167] active:scale-[0.98]"
                >
                  Donate Now <Heart className="h-4 w-4" />
                </a>
                <p className="mt-5 text-center font-serif text-lg italic text-[#B9873A]">Reconnect to your roots</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
