import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Programs from "../../components/Programs/Programs";
import Impact from "../../components/Impact/Impact";
import GlobalFamily from "../../components/GlobalFamily/GlobalFamily";
import Gallery from "../../components/Gallery/Gallery";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Programs />
        <Impact />
        <GlobalFamily />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
