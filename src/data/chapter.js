/* Girmitiya Chapter content. Text is taken from the Girmitiya Chapter,
   Girmitiya Yatra and Reconnect to your Roots pages on
   girmitiyafoundation.org; photographs are the foundation's own. */

import archiveThenNow from "../assets/about/archive-then-now.webp";
import archiveGallery from "../assets/about/archive-gallery.webp";
import ancestralLandWelcome from "../assets/about/ancestral-land-welcome.webp";
import ashokaPillar from "../assets/about/ashoka-pillar.webp";
import biharStateArchives from "../assets/about/bihar-state-archives.webp";
import familyReunion from "../assets/about/family-reunion.webp";
import heritageCourtyard from "../assets/about/heritage-courtyard.webp";
import indiaGate from "../assets/about/india-gate.webp";
import kolkataHeritage from "../assets/about/kolkata-heritage.webp";
import nalandaRuins from "../assets/about/nalanda-ruins.webp";
import peaceStupa from "../assets/about/peace-stupa.webp";
import villageElders from "../assets/about/village-elders.webp";
import villageLane from "../assets/about/village-lane.webp";
import welcomeRitual from "../assets/about/welcome-ritual.webp";
import yatraMarket from "../assets/about/yatra-market.webp";
import yatraStreet from "../assets/about/yatra-street.webp";
import yatraTeam from "../assets/about/yatra-team.webp";
import kolkataPlaque from "../assets/chapter/kolkata-memorial-plaque.webp";
import pressAncestralVillage from "../assets/chapter/press-ancestral-village.webp";
import pressReunion from "../assets/chapter/press-reunion.webp";
import pressSoil from "../assets/chapter/press-soil.webp";
import pressWelcome from "../assets/chapter/press-welcome.webp";

export const chapterPages = [
  {
    slug: "story",
    label: "The Girmitiya Story",
    href: "/girmitiya-chapter",
    blurb: "From indenture to identity",
    image: archiveThenNow,
  },
  {
    slug: "girmitiya-yatra",
    label: "Girmitiya Yatra",
    href: "/girmitiya-chapter/girmitiya-yatra",
    blurb: "A non-commercial pilgrimage to the homeland",
    image: yatraTeam,
  },
  {
    slug: "reconnect-to-your-roots",
    label: "Reconnect to your Roots",
    href: "/girmitiya-chapter/reconnect-to-your-roots",
    blurb: "Finding ancestral villages and families",
    image: ancestralLandWelcome,
  },
];

export const colonies = [
  "Mauritius",
  "Fiji",
  "South Africa",
  "Suriname",
  "Trinidad & Tobago",
  "Guyana",
  "Jamaica",
  "Seychelles",
  "Réunion",
];

