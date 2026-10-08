/* Our Work content. Overview, objectives and key initiatives are taken from
   the program pages on girmitiyafoundation.org; photographs are the
   foundation's own (assets/about, assets/work, assets/moments). */

import archiveGallery from "../assets/about/archive-gallery.webp";
import archiveThenNow from "../assets/about/archive-then-now.webp";
import biharStateArchives from "../assets/about/bihar-state-archives.webp";
import childrenBooks from "../assets/about/children-books.webp";
import classroomShed from "../assets/about/classroom-shed.webp";
import communityHall from "../assets/about/community-hall.webp";
import familyReunion from "../assets/about/family-reunion.webp";
import filmLaunch from "../assets/about/film-launch.webp";
import flagChildren from "../assets/about/flag-children.webp";
import jobFair from "../assets/about/job-fair.webp";
import laptopDonation from "../assets/about/laptop-donation.webp";
import mahotsav2023 from "../assets/about/mahotsav-2023.webp";
import mahotsavExhibition from "../assets/about/mahotsav-exhibition.webp";
import mahotsavHall from "../assets/about/mahotsav-hall.webp";
import mahotsavStage from "../assets/about/mahotsav-stage.webp";
import nalandaRuins from "../assets/about/nalanda-ruins.webp";
import outdoorClass from "../assets/about/outdoor-class.webp";
import remembranceDay from "../assets/about/remembrance-day.webp";
import schoolAssemblyLine from "../assets/about/school-assembly-line.webp";
import schoolThanks from "../assets/about/school-thanks.webp";
import schoolgirls from "../assets/about/schoolgirls.webp";
import stagePerformance from "../assets/about/stage-performance.webp";
import studentGifts from "../assets/about/student-gifts.webp";
import thanksRally from "../assets/about/thanks-rally.webp";
import villageChildren from "../assets/about/village-children.webp";
import villageGathering from "../assets/about/village-gathering.webp";
import villageLane from "../assets/about/village-lane.webp";
import womenEvening from "../assets/about/women-evening.webp";
import womenGathering from "../assets/about/women-gathering.webp";
import childrenLine from "../assets/work/children-line.webp";
import childrenWithBooks from "../assets/work/children-with-books.webp";
import heritageVisit from "../assets/work/heritage-visit.webp";
import studyCircle from "../assets/work/study-circle.webp";
import womenWelcome from "../assets/work/women-welcome.webp";
import yatraGroup from "../assets/work/yatra-group.webp";
import communityVisit from "../assets/moments/community-visit.webp";
import mahotsav2021Launch from "../assets/moments/mahotsav-2021-launch.webp";
import schoolAssembly from "../assets/moments/school-assembly.webp";
import sewingInstitute from "../assets/moments/sewing-institute.webp";
import classroom from "../assets/moments/classroom.webp";

export const workPages = [
  {
    slug: "social-welfare",
    label: "Social Welfare",
    href: "/work/social-welfare",
    blurb: "Dignity, inclusion and essential needs for every family",
    image: villageGathering,
  },
  {
    slug: "education-and-skill",
    label: "Education and Skill",
    href: "/work/education-and-skill",
    blurb: "Bridging the gap between learning and livelihood",
    image: schoolAssembly,
  },
  {
    slug: "women-empowerment",
    label: "Women Empowerment",
    href: "/work/women-empowerment",
    blurb: "Confidence, skills and resources to lead",
    image: womenGathering,
  },
  {
    slug: "culture-and-literature",
    label: "Culture and Literature",
    href: "/work/culture-and-literature",
    blurb: "Keeping the Girmitiya story alive",
    image: mahotsavHall,
  },
  {
    slug: "children-and-health",
    label: "Children and Health",
    href: "/work/children-and-health",
    blurb: "A healthy, safe and educated start for every child",
    image: studyCircle,
  },
];

