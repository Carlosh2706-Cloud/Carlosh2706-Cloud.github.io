import About from "./sections/About";
import About2 from "./sections/About2";
import Contact from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2";
import Hero3 from "./sections/Hero3";
import Subscribe from "./sections/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <Hero2 />
        <About2 />
        <Hero3/>
        <About />
        {/* <Gallery/>  */}
        <Contact />
        <Subscribe />
      </main>
    </>
  );
}
