import { Cta } from "./Cta";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./hero";
import Navbar from "./Navbar";
import Shorten from "./Shorten";
import Stats from "./Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <Cta />
      <Footer />
    </>
  );
}
