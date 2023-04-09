import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MobileSocials from "./components/MobileSocials";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
  Aos.init()
  Aos.refresh
}, [])

  return (
    <>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <MobileSocials />
    </>
  );
}

export default App;
