/* About Us content. Copy is taken from girmitiyafoundation.org/about-us/;
   photographs are the foundation's own, from the site's photo, yatra and
   roots pages (optimised to WebP in assets/about). */

import ancestralLandWelcome from "../assets/about/ancestral-land-welcome.webp";
import archiveGallery from "../assets/about/archive-gallery.webp";
import archiveThenNow from "../assets/about/archive-then-now.webp";
import ashokaPillar from "../assets/about/ashoka-pillar.webp";
import biharStateArchives from "../assets/about/bihar-state-archives.webp";
import childrenBooks from "../assets/about/children-books.webp";
import classroomShed from "../assets/about/classroom-shed.webp";
import communityHall from "../assets/about/community-hall.webp";
import conferenceHall from "../assets/about/conference-hall.webp";
import dignitaries from "../assets/about/dignitaries.webp";
import elderHandshake from "../assets/about/elder-handshake.webp";
import familyReunion from "../assets/about/family-reunion.webp";
import fijiHcTeam from "../assets/about/fiji-hc-team.webp";
import fijiHighCommission from "../assets/about/fiji-high-commission.webp";
import filmLaunch from "../assets/about/film-launch.webp";
import flagChildren from "../assets/about/flag-children.webp";
import heritageCourtyard from "../assets/about/heritage-courtyard.webp";
import indiaGate from "../assets/about/india-gate.webp";
import jobFair from "../assets/about/job-fair.webp";
import kolkataHeritage from "../assets/about/kolkata-heritage.webp";
import laptopDonation from "../assets/about/laptop-donation.webp";
import mahotsav2023 from "../assets/about/mahotsav-2023.webp";
import mahotsavExhibition from "../assets/about/mahotsav-exhibition.webp";
import mahotsavHall from "../assets/about/mahotsav-hall.webp";
import mahotsavStage from "../assets/about/mahotsav-stage.webp";
import nalandaRuins from "../assets/about/nalanda-ruins.webp";
import outdoorClass from "../assets/about/outdoor-class.webp";
import outdoorLearning from "../assets/about/outdoor-learning.webp";
import peaceStupa from "../assets/about/peace-stupa.webp";
import recognition from "../assets/about/recognition.webp";
import remembranceDay from "../assets/about/remembrance-day.webp";
import schoolAssemblyLine from "../assets/about/school-assembly-line.webp";
import schoolThanks from "../assets/about/school-thanks.webp";
import schoolgirls from "../assets/about/schoolgirls.webp";
import stagePerformance from "../assets/about/stage-performance.webp";
import studentGifts from "../assets/about/student-gifts.webp";
import thanksRally from "../assets/about/thanks-rally.webp";
import villageChildren from "../assets/about/village-children.webp";
import villageElders from "../assets/about/village-elders.webp";
import villageGathering from "../assets/about/village-gathering.webp";
import villageLane from "../assets/about/village-lane.webp";
import welcomeRitual from "../assets/about/welcome-ritual.webp";
import womenEvening from "../assets/about/women-evening.webp";
import womenGathering from "../assets/about/women-gathering.webp";
import yatraMarket from "../assets/about/yatra-market.webp";
import yatraStreet from "../assets/about/yatra-street.webp";
import yatraTeam from "../assets/about/yatra-team.webp";

export const aboutPages = [
  {
    slug: "vision",
    label: "Our Vision",
    href: "/about/vision",
    blurb: "A future where every community thrives",
    image: ancestralLandWelcome,
  },
  {
    slug: "mission",
    label: "Our Mission",
    href: "/about/mission",
    blurb: "Empowering lives through education and skills",
    image: outdoorLearning,
  },
  {
    slug: "team",
    label: "Our Team",
    href: "/about/team",
    blurb: "The people behind our purpose",
    image: fijiHighCommission,
  },
  {
    slug: "values",
    label: "Our Values",
    href: "/about/values",
    blurb: "Integrity, inclusivity and impact",
    image: thanksRally,
  },
];

/* ---- Our Vision ------------------------------------------------------ */

export const vision = {
  hero: {
    titleLines: ["A future where", "every community"],
    accent: "thrives",
    lede: "Quality education and healthcare, a rural India that works in harmony with nature, and a diaspora that stays connected to its ancestral homeland.",
    image: ancestralLandWelcome,
    caption: "Welcome to your ancestral land, Bihar",
  },
  statement:
    "Establish quality educational and healthcare institutions. Make rural India employment-oriented, in harmony with nature. Build a society rooted in cultural values and sustainable thinking.",
  statementImage: villageElders,
  commitments: [
    {
      title: "Institutions that last",
      text: "Establish quality educational and healthcare institutions, so that learning and care reach the communities that need them most.",
      image: laptopDonation,
      caption: "Digital learning for students",
    },
    {
      title: "Rural India, employment-oriented",
      text: "Make rural India employment-oriented, in harmony with nature, opening livelihoods without leaving the land behind.",
      image: jobFair,
      caption: "Placement drive with industry partners",
    },
    {
      title: "Rooted in culture",
      text: "Build a society rooted in cultural values and sustainable thinking, where heritage is celebrated rather than forgotten.",
      image: mahotsavStage,
      caption: "Girmitiya Mahotsav, New Delhi",
    },
  ],
  bridge: {
    quote: "The Indian Diaspora acts as a living bridge, linking India with the global community.",
    text: "An integral part of this vision is the Indian Diaspora, who must be connected with India in greater numbers.",
    images: [archiveThenNow, biharStateArchives, kolkataHeritage],
  },
  pillars: [
    { title: "Care", text: "Ensure their well-being and security.", image: womenGathering },
    { title: "Connect", text: "Reconnect them with India.", image: elderHandshake },
    { title: "Celebrate", text: "Honor their cultural heritage.", image: mahotsav2023 },
    { title: "Contribute", text: "Encourage giving back to their ancestral homeland.", image: schoolThanks },
  ],
  trail: [
    { image: nalandaRuins, caption: "Nalanda" },
    { image: peaceStupa, caption: "Heritage trail" },
    { image: biharStateArchives, caption: "Bihar State Archives" },
    { image: ashokaPillar, caption: "Ashoka pillar" },
    { image: kolkataHeritage, caption: "Kolkata" },
    { image: archiveGallery, caption: "Archive gallery" },
    { image: indiaGate, caption: "New Delhi" },
    { image: yatraStreet, caption: "Girmitiya Yatra" },
  ],
};

