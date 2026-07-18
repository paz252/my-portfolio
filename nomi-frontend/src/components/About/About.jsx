import { useState } from "react";
import {
  FlaskConical,
  GraduationCap,
  Trophy,
  MapPin,
} from "lucide-react";
import MetallicText from "../utils/MetallicText";
import { IoChevronDown } from "react-icons/io5";
import "./About.css";
import me from "../../assets/me.jpeg";
import resumePDF from "../../assets/amansaxena_resume.pdf";

const FACTS = [
  {
    id: "01",
    key: "education",
    icon: GraduationCap,
    label: "EDUCATION",
    desc: (
      <>
        <div className="edu-item">
          <span className="edu-degree">
            PG Diploma in Advanced Computing (2021)
          </span><br />
          <span className="edu-inst">
            Centre for Development of Advanced Computing (C-DAC), Pune
          </span><br />
          <span className="edu-agg">
            Aggregate: 83.17%
          </span>
        </div>

        <br />

        <div className="edu-item">
          <span className="edu-degree">
            B.Tech in Electrical & Electronics Engineering (2014-18)
          </span><br />
          <span className="edu-inst">
            Guru Gobind Singh Indraprastha University, Delhi
          </span><br />
          <span className="edu-agg">
            Aggregate: 74.24%
          </span>
        </div>
      </>
    ),
  },
  {
    id: "02",
    key: "achievements",
    icon: Trophy,
    label: "ACHIEVEMENTS",
    desc: "Recognised as Employee of the Month (July,2022) in my organisation",
  },
  {
    id: "03",
    key: "location",
    icon: MapPin,
    label: "CURRENT LOCATION",
    desc: "Pune, India\n18.5204° N, 73.8567° E · GMT+5:30"
  },
];

export default function About() {
  const [activeFact, setActiveFact] = useState(null);

  return (
    <section className="about-section">

      <div className="about-container">

        {/* ================= HERO ================= */}

        <div className="hero-grid">
          <div className="avatar-col">
            <div className="avatar">
              <img className="avatar-image" src={me} alt="Aman Saxena" />
            </div>

            <div className="mono role-tag">
              <MetallicText>Fullstack Developer</MetallicText>
            </div>
          </div>

          <div className="craft-col">
            <div className="card-dark h-100">
              <span className="mono section-tag">PROFESSIONAL BACKGROUND</span>
              <h3 className="display section-title">
                Building scalable apps, websites, and automations.
              </h3>
              <div className="section-text">
                <p>
                  Fullstack Developer with 4.5+ years of experience architecting and delivering scalable, high-performance web applications.
                </p>
                <p>
                  I understand what advantages modern technology can provide,
                  which helps me advise on the solutions a business actually
                  needs rather than simply writing code.
                </p>
                <p>
                  I like using my strong backend skills and modern web technologies to solve real-world problems. I'm always looking for new ways to use intelligent systems in real-life situations.
                </p>
              </div>

              <a href={resumePDF}
                download="Aman_Saxena_Resume.pdf"
                className="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center gap-2 download-resume-btn mt-4 mx-auto px-3 py-2"
              >
                <i className="bi bi-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about-bottom-row">
          {FACTS.map((fact) => {
            const Icon = fact.icon;
            const isOpen = activeFact === fact.key;

            return (

              <div
                key={fact.key}
                className="fact-card focus"
                tabIndex={0}
                onMouseEnter={() => setActiveFact(fact.key)}
                onMouseLeave={() => setActiveFact(null)}
                onFocus={() => setActiveFact(fact.key)}
                onBlur={() => setActiveFact(null)}
              >

                <div className="fact-head">

                  <Icon size={16} color="#a5b4fc" />

                  <span className="mono fact-label">
                    {fact.label}
                    &nbsp;
                    {!isOpen && (
                      <IoChevronDown className="fact-arrow fw-bold" size={15} />
                    )}
                  </span>

                </div>

                <div
                  className={`fact-long ${isOpen ? "forced-open" : ""
                    }`}
                >
                  <div className="fact-long-inner">

                    <p className="fact-description">
                      {fact.desc}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>

  );

}