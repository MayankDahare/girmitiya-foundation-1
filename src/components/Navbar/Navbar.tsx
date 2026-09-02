import { useEffect, useState } from "react";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { navLinks } from "../../data/homepage";
import logo from "../../assets/logos/foundation-logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="content-container flex h-20 items-center justify-between md:h-24">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Girmitiya Foundation logo" className="h-12 w-12 md:h-14 md:w-14" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-wide text-cream-100 md:text-lg">
              GIRMITIYA
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-gold-400 md:text-xs">
              FOUNDATION
            </span>
            <span className="mt-0.5 hidden font-display text-[11px] italic text-cream-300/80 md:block">
              Reconnect to your roots
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-cream-100/90 transition-colors hover:text-gold-400"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#donate" className="btn-gold text-sm">
            Donate Now <Heart className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="text-cream-100 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-950/98 lg:hidden">
          <ul className="content-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded px-2 py-3 text-sm font-medium text-cream-100/90 hover:bg-white/5 hover:text-gold-400"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#donate" className="btn-gold w-full justify-center text-sm">
                Donate Now <Heart className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
