import { motion } from "framer-motion";
import ProgramCard from "../ProgramCard/ProgramCard";
import { programIcons } from "../../data/homepage";

import socialWelfare from "../../assets/images/program-social-welfare.svg";
import education from "../../assets/images/program-education.svg";
import women from "../../assets/images/program-women.svg";
import health from "../../assets/images/program-health.svg";
import culture from "../../assets/images/program-culture.svg";
import ancestral from "../../assets/images/program-ancestral.svg";

const programs = [
  {
    icon: programIcons.ShieldCheck,
    title: "Social Welfare",
    description:
      "Creating opportunities for underprivileged communities to thrive and lead a dignified life.",
    image: socialWelfare,
  },
  {
    icon: programIcons.BookOpen,
    title: "Education and Skill",
    description:
      "Empowering youth with learning, training, and employment pathways for a better future.",
    image: education,
  },
  {
    icon: programIcons.UserCircle2,
    title: "Women Empowerment",
    description:
      "Helping women gain confidence, independence and leadership skills for a stronger society.",
    image: women,
  },
  {
    icon: programIcons.HeartPulse,
    title: "Children and Health Development",
    description: "Promoting health, nutrition, and holistic care for children and families.",
    image: health,
  },
  {
    icon: programIcons.Landmark,
    title: "Culture and Literature",
    description: "Preserving traditions, literature, arts and ensuring that heritage is celebrated and passed on.",
    image: culture,
  },
  {
    icon: programIcons.Compass,
    title: "Ancestral Connection",
    description: "Assisting Girmitiya families to rediscover and connect with their roots in India.",
    image: ancestral,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-cream-200 py-20 md:py-28">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">WHAT WE DO</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Empowering Lives, Enriching Communities
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} index={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
