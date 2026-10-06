import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { navLinks } from "../../data/homepage";
import girmitiyaLogo from "../../assets/logos/girmitiya logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 shadow-md backdrop-blur border-b border-black/5"
          : "bg-[#FAF7F2]/85 backdrop-blur-sm"
      }`}
    >
      <nav className="content-container flex h-20 items-center justify-between md:h-24">
        {/* Logo & Brand Name */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <img
            src={girmitiyaLogo}
            alt="Girmitiya Foundation logo"
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-[0.02em] text-[#1A1A1A] sm:text-lg md:text-xl">
              GIRMITIYA
            </span>
            <span className="font-mono text-[10px] font-medium tracking-[0.24em] text-[#1A1A1A]/80 sm:text-[11px]">
              FOUNDATION
            </span>
            <span className="mt-0.5 font-serif text-[13px] italic text-[#B9873A] sm:text-sm block">
              Reconnect to your roots
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-7 xl:gap-8 lg:flex">
          {navLinks.map((link) => {
            const isHome = link.label === "Home";
            return (
              <li key={link.label} className="relative py-2">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-[14.5px] font-medium tracking-[-0.01em] transition-colors ${
                    isHome
                      ? "text-[#1A1A1A] font-semibold"
                      : "text-[#2C2C2C] hover:text-[#C59B27]"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-75" />}
                </a>

                {/* Active Indicator Under Home */}
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
            href="#donate"
            className="inline-flex items-center gap-2 rounded-md bg-[#C59B27] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#b58b20] hover:shadow"
          >
            Donate Now <Heart className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-[#1A1A1A] p-1 lg:hidden focus:outline-none"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#FAF7F2] shadow-xl lg:hidden">
          <ul className="content-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded px-3 py-2.5 text-sm font-medium text-[#1A1A1A] hover:bg-black/5 hover:text-[#C59B27]"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-75" />}
                </a>
              </li>
            ))}
            <li className="pt-3 px-1">
              <a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-md bg-[#C59B27] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#b58b20]"
              >
                Donate Now <Heart className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