/* ---- Our Mission ----------------------------------------------------- */

export const mission = {
  hero: {
    titleLines: ["Empowering lives", "through education"],
    accent: "and skills",
    lede: "Educating society, promoting skill-based employment, and reconnecting families with their roots after four to six generations.",
    image: outdoorLearning,
    caption: "Open-air learning session",
  },
  statement:
    "Our mission is to educate society, promote skill-based employment, and support social, cultural, women, and child development, while also reconnecting people with their ancestral roots after four to six generations.",
  statementImage: classroomShed,
  focus: [
    { title: "Educate society", text: "Learning that reaches village classrooms and courtyards.", image: childrenBooks },
    { title: "Skill-based employment", text: "Training and placement that open real livelihoods.", image: jobFair },
    { title: "Women development", text: "Standing with women as they lead their families and villages.", image: womenEvening },
    { title: "Child development", text: "Books, health and a fair start for every child.", image: villageChildren },
    { title: "Social & cultural life", text: "Festivals, film and literature that keep heritage alive.", image: mahotsavHall },
    { title: "Reconnecting roots", text: "Bringing families home after four to six generations.", image: familyReunion },
  ],
  field: [
    { image: classroomShed, caption: "Village classroom" },
    { image: schoolAssemblyLine, caption: "School outreach" },
    { image: flagChildren, caption: "Independence Day" },
    { image: outdoorClass, caption: "Learning outdoors" },
    { image: schoolgirls, caption: "Students and teachers" },
    { image: studentGifts, caption: "Support for students" },
  ],
};

/* ---- Our Team -------------------------------------------------------- */

export const team = {
  hero: {
    titleLines: ["The people", "behind our"],
    accent: "purpose",
    lede: "A passionate team inspired by the strength and resilience of our ancestors.",
    image: fijiHighCommission,
    caption: "With the High Commission of Fiji",
  },
  statement:
    "Behind the Girmitiya Foundation stands a passionate team inspired by the strength and resilience of our ancestors. Each member is committed to preserving their legacy through social impact, cultural awareness, and community empowerment.",
  statementImage: yatraTeam,
  closing: "Together, we work to build a stronger, more connected future rooted in history and unity.",
  bases: [
    { place: "New Delhi", country: "India", note: "Head office, Mayur Vihar Phase-I" },
    { place: "Switzerland", country: "Europe", note: "Diaspora outreach" },
  ],
  /* Add real team members here ({ name, role, image }). The live site's team
     page still carries theme placeholder profiles, so none are listed yet;
     the grid only renders once this has entries. */
  members: [],
  moments: [
    { image: yatraTeam, caption: "Girmitiya Yatra" },
    { image: fijiHcTeam, caption: "High Commission of Fiji" },
    { image: filmLaunch, caption: "Film launch, Girmitiya" },
    { image: dignitaries, caption: "With dignitaries" },
    { image: stagePerformance, caption: "Cultural performance" },
    { image: recognition, caption: "Recognition" },
    { image: mahotsav2023, caption: "Girmitiya Mahotsav 2023" },
    { image: remembranceDay, caption: "Girmit Remembrance Day" },
    { image: indiaGate, caption: "Yatra, New Delhi" },
    { image: yatraMarket, caption: "Yatra, local market" },
    { image: villageGathering, caption: "Village visit" },
    { image: conferenceHall, caption: "Conference" },
  ],
};

/* ---- Our Values ------------------------------------------------------ */

export const values = {
  hero: {
    titleLines: ["Integrity,", "inclusivity"],
    accent: "and impact",
    lede: "A dedicated and honest team, committed to integrity in every action.",
    image: thanksRally,
    caption: "Thank-you rally by village children",
  },
  statement:
    "At Girmitiya Foundation, we are guided by a dedicated and honest team committed to integrity in every action. Through these values, we strive to create meaningful, lasting impact in the communities we serve, empowering lives and nurturing growth.",
  statementImage: welcomeRitual,
  list: [
    { title: "Integrity", text: "Honesty in every action we take.", image: welcomeRitual },
    { title: "Timely delivery", text: "Quality work, delivered on time, in every initiative.", image: studentGifts },
    { title: "Respect", text: "Respecting each individual's identity.", image: heritageCourtyard },
    { title: "Inclusivity", text: "Every family and community has a place.", image: communityHall },
    { title: "Collaboration", text: "Working alongside communities, partners and governments.", image: mahotsavExhibition },
    { title: "Accountability", text: "Answerable to the people we serve.", image: archiveGallery },
    { title: "Impact", text: "Meaningful, lasting change that empowers lives.", image: villageChildren },
  ],
  columns: [
    [villageLane, womenGathering, outdoorClass],
    [yatraStreet, schoolAssemblyLine, schoolgirls],
    [childrenBooks, womenEvening, thanksRally],
  ],
};
