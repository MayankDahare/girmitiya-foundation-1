import { useEffect } from "react";
import { Mail } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import Counter from "../../components/Impact/Counter";
import {
  DriftColumns,
  Eyebrow,
  FadeUp,
  HorizontalGallery,
  HoverRevealList,
  MaskLines,
  Marquee,
  Mosaic,
  NextPage,
  PageHero,
  PageTabs,
  RevealImage,
  ScrollStatement,
  StackCards,
} from "../../components/About/AboutKit";
import { aboutPages, mission, team, values, vision } from "../../data/about";
import { impactStats } from "../../data/homepage";

/* ---- Our Vision ------------------------------------------------------ */

function VisionPage() {
  return (
    <>
      <ScrollStatement eyebrow="Our vision" text={vision.statement} image={vision.statementImage} imageCaption="Meeting village elders" />

      <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
        <div className="content-container">
          <Eyebrow>Three commitments</Eyebrow>
          <MaskLines lines={["What we are"]} accent="building" className="t-h2 mt-5 text-[#18181B]" />

          <div className="mt-14 flex flex-col gap-20 sm:gap-28">
            {vision.commitments.map((item, i) => (
              <div key={item.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <RevealImage src={item.image} alt={item.caption} caption={item.caption} className="aspect-[16/10] rounded-[24px]" />
                </div>
                <FadeUp className="lg:col-span-5">
                  <span className="mb-5 block h-px w-12 bg-[#C59B27]" />
                  <h3 className="t-h2 text-[#18181B]">{item.title}</h3>
                  <p className="t-lead mt-4 text-[#4B5563]">{item.text}</p>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The living bridge */}
      <section className="relative overflow-hidden bg-[#0A101D] py-24 text-[#FAF7F2] sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#C59B27]/10 blur-3xl" />
        <div className="content-container relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow light>The diaspora</Eyebrow>
            <MaskLines lines={["A living"]} accent="bridge" light className="t-h1 mt-5" />
            <FadeUp delay={0.15}>
              <blockquote className="mt-8 border-l-2 border-[#C59B27] pl-6 font-serif text-2xl italic leading-snug text-white/90 sm:text-3xl">
                “{vision.bridge.quote}”
              </blockquote>
              <p className="t-lead mt-6 max-w-lg text-white/70">{vision.bridge.text}</p>
            </FadeUp>
          </div>
          <div className="relative h-[460px] sm:h-[560px] lg:col-span-6">
            <RevealImage src={vision.bridge.images[0]} alt="Then and now" className="absolute left-0 top-0 h-[64%] w-[72%] rounded-[22px]" parallax={8} />
            <RevealImage src={vision.bridge.images[1]} alt="Bihar State Archives" caption="Bihar State Archives" className="absolute bottom-0 right-0 h-[46%] w-[58%] rounded-[22px] ring-8 ring-[#0A101D]" parallax={14} />
            <RevealImage src={vision.bridge.images[2]} alt="Kolkata" className="absolute bottom-[8%] left-[6%] hidden h-[30%] w-[30%] rounded-[18px] ring-8 ring-[#0A101D] sm:block" parallax={20} />
          </div>
        </div>
      </section>

      {/* 4C's */}
      <section className="bg-[#FAF7F2] pt-20 sm:pt-28">
        <div className="content-container">
          <Eyebrow>To fulfil this vision</Eyebrow>
          <MaskLines lines={["The principle of"]} accent="the 4C’s" className="t-h2 mt-5 text-[#18181B]" />
          <div className="mt-10 pb-10">
            <StackCards items={vision.pillars} kicker="The 4C’s" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F2ECE1] py-16 sm:py-20">
        <div className="content-container mb-8">
          <Eyebrow>On the heritage trail</Eyebrow>
        </div>
        <Marquee items={vision.trail} />
      </section>
    </>
  );
}

/* ---- Our Mission ----------------------------------------------------- */

function MissionPage() {
  return (
    <>
      <ScrollStatement eyebrow="Our mission" text={mission.statement} image={mission.statementImage} imageCaption="Village classroom" />

      <HorizontalGallery eyebrow="Where we focus" title="Six ways we" accent="show up" items={mission.focus} />

      <section className="bg-[#FAF7F2] py-20 sm:py-28">
        <div className="content-container">
          <div className="grid gap-y-10 border-y border-[#E7DECD] py-12 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.08} className="px-2 lg:border-l lg:border-[#E7DECD] lg:px-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="t-stat text-[clamp(3rem,2.2rem+3vw,4.75rem)] text-[#18181B]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="t-small mt-2 text-[#6B7280]">{stat.label}</p>
              </FadeUp>
            ))}
          </div>

          <div className="mt-20 sm:mt-28">
            <Eyebrow>In the field</Eyebrow>
            <MaskLines lines={["Where the work"]} accent="happens" className="t-h2 mt-5 mb-12 text-[#18181B]" />
            <Mosaic items={mission.field} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ---- Our Team -------------------------------------------------------- */

function TeamPage() {
  return (
    <>
      <ScrollStatement eyebrow="Our dedicated team" text={team.statement} image={team.statementImage} imageCaption="Girmitiya Yatra" />

      <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
        <div className="content-container grid gap-5 md:grid-cols-2">
          {team.bases.map((base, i) => (
            <FadeUp key={base.place} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-[24px] border border-[#E7DECD] bg-[#FDFBF7] p-8 transition-colors duration-500 hover:border-[#C59B27] sm:p-10">
                <span className="font-mono text-[11px] tracking-[0.14em] text-[#B9873A] uppercase">{base.country}</span>
                <h3 className="t-h1 mt-3 text-[#18181B] transition-transform duration-500 group-hover:translate-x-2">{base.place}</h3>
                <p className="t-body mt-3 text-[#6B7280]">{base.note}</p>
                <span className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#C59B27]/10 transition-transform duration-700 group-hover:scale-150" />
              </div>
            </FadeUp>
          ))}
        </div>

        {team.members.length > 0 && (
          <div className="content-container mt-24">
            <Eyebrow>Meet the team</Eyebrow>
            <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {team.members.map((member) => (
                <div key={member.name}>
                  <RevealImage src={member.image} alt={member.name} className="aspect-[3/4] rounded-[20px]" parallax={5} />
                  <h3 className="t-h3 mt-4 text-[#18181B]">{member.name}</h3>
                  <p className="t-small text-[#6B7280]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="bg-[#F2ECE1] py-20 sm:py-28">
        <div className="content-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The team at work</Eyebrow>
              <MaskLines lines={["Moments we"]} accent="share" className="t-h2 mt-5 text-[#18181B]" />
            </div>
            <p className="t-lead max-w-md text-[#4B5563]">{team.closing}</p>
          </div>
          <Mosaic items={team.moments} />
        </div>
      </section>

      <section className="bg-[#0A101D] py-20 text-[#FAF7F2] sm:py-28">
        <div className="content-container grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow light>Join us</Eyebrow>
            <MaskLines lines={["Carry the legacy"]} accent="forward" light className="t-h1 mt-5" />
          </div>
          <FadeUp className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <a href="mailto:girmitiya.foundation2023@gmail.com" className="btn-gold justify-center">
              Volunteer with us <Mail className="h-4 w-4" />
            </a>
            <a href="/#contact" className="btn-outline justify-center">Contact us</a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

/* ---- Our Values ------------------------------------------------------ */

function ValuesPage() {
  return (
    <>
      <ScrollStatement eyebrow="Our values" text={values.statement} image={values.statementImage} imageCaption="A traditional welcome" />

      <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
        <div className="content-container">
          <Eyebrow>What guides us</Eyebrow>
          <MaskLines lines={["Seven values,"]} accent="one promise" className="t-h2 mt-5 mb-12 text-[#18181B]" />
          <HoverRevealList items={values.list} />
        </div>
      </section>

      <section className="overflow-hidden bg-[#0A101D] py-20 text-[#FAF7F2] sm:py-28">
        <div className="content-container grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow light>Values in practice</Eyebrow>
            <MaskLines lines={["Empowering lives,"]} accent="nurturing growth" light className="t-h1 mt-5" />
            <FadeUp delay={0.15}>
              <p className="t-lead mt-6 max-w-md text-white/70">
                Respecting each individual’s identity and fostering inclusivity, collaboration, and accountability is at
                the heart of our work.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <DriftColumns columns={values.columns} />
          </div>
        </div>
      </section>
    </>
  );
}

const pages = {
  vision: { component: VisionPage, data: vision },
  mission: { component: MissionPage, data: mission },
  team: { component: TeamPage, data: team },
  values: { component: ValuesPage, data: values },
};

export default function AboutPage({ slug }) {
  const { component: Page, data } = pages[slug];
  const meta = aboutPages.find((page) => page.slug === slug);

  useEffect(() => {
    document.title = `${meta.label} | Girmitiya Foundation`;
  }, [meta.label]);

  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <PageHero hero={data.hero} />
        <PageTabs pages={aboutPages} current={slug} label="About Us" />
        <Page />
        <NextPage pages={aboutPages} current={slug} />
      </main>
      <Footer />
    </>
  );
}