export const chapter = {
  story: {
    hero: {
      titleLines: ["Honoring the", "legacy of our"],
      accent: "ancestors",
      lede: "From indenture to identity, the Girmitiya journey stands as a testament to strength, faith, and the enduring spirit of Indian heritage.",
      image: archiveThenNow,
      caption: "Girmitiya families, then and now",
    },
    statement:
      "The term Girmitiya comes from the word “agreement”, the indenture contracts signed by Indian laborers who were taken to work on plantations under the British Empire.",
    statementImage: kolkataPlaque,
    statementCaption: "“From here they set forth” — memorial at Kolkata",
    facts: [
      { value: "1834–1917", label: "Years of indenture" },
      { value: "1.5M+", label: "Indians who left their homeland" },
      { value: String(colonies.length), label: "Colonies across the world" },
    ],
    origins: "Uttar Pradesh, Bihar, Jharkhand, Chhattisgarh and South India",
    body: [
      "After the abolition of slavery, the British began recruiting Indians as indentured laborers to meet the demand for cheap labor in the colonies. Many faced hardship, separation and exploitation during and after the long sea voyages.",
      "Despite these struggles, the Girmitiyas carried with them the spirit, traditions and values of India. Over generations they preserved their language, culture, music and religion, transforming pain into pride and struggle into strength.",
      "Today their descendants honor that legacy by celebrating Indian festivals, speaking native dialects and reconnecting with their roots.",
    ],
    gallery: [
      { image: kolkataPlaque, caption: "Memorial, Kolkata" },
      { image: ashokaPillar, caption: "Memorial, Kolkata" },
      { image: kolkataHeritage, caption: "Kolkata" },
      { image: biharStateArchives, caption: "Bihar State Archives" },
      { image: archiveGallery, caption: "In the archives" },
      { image: familyReunion, caption: "Families reunited" },
    ],
  },

  "girmitiya-yatra": {
    hero: {
      titleLines: ["A pilgrimage", "back to the"],
      accent: "homeland",
      lede: "A non-commercial journey to honor the struggles, sacrifices and resilience of our ancestors.",
      image: yatraTeam,
      caption: "Girmitiya Yatra",
    },
    statement:
      "This Yatra is not just travel. It is a spiritual and cultural pilgrimage that connects us with our roots, history and heritage.",
    statementImage: nalandaRuins,
    statementCaption: "Nalanda",
    intro:
      "Participants experience historical sites, cultural traditions and the stories that shaped the lives of the Girmitiyas. By joining, we preserve history, strengthen cultural identity and pass the legacy on to future generations.",
    focus: [
      { title: "Ancestral Connection", text: "Visiting ancestral villages, tracing family roots and meeting local communities.", image: villageLane },
      { title: "Cultural Preservation", text: "Experiencing traditional ceremonies, festivals, bhajans and rituals.", image: welcomeRitual },
      { title: "Historical Awareness", text: "Learning about the journey of indentured laborers and visiting ports and archives.", image: biharStateArchives },
      { title: "Spiritual Pilgrimage", text: "Performing hawans, prayers and practices that strengthen inner belonging.", image: peaceStupa },
      { title: "Community Bonding", text: "Building ties between Girmitiya descendants and people in India.", image: heritageCourtyard },
      { title: "Education & Identity", text: "Helping the younger generation understand their ancestry, history and cultural pride.", image: archiveGallery },
      { title: "Non-Commercial Purpose", text: "Keeping the journey about heritage, identity and belonging — not tourism.", image: yatraStreet },
    ],
    gallery: [
      { image: indiaGate, caption: "India Gate, New Delhi" },
      { image: nalandaRuins, caption: "Nalanda" },
      { image: peaceStupa, caption: "Peace Stupa" },
      { image: biharStateArchives, caption: "Bihar State Archives" },
      { image: welcomeRitual, caption: "A village welcome" },
      { image: yatraMarket, caption: "On the road" },
      { image: kolkataPlaque, caption: "Memorial, Kolkata" },
    ],
  },

  "reconnect-to-your-roots": {
    hero: {
      titleLines: ["Bringing families", "back to their"],
      accent: "roots",
      lede: "One of the foundation’s major projects: connecting today’s Girmitiya descendants with India, their ancestral homeland.",
      image: ancestralLandWelcome,
      caption: "Welcome to your ancestral land",
    },
    statement:
      "Even after more than 150 years, Girmitiya descendants feel a deep bond with India — its traditions, festivals and values.",
    statementImage: familyReunion,
    statementCaption: "A family reunited in their ancestral village",
    intro:
      "Most Girmitiyas came from Uttar Pradesh, Bihar and South India. The foundation helps their families rediscover ancestral villages and cultural heritage, so they can better understand their identity and legacy.",
    aims: [
      "Reconnect families with their ancestral land and heritage",
      "Strengthen ties between Girmitiya descendants and Indian culture",
      "Give future generations the chance to visit India and experience their legacy",
      "Build bridges between communities separated by history",
    ],
    press: [
      { image: pressAncestralVillage, caption: "Back to the ancestors’ village" },
      { image: pressReunion, caption: "Family reunion in the press" },
      { image: pressSoil, caption: "The scent of ancestral soil" },
      { image: pressWelcome, caption: "Welcomed home" },
    ],
    gallery: [
      { image: ancestralLandWelcome, caption: "Welcome to your ancestral land" },
      { image: familyReunion, caption: "Family reunion" },
      { image: villageElders, caption: "With village elders" },
      { image: villageLane, caption: "The ancestral village" },
      { image: welcomeRitual, caption: "A traditional welcome" },
    ],
  },
};
