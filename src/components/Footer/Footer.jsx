import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronUp, Link2, FileText, ArrowUpRight } from "lucide-react";
import logo from "../../assets/logos/foundation-logo.svg";
import footerMap from "../../assets/images/footer-map.svg";
import vintageShip from "../../assets/images/vintage-ship.png";
import { footerQuickLinks, footerPolicyLinks } from "../../data/homepage";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const isVisible = useInView(footerRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    animate: isVisible ? { opacity: 1, y: 0 } : undefined,
    transition: reduceMotion ? { duration: 0 } : { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer id="contact" ref={footerRef} className="girmitiya-footer">
      <style>{`
        .girmitiya-footer { position: relative; overflow: hidden; padding-top: 4.1rem; background: #061523; color: rgba(250,247,242,.78); }
        .girmitiya-footer::before { content: ""; position: absolute; top: -2.15rem; left: -3%; width: 106%; height: 3.7rem; border-top: 3px solid #c99943; border-radius: 50%; background: #f7f1e5; transform: rotate(-.7deg); }
        .girmitiya-footer::after { content: ""; position: absolute; inset: 2.2rem 0 4rem; opacity: .13; pointer-events: none; background: linear-gradient(90deg, rgba(7,19,32,.4), transparent 48%, rgba(7,19,32,.2)), url(${vintageShip}) right 3% 15% / 39% auto no-repeat, radial-gradient(ellipse at 8% 35%, rgba(105,132,151,.22), transparent 19%); filter: grayscale(1) sepia(.25); }
        .girmitiya-footer-inner { position: relative; z-index: 1; width: min(1280px, 100%); margin: 0 auto; padding: 0 2.5rem; }
        .girmitiya-footer-intro { position: relative; max-width: 1120px; margin: 0 auto 2rem; text-align: center; }
        .girmitiya-footer-intro::before, .girmitiya-footer-intro::after { position: absolute; top: 1.3rem; width: 8rem; color: rgba(203,158,73,.7); font: italic 500 1.25rem/1.25 var(--font-display); white-space: pre-line; }
        .girmitiya-footer-intro::before { content: "Our\\A History\\A Lives on\\A in People"; left: -8rem; transform: rotate(-10deg); }
        .girmitiya-footer-intro::after { content: "More\\A Than a Past\\A A Shared\\A Future"; right: -8rem; transform: rotate(10deg); }
        .girmitiya-footer-kicker { display: inline-flex; align-items: center; gap: .85rem; color: #d0a126; font: 700 .7rem/1 var(--font-sans); letter-spacing: .25em; }
        .girmitiya-footer-kicker::before, .girmitiya-footer-kicker::after { content: ""; width: 2.8rem; height: 1px; background: #c99943; }
        .girmitiya-footer-statement { margin: .65rem 0 .75rem; color: #faf7f2; font: 600 clamp(2rem, 3.65vw, 3.15rem)/1.03 var(--font-display); letter-spacing: -.035em; }
        .girmitiya-footer-statement span { color: #d0a126; }
        .girmitiya-footer-statement::after { content: "∞"; display: block; margin-top: .45rem; color: rgba(201,154,34,.72); font: 400 1.2rem/1 var(--font-display); letter-spacing: 0; }
        .girmitiya-footer-subline { display: flex; align-items: center; justify-content: center; gap: .75rem; color: rgba(250,247,242,.56); font: 600 .66rem/1 var(--font-sans); letter-spacing: .27em; text-transform: uppercase; }
        .girmitiya-footer-subline::before, .girmitiya-footer-subline::after { content: ""; width: 4rem; height: 1px; background: rgba(201,154,34,.55); }
        .girmitiya-footer-columns { display: grid; grid-template-columns: 1.2fr .9fr .92fr 1.38fr; }
        .girmitiya-footer-column { min-width: 0; padding: 0 2.55rem; border-left: 1px solid rgba(201,154,34,.38); }
        .girmitiya-footer-column:first-child { padding-left: 0; border-left: 0; }
        .girmitiya-footer-column:last-child { padding-right: 0; }
        .girmitiya-footer-brand { display: flex; align-items: center; gap: .8rem; color: #faf7f2; }
        .girmitiya-footer-brand img { width: 4.25rem; height: 4.25rem; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,.2)); }
        .girmitiya-footer-brand-name { font: 700 1.02rem/1.05 var(--font-display); letter-spacing: .03em; }
        .girmitiya-footer-brand-name em { display: block; margin-top: .35rem; color: #d0a126; font: italic 500 .8rem/1 var(--font-display); letter-spacing: 0; }
        .girmitiya-footer-description { max-width: 305px; margin: 1rem 0 1rem; color: #aebac6; font: 400 .8rem/1.55 var(--font-sans); }
        .girmitiya-footer-heading { display: flex; align-items: center; gap: .65rem; margin: .25rem 0 1.1rem; color: #d0a126; font: 600 1.08rem/1 var(--font-display); }
        .girmitiya-footer-heading::after { content: ""; width: 2rem; height: 1px; margin-top: .2rem; background: rgba(208,161,38,.7); }
        .girmitiya-footer-heading svg { width: 1.1rem; height: 1.1rem; stroke-width: 1.7; }
        .girmitiya-footer-list { display: flex; flex-direction: column; gap: .15rem; margin: 0; padding: 0; list-style: none; }
        .girmitiya-footer-list a { display: flex; align-items: center; justify-content: space-between; padding: .48rem 0; border-bottom: 1px solid rgba(174,186,198,.1); color: #c5ced6; font: 400 .84rem/1.2 var(--font-sans); transition: color 220ms ease, transform 220ms ease, border-color 220ms ease; }
        .girmitiya-footer-list a:hover { border-color: rgba(208,161,38,.35); color: #d0a126; transform: translateX(4px); }
        .girmitiya-footer-list a svg { width: .85rem; height: .85rem; color: #b68424; }
        .girmitiya-footer-social-title { margin: 0 0 .75rem; color: #d0a126; font: 600 1.05rem/1 var(--font-display); }
        .girmitiya-footer-social { display: flex; gap: .65rem; }
        .girmitiya-footer-social a { display: grid; place-items: center; width: 2.35rem; height: 2.35rem; border: 1px solid rgba(201,154,34,.7); border-radius: 50%; color: #d0a126; transition: color 220ms ease, background 220ms ease, transform 220ms ease, box-shadow 220ms ease; }
        .girmitiya-footer-social a:hover { background: #d0a126; color: #091625; transform: translateY(-3px) scale(1.04); box-shadow: 0 7px 16px rgba(201,154,34,.2); }
        .girmitiya-footer-social svg { width: 1rem; height: 1rem; }
        .girmitiya-footer-contact { display: flex; flex-direction: column; gap: .75rem; margin: 0 0 1rem; padding: 0; list-style: none; }
        .girmitiya-footer-contact li { display: flex; gap: .8rem; color: #c5ced6; font: 400 .81rem/1.5 var(--font-sans); }
        .girmitiya-footer-contact li > svg { flex: 0 0 auto; width: 1.2rem; height: 1.2rem; margin-top: .1rem; color: #d0a126; stroke-width: 1.6; transition: filter 220ms ease, transform 220ms ease; }
        .girmitiya-footer-contact li:hover > svg { filter: drop-shadow(0 0 5px rgba(208,161,38,.65)); transform: scale(1.08); }
        .girmitiya-footer-location { position: relative; overflow: hidden; border: 1px solid rgba(208,161,38,.75); border-radius: .45rem; background: #f4ead5; color: #102238; box-shadow: 0 10px 20px rgba(0,0,0,.18); transition: transform 350ms ease, box-shadow 350ms ease; }
        .girmitiya-footer-location:hover { transform: translateY(-3px); box-shadow: 0 16px 25px rgba(0,0,0,.25); }
        .girmitiya-footer-location img { display: block; width: 100%; height: 88px; object-fit: cover; opacity: .5; mix-blend-mode: multiply; transition: transform 500ms ease; }
        .girmitiya-footer-location:hover img { transform: scale(1.04); }
        .girmitiya-footer-location::before { content: ""; position: absolute; z-index: 1; top: 34%; left: 63%; width: .8rem; height: .8rem; border: 3px solid #f4ead5; border-radius: 50%; background: #b33f35; box-shadow: 0 0 0 4px rgba(179,63,53,.18); }
        .girmitiya-footer-location-copy { position: relative; z-index: 2; padding: .65rem .8rem .75rem; background: rgba(250,247,242,.92); }
        .girmitiya-footer-location-copy strong { display: block; color: #13253a; font: 700 .72rem/1.2 var(--font-sans); letter-spacing: .04em; }
        .girmitiya-footer-location-copy span { display: block; margin-top: .2rem; color: #6d7881; font: 500 .67rem/1 var(--font-sans); }
        .girmitiya-footer-mantra { display: flex; align-items: center; justify-content: center; gap: 1rem; margin: 2.4rem auto 1.75rem; color: rgba(250,247,242,.7); font: italic 500 1.2rem/1.2 var(--font-display); text-align: center; }
        .girmitiya-footer-mantra::before, .girmitiya-footer-mantra::after { content: ""; width: 4.5rem; height: 1px; background: rgba(201,154,34,.55); }
        .girmitiya-footer-bottom { border-top: 1px solid rgba(201,154,34,.62); background: rgba(2,10,19,.25); }
        .girmitiya-footer-bottom-inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; min-height: 4.6rem; padding: 0 2.5rem; }
        .girmitiya-footer-copyright { color: #9ba8b4; font: 400 .72rem/1.4 var(--font-sans); }
        .girmitiya-footer-bottom-note { color: rgba(250,247,242,.52); font: 600 .6rem/1 var(--font-sans); letter-spacing: .2em; text-transform: uppercase; }
        .girmitiya-footer-top { display: inline-flex; align-items: center; gap: .6rem; color: #d0a126; font: 600 .72rem/1 var(--font-sans); }
        .girmitiya-footer-top span { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border: 1px solid #d0a126; border-radius: 50%; transition: background 220ms ease, color 220ms ease, transform 220ms ease; }
        .girmitiya-footer-top:hover span { background: #d0a126; color: #091625; transform: translateY(-3px); }
        .girmitiya-footer-top svg { transition: transform 220ms ease; }.girmitiya-footer-top:hover svg { transform: translateY(-3px); }
        @media (max-width: 1180px) { .girmitiya-footer-intro::before { left: -2rem; }.girmitiya-footer-intro::after { right: -2rem; } }
        @media (max-width: 980px) { .girmitiya-footer-intro::before, .girmitiya-footer-intro::after { display: none; }.girmitiya-footer-columns { grid-template-columns: 1.2fr 1fr 1fr; }.girmitiya-footer-column-contact { grid-column: 1 / -1; padding: 2rem 0 0; border-top: 1px solid rgba(201,154,34,.27); border-left: 0; }.girmitiya-footer-column-contact .girmitiya-footer-contact { display: grid; grid-template-columns: repeat(3, 1fr); }.girmitiya-footer-location { max-width: 340px; } }
        @media (max-width: 640px) { .girmitiya-footer { padding-top: 4rem; }.girmitiya-footer-inner { padding: 0 1.25rem; }.girmitiya-footer::after { background-size: 360px auto; background-position: 50% 75%; }.girmitiya-footer-intro { margin-bottom: 2.5rem; }.girmitiya-footer-subline { gap: .45rem; font-size: .53rem; letter-spacing: .16em; }.girmitiya-footer-subline::before, .girmitiya-footer-subline::after { width: 1.4rem; }.girmitiya-footer-columns { display: flex; flex-direction: column; gap: 2.25rem; }.girmitiya-footer-column, .girmitiya-footer-column:first-child, .girmitiya-footer-column:last-child { padding: 0; border: 0; }.girmitiya-footer-column:not(:first-child) { padding-top: 2rem; border-top: 1px solid rgba(201,154,34,.27); }.girmitiya-footer-column-contact { padding-top: 2rem !important; }.girmitiya-footer-column-contact .girmitiya-footer-contact { display: flex; }.girmitiya-footer-location { max-width: none; }.girmitiya-footer-mantra { margin: 2.8rem auto 2rem; font-size: 1.1rem; }.girmitiya-footer-mantra::before, .girmitiya-footer-mantra::after { width: 1.5rem; }.girmitiya-footer-bottom-inner { flex-wrap: wrap; justify-content: center; padding: 1.2rem 1.25rem; text-align: center; }.girmitiya-footer-bottom-note { order: 3; width: 100%; }.girmitiya-footer-top { margin-left: auto; } }
        @media (prefers-reduced-motion: reduce) { .girmitiya-footer *, .girmitiya-footer::before, .girmitiya-footer::after { animation: none !important; transition-duration: .01ms !important; } }
      `}</style>
      <div className="girmitiya-footer-inner">
        <motion.div {...reveal(0)} className="girmitiya-footer-intro">
          <span className="girmitiya-footer-kicker">GIRMITIYA FOUNDATION</span>
          <h2 className="girmitiya-footer-statement">Rooted in Heritage. Connected <span>Across Generations.</span></h2>
          <div className="girmitiya-footer-subline">People <span>•</span> Places <span>•</span> Stories <span>•</span> A Stronger Tomorrow</div>
        </motion.div>

        <div className="girmitiya-footer-columns">
          <motion.div {...reveal(.1)} className="girmitiya-footer-column">
            <a href="#home" className="girmitiya-footer-brand">
              <img src={logo} alt="Girmitiya Foundation logo" />
              <span className="girmitiya-footer-brand-name">GIRMITIYA<br />FOUNDATION<em>Reconnect to your roots</em></span>
            </a>
            <p className="girmitiya-footer-description">
            Girmitiya Foundation is a NGO in India, helping Girmitiya family, who are
            searching their Ancestral Roots / Birth Place / Village in India.
            Foundation is working also in Education, Women empowerment, Skilled and
            Promote Indian traditional culture field.
            </p>
            <h3 className="girmitiya-footer-social-title">Follow Us</h3>
            <div className="girmitiya-footer-social">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}><Icon /></a>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal(.18)} className="girmitiya-footer-column">
            <h3 className="girmitiya-footer-heading"><Link2 /> Quick Links</h3>
            <ul className="girmitiya-footer-list">
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}<ArrowUpRight aria-hidden="true" /></a>
              </li>
            ))}
            </ul>
          </motion.div>

          <motion.div {...reveal(.26)} className="girmitiya-footer-column">
            <h3 className="girmitiya-footer-heading"><FileText /> Foundation Policies</h3>
            <ul className="girmitiya-footer-list">
            {footerPolicyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}<ArrowUpRight aria-hidden="true" /></a>
              </li>
            ))}
            </ul>
          </motion.div>

          <motion.div {...reveal(.34)} className="girmitiya-footer-column girmitiya-footer-column-contact">
            <h3 className="girmitiya-footer-heading"><MapPin /> Contact Information</h3>
            <ul className="girmitiya-footer-contact">
            <li className="flex items-start gap-2.5">
              <Phone aria-hidden="true" />
              <span>
                +91 9891598276 (India)
                <br />
                +41 797416368 (Switzerland)
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail aria-hidden="true" />
              <span>girmitiya.foundation2023@gmail.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" />
              <span>
                Girmitiya Foundation 32-A, Ground Floor Mayur Vihar Phase-I Near by
                Uma Enclave, C-Block, D2 New Delhi-110091
              </span>
            </li>
            </ul>
            <div className="girmitiya-footer-location">
              <img src={footerMap} alt="Map showing the Girmitiya Foundation location in New Delhi" />
              <div className="girmitiya-footer-location-copy"><strong>GIRMITIYA FOUNDATION</strong><span>NEW DELHI, INDIA</span></div>
            </div>
          </motion.div>
        </div>

        <motion.div {...reveal(.44)} className="girmitiya-footer-mantra">Rooted in Heritage. Connected Across Generations.</motion.div>
      </div>

      <motion.div {...reveal(.52)} className="girmitiya-footer-bottom">
        <div className="girmitiya-footer-inner girmitiya-footer-bottom-inner">
          <p className="girmitiya-footer-copyright">© 2025 Girmitiya Foundation, All Rights Reserved.</p>
          <span className="girmitiya-footer-bottom-note">Reconnect &nbsp;•&nbsp; Preserve &nbsp;•&nbsp; Empower</span>
          <a
            href="#home"
            aria-label="Back to top"
            onClick={handleBackToTop}
            className="girmitiya-footer-top"
          >
            <span><ChevronUp className="h-4 w-4" aria-hidden="true" /></span> Back to Top
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