export const work = {
  "social-welfare": {
    hero: {
      titleLines: ["Dignity for", "every"],
      accent: "family",
      lede: "Uplifting underprivileged families, promoting social inclusion and ensuring basic human dignity for all.",
      image: villageGathering,
      caption: "Village visit",
    },
    statement:
      "Girmitiya Foundation believes that true development begins with social responsibility. Our social welfare initiatives focus on uplifting underprivileged families, promoting social inclusion, and ensuring basic human dignity for all.",
    statementImage: communityHall,
    overview:
      "We work closely with rural and semi-urban communities to address poverty, hunger, sanitation, and access to essential needs. Through a combination of awareness drives, welfare programs, and livelihood assistance, we aim to create opportunities for people to stand on their own feet. Each initiative reflects our commitment to building a society where compassion, equality, and collective growth are part of everyday life.",
    objectives: [
      "To support vulnerable communities with immediate and long-term social welfare programs.",
      "To improve access to food, shelter, sanitation, and financial aid.",
      "To promote self-reliance through community development initiatives.",
      "To strengthen social awareness and responsibility among citizens.",
    ],
    initiatives: [
      { title: "Community Welfare Drives", text: "Distribution of essential items, hygiene kits, and emergency aid.", image: communityHall },
      { title: "Livelihood Development", text: "Training and small financial support for families to start self-employment.", image: womenGathering },
      { title: "Rural Improvement Projects", text: "Encouraging cleanliness, water conservation, and environmental protection.", image: villageLane },
      { title: "Social Awareness Campaigns", text: "Promoting education, equality, and inclusivity through public programs.", image: thanksRally },
    ],
    gallery: [
      { image: villageGathering, caption: "Village visit" },
      { image: communityVisit, caption: "Community visit" },
      { image: thanksRally, caption: "Awareness rally" },
      { image: villageLane, caption: "Village outreach" },
      { image: childrenLine, caption: "Community drive" },
      { image: familyReunion, caption: "With families" },
    ],
  },

  "education-and-skill": {
    hero: {
      titleLines: ["From learning", "to"],
      accent: "livelihood",
      lede: "Academic support, vocational training and mentorship for children and youth from disadvantaged backgrounds.",
      image: schoolAssembly,
      caption: "School outreach",
    },
    statement:
      "Education is not just about learning — it’s about empowerment. Girmitiya Foundation works to ensure that children and youth, especially from disadvantaged backgrounds, have access to quality education and skill-based opportunities.",
    statementImage: classroomShed,
    overview:
      "Our programs focus on bridging the gap between learning and livelihood by offering academic support, vocational training, and mentorship. We encourage lifelong learning and practical skills that help individuals secure employment and lead independent lives. Education gives power to change one’s circumstances — and through our initiatives, we’re helping individuals discover their potential.",
    objectives: [
      "To promote quality education and lifelong learning in rural and urban areas.",
      "To provide vocational and technical training that enhances employability.",
      "To support schools and students with educational materials and mentorship.",
      "To encourage digital literacy and new-age skill development.",
    ],
    initiatives: [
      { title: "Skill Training Centres", text: "Providing training in tailoring, computer education, and small business management.", image: sewingInstitute },
      { title: "School Assistance", text: "Donating learning kits, improving classroom infrastructure, and supporting teachers.", image: schoolThanks },
      { title: "Scholarships and Mentorship", text: "Assisting deserving students to pursue higher education.", image: studentGifts },
      { title: "Digital Learning Workshops", text: "Promoting computer literacy among youth and women in rural areas.", image: laptopDonation },
    ],
    gallery: [
      { image: classroomShed, caption: "Village classroom" },
      { image: laptopDonation, caption: "Digital learning" },
      { image: schoolgirls, caption: "Students and teachers" },
      { image: jobFair, caption: "Placement drive" },
      { image: classroom, caption: "Classroom session" },
      { image: schoolAssemblyLine, caption: "School outreach" },
    ],
  },

  "women-empowerment": {
    hero: {
      titleLines: ["Confidence,", "skills and"],
      accent: "independence",
      lede: "Helping women live with dignity and independence through education, financial literacy, health awareness and leadership.",
      image: womenGathering,
      caption: "Women of the village",
    },
    statement:
      "Women are the backbone of every family and community. At Girmitiya Foundation, our women empowerment programs are designed to give women the confidence, skills, and resources they need to live with dignity and independence.",
    statementImage: womenEvening,
    overview:
      "We focus on education, financial literacy, health awareness, and leadership development. By creating self-help groups and skill training opportunities, we encourage women to become financially independent and community leaders. Empowered women uplift not just themselves — they transform their families and society as a whole.",
    objectives: [
      "To promote gender equality and strengthen women’s participation in community development.",
      "To provide skill-based training and financial literacy programs.",
      "To spread awareness about women’s health, safety, and legal rights.",
      "To create support systems that encourage women to lead independent lives.",
    ],
    initiatives: [
      { title: "Self-Help Groups", text: "Supporting women to start savings groups and micro-enterprises.", image: womenEvening },
      { title: "Vocational Training", text: "Teaching tailoring, handicraft, and small business management.", image: sewingInstitute },
      { title: "Health & Wellness Programs", text: "Conducting awareness sessions on nutrition, hygiene, and maternal care.", image: womenWelcome },
      { title: "Leadership Development", text: "Encouraging women to take active roles in local governance and social projects.", image: womenGathering },
    ],
    gallery: [
      { image: sewingInstitute, caption: "Sewing training institute" },
      { image: womenEvening, caption: "Evening meeting" },
      { image: womenWelcome, caption: "Village welcome" },
      { image: yatraGroup, caption: "Girmitiya Yatra" },
      { image: heritageVisit, caption: "Heritage visit" },
    ],
  },

  "culture-and-literature": {
    hero: {
      titleLines: ["Keeping the", "Girmitiya story"],
      accent: "alive",
      lede: "Documentation, research, art and events that celebrate the Girmitiyas and connect the diaspora with its roots.",
      image: mahotsavHall,
      caption: "Girmitiya Mahotsav",
    },
    statement:
      "The story of the Girmitiya community is one of courage, endurance, and identity — and Girmitiya Foundation works tirelessly to keep that story alive.",
    statementImage: archiveThenNow,
    overview:
      "Our cultural and literary initiatives focus on preserving the heritage of the Girmitiyas, who once left India as indentured laborers and built new lives across the world. Through documentation, research, art, and events, we celebrate their contributions and connect the diaspora with their ancestral roots. We believe that culture is not just about remembering the past — it’s about carrying forward its values into the future.",
    objectives: [
      "To preserve and promote the cultural identity of the Girmitiya community.",
      "To encourage artistic, literary, and academic collaborations focused on Girmitiya heritage.",
      "To organize cultural programs that celebrate Indian traditions globally.",
      "To strengthen the bond between India and the Indian diaspora through cultural exchange.",
    ],
    initiatives: [
      { title: "Cultural Documentation", text: "Recording oral histories, folk music, and ancestral stories.", image: archiveGallery },
      { title: "Heritage Festivals", text: "Organizing cultural events, exhibitions, and performances.", image: mahotsav2023 },
      { title: "Publications & Research", text: "Supporting writers and historians in preserving Girmitiya literature.", image: biharStateArchives },
      { title: "Youth Engagement Programs", text: "Involving students in cultural storytelling and awareness drives.", image: stagePerformance },
    ],
    gallery: [
      { image: mahotsavStage, caption: "Girmitiya Mahotsav" },
      { image: mahotsav2021Launch, caption: "Mahotsav 2021 launch" },
      { image: mahotsavExhibition, caption: "Exhibition" },
      { image: filmLaunch, caption: "Film launch, Girmitiya" },
      { image: remembranceDay, caption: "Girmit Remembrance Day" },
      { image: nalandaRuins, caption: "Nalanda" },
    ],
  },

  "children-and-health": {
    hero: {
      titleLines: ["A healthy start", "for every"],
      accent: "child",
      lede: "Preventive healthcare, nutrition and accessible education for children and families in need.",
      image: studyCircle,
      caption: "Children's study circle",
    },
    statement:
      "Healthy children are the foundation of a healthy society. Girmitiya Foundation works to improve the health, nutrition, and overall development of children and families in need.",
    statementImage: childrenWithBooks,
    overview:
      "We focus on preventive healthcare, nutritional awareness, and accessible education. Our goal is to ensure that every child — regardless of background — has the right to grow up healthy, safe, and educated. By conducting medical camps, hygiene workshops, and child development activities, we create healthier communities and a stronger tomorrow.",
    objectives: [
      "To improve the overall health and nutrition of children and families.",
      "To provide access to healthcare services in rural and underprivileged areas.",
      "To create awareness about hygiene, sanitation, and preventive healthcare.",
      "To promote holistic child development through education and emotional support.",
    ],
    initiatives: [
      { title: "Health Camps", text: "Conducting free check-ups, vaccination drives, and medical consultations.", image: villageChildren },
      { title: "Nutrition Programs", text: "Providing balanced meals and health supplements for children and mothers.", image: childrenLine },
      { title: "Child Education Support", text: "Helping schools with learning materials, play kits, and basic facilities.", image: childrenBooks },
      { title: "Hygiene Awareness", text: "Educating families about clean water, sanitation, and health practices.", image: childrenWithBooks },
    ],
    gallery: [
      { image: childrenBooks, caption: "Books for every child" },
      { image: outdoorClass, caption: "Learning outdoors" },
      { image: flagChildren, caption: "Independence Day" },
      { image: villageChildren, caption: "Village children" },
      { image: studyCircle, caption: "Study circle" },
      { image: schoolThanks, caption: "A thank-you from students" },
    ],
  },
};
