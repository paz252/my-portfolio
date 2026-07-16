import { useEffect, useState } from "react";
import "./Navbar.css";
import MetallicText from "../utils/MetallicText";

export default function Navbar({ guestName }) {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
  const sections = [...document.querySelectorAll("section[id]")];

  const handleScroll = () => {
    const navOffset = 90;

    // If we're at (or very near) the bottom of the page,
    // force the last section to be active — handles short last sections
    // that never satisfy the offsetTop threshold below.
    const scrolledToBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2; // small tolerance

    if (scrolledToBottom) {
      setActiveSection(sections[sections.length - 1].id);
      return;
    }

    let current = sections[0].id;

    sections.forEach((section) => {
      if (window.scrollY + navOffset >= section.offsetTop) {
        current = section.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg py-3 ps-5 text-white fw-bold d-flex justify-content-between align-items-center" style={
      {
        background: "linear-gradient(135deg, #07070a 0%, #0f1116 100%)",
        height: '8vh'
      }
    }>

      <div className="navbar-brand mb-0 text-white">
        <MetallicText period={8}>Aman Saxena</MetallicText>
      </div>

      <div className="nav-pill-group">
        <button
          className={`btn nav-pill-btn fw-bold ${activeSection === "home" ? "active" : "text-white"}`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className={`btn nav-pill-btn fw-bold ${activeSection === "about" ? "active" : "text-white"}`}
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className={`btn nav-pill-btn fw-bold ${activeSection === "skills" ? "active" : "text-white"}`}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </button>
        <button
          className={`btn nav-pill-btn fw-bold ${activeSection === "projects" ? "active" : "text-white"}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className={`btn nav-pill-btn fw-bold ${activeSection === "contact" ? "active" : "text-white"}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>
      {guestName && (
        <div className="d-flex align-items-center gap-2 pe-5">
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              boxShadow: '0 0 8px rgba(74, 222, 128, 0.8)',
              display: 'inline-block',
            }}
          />
          <span className="small">Hi, {guestName}</span>
        </div>
      )}
    </nav>
  );
}