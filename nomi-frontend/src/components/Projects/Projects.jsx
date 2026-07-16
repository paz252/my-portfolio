import "./Projects.css";
import MetallicText from "../utils/MetallicText";
import cipie from "../../assets/cipie.png";
import transliteration from "../../assets/transliteration.png";
import microgrid from "../../assets/nlp-microgrid.png";

const projects = [
    {
        title: "CIPIE",
        description:
            "Centre for Intellectual Property & Innovation Exchange - A MeitY Initiative Enabling Innovation, Technology Transfer & Commercialization for startups, MSMEs, MeitY R&D societies and grantee institutions.",
        highlights: [
            "Collaborated with a team to develop a robust distributed system orchestrated by Kubernetes in the e-governance domain for CIPIE portal.",
            "Developed the main Application downstream service of the portal.",
            "Integrated Kafka for asynchronously handling utility services like email and notifications.",
            "Deployed OpenTelemetry Framework to capture monitoring data from services and then visualising it through Grafana."
        ],
        image: cipie,
        link: "https://cipie.in",
        tech: ["Spring Boot", "Kubernetes", "Kafka", "OpenTelemetry", "Grafana", "Redis"],
    },
    {
        title: "Transliteration Engine for Department of Land Resources",
        description:
            "An NLP tool to perform machine transliteration across 22 scheduled Indian languages.",
        highlights: [
            "Collaborated with a team to develop a robust engine for machine Transliteration in the e-governance domain.",
            "Handled end-to-end development from backend (Spring Boot) to frontend(ReactJS), and managed deployments.",
            "Deployed OpenTelemetry Framework to capture monitoring data from services and then visualising it through Grafana.",
            "Major clients included Department of Land Resources (Government of India)& Election Commission of India.",
        ],
        image: transliteration,
        link: "https://gisttransserver.in",
        tech: ["Spring Boot", "React.js", "OpenTelemetry", "Grafana", "Prometheus", "Redis"],
    },
    {
        title: "NLP MicroGrid",
        description:
            "A platform to unify all NLP applications in one portal.",
        highlights: [
            "Designed and developed complete Kubernetes cluster to manage NLP downstream services enabling polyglot tech stack.",
            "Developed a Module Federation host that federates independent UImodules at runtime in ReactJS.",
            "Deployed OpenTelemetry Framework to capture monitoring data from services and then visualising it through Grafana.",
            "Built complete end-to-end CI/CD pipeline for the cluster improving system resilience and achieving faster release cycles."
        ],
        image: microgrid,
        link: "#",
        tech: ["Spring Boot", "Kubernetes", "MySQL", "React.js", "OpenTelemetry", "Grafana", "Redis"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="projects-title">
                        Key <MetallicText>Projects</MetallicText> Handled
                    </h1>
                </div>

                <div className="projects-stack">
                    {projects.map((project, index) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-image-col">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-image-link"
                                    title={`Visit ${project.link}`}
                                >
                                    <img className="project-image" src={project.image} alt={project.title} />
                                </a>
                            </div>

                            <div className="project-body">

                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <h6 className="project-meta">Roles & Responsibilities:</h6>

                                <ul className="project-highlights">
                                    {project.highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <div className="tech-stack">
                                    {project.tech.map((item) => (
                                        <span className="tech-pill" key={item}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}