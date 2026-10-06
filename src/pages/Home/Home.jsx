import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Programs from "../../components/Programs/Programs";
import Impact from "../../components/Impact/Impact";
import GlobalFamily from "../../components/GlobalFamily/GlobalFamily";
import Gallery from "../../components/Gallery/Gallery";
import CTA from "../../components/CTA/CTA";
import Moments from "../../components/Moments/Moments";
import Press from "../../components/Press/Press";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";

export default function Home() {
  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Programs />
        <Impact />
        <Moments />
        <GlobalFamily />
        <Press />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
