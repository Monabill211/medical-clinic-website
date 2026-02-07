import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import Serves from "./serves";
import About from "./about";
import Page from "./Booking";
import Certificates from "./Certificates";
import AQ from "./A&Q";
import Contact from "./contact";
import Reviews from "./Reviews";
import Footer from "./footer";
import Thankyou from "./thank-you";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero />
      <Serves />
      <About />
      <Page />
      <AQ/>
      <Certificates />
      <Reviews />
      <Contact /> */}
      <Thankyou />
      
      <Footer />

    </div>
  );
}
