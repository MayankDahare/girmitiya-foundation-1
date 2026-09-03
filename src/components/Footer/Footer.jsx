import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import logo from "../../assets/logos/foundation-logo.svg";
import footerMap from "../../assets/images/footer-map.svg";
import { footerQuickLinks, footerPolicyLinks } from "../../data/homepage";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./SocialIcons";

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-navy-950 pt-16 text-cream-100/80">
      <div className="content-container grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Girmitiya Foundation logo" className="h-12 w-12" />
            <span className="font-display text-base font-bold text-cream-100">
              GIRMITIYA
              <br />
              FOUNDATION
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Girmitiya Foundation is a NGO in India, helping Girmitiya family, who are
            searching their Ancestral Roots / Birth Place / Village in India.
            Foundation is working also in Education, Women empowerment, Skilled and
            Promote Indian traditional culture field.
          </p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gold-400">Follow Us</h3>
            <div className="mt-3 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/10 transition-colors hover:bg-gold-500 hover:text-navy-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-gold-400">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-gold-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-gold-400">Foundation Policies</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {footerPolicyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-gold-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-gold-400">Contact Information</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                +91 9891598276 (India)
                <br />
                +41 797416368 (Switzerland)
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>girmitiya.foundation2023@gmail.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                Girmitiya Foundation 32-A, Ground Floor Mayur Vihar Phase-I Near by
                Uma Enclave, C-Block, D2 New Delhi-110091
              </span>
            </li>
          </ul>
          <img src={footerMap} alt="Map to Girmitiya Foundation office" className="mt-4 w-full rounded-md" />
        </div>
      </div>

      <div className="border-t border-cream-100/10 py-5">
        <div className="content-container flex flex-col items-center justify-between gap-3 text-xs text-cream-100/50 sm:flex-row">
          <p>© 2025 Girmitiya Foundation, All Rights Reserved.</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            <ChevronUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
