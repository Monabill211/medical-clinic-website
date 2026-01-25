import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import Serves from "./serves";
import About from "./about";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Serves />
      <About />
    </div>
  );
}
