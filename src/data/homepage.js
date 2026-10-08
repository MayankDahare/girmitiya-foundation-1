import {
  HeartHandshake,
  Users,
  Star,
  HandHeart,
  ShieldCheck,
  BookOpen,
  UserCircle2,
  HeartPulse,
  Landmark,
  Compass,
} from "lucide-react";
import { aboutPages } from "./about";
import { workPages } from "./work";
import { chapterPages } from "./chapter";

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about", children: aboutPages },
  { label: "Our Work", href: "/#programs", children: workPages },
  { label: "Girmitiya Chapter", href: "/girmitiya-chapter", children: chapterPages },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const heroPillars = [
  { icon: HeartHandshake, title: "Care", subtitle: "For Communities" },
  { icon: Users, title: "Connect", subtitle: "Generations & Roots" },
  { icon: Star, title: "Celebrate", subtitle: "Culture & Heritage" },
  { icon: HandHeart, title: "Contribute", subtitle: "For A Better Tomorrow" },
];

export const introPoints = [
  "The Foundation is registered under the Indian Trust Act 1882 and was established in 2019.",
  "The Foundation also supports Girmitiya families in their search for ancestral roots, birth places, ancestral lands and the villages of origin in India.",
  "We believe that our roots represent our Identity, Culture, Pride and serve as a foundation for Education and Heritage.",
];

export const impactStats = [
  { value: 6, suffix: "+", label: "Years of Dedicated Service" },
  { value: 150, suffix: "+", label: "Research / Reconnected" },
  { value: 190, suffix: "+", label: "Years of Girmitiya Legacy" },
  { value: 1000, suffix: "+", label: "People Successfully Reunited" },
];

export const globalMarkers = [
  { name: "Canada", flag: "🇨🇦", top: "18%", left: "20%" },
  { name: "Fiji", flag: "🌏", top: "62%", left: "88%" },
  { name: "Mauritius", flag: "🇲🇺", top: "58%", left: "78%" },
  { name: "Trinidad", flag: "🇹🇹", top: "52%", left: "26%" },
  { name: "South Africa", flag: "🇿🇦", top: "72%", left: "52%" },
  { name: "Australia", flag: "🇦🇺", top: "80%", left: "84%" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  ...aboutPages.map(({ label, href }) => ({ label, href })),
  { label: "Our Work", href: "/#programs" },
  { label: "Girmitiya Chapter", href: "/girmitiya-chapter" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Donate Now", href: "/donate" },
];

export const footerPolicyLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Shipping", href: "#shipping" },
  { label: "Cancellation & Refund Policy", href: "#refund" },
];

// Icons re-exported for use where the ProgramItem list is assembled with images (see components/Programs)
export const programIcons = {
  ShieldCheck,
  BookOpen,
  UserCircle2,
  HeartPulse,
  Landmark,
  Compass,
};
