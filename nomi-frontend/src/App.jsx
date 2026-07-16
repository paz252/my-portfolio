import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import WelcomeModal from "./components/WelcomeModal";

export default function App() {
  const [guestName, setGuestName] = useState("");
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedName = localStorage.getItem("nomiGuestName");
    if (storedName) {
      setGuestName(storedName);
      setShowWelcomeModal(false);
    }
  }, []);

  const normalizeTitleCase = (name) => {
    return name
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleNameSubmit = (name) => {
    const titleCaseName = normalizeTitleCase(name);
    setGuestName(titleCaseName);
    localStorage.setItem("nomiGuestName", titleCaseName);
    setShowWelcomeModal(false);
  };

  return (
    <>
      <WelcomeModal isOpen={showWelcomeModal} onSubmit={handleNameSubmit} />
      
      <Navbar guestName={guestName} />

      <section id="home">
        <Hero guestName={guestName} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}