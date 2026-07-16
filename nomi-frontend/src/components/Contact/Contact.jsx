import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MetallicText from "../utils/MetallicText";
import "./Contact.css";

const contactItems = [
    {
        label: "Email",
        value: "saxenaaman555@gmail.com",
        href: "mailto:saxenaaman555@gmail.com",
        icon: Mail,
        iconColor: "#a5b4fc",
    },
    {
        label: "Phone",
        value: "+91 9582780605",
        href: "tel:+919582780605",
        icon: Phone,
        iconColor: "#a5b4fc",
    },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/paz252",
        icon: FaGithub,
        iconColor: "#FFFFFF",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/amansaxena581",
        icon: FaLinkedin,
        iconColor: "#0A66C2",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="contact-section py-5 px-3">
            <div className="container py-4">
                <div className="text-center mb-4">
                    <h1 className="contact-title display-6 fw-bold mb-5">
                        Let’s <MetallicText speed={6}>Connect</MetallicText>
                    </h1>
                </div>

                <div className="row g-3 justify-content-center">
                    {contactItems.map(({ label, value, href, icon: Icon, iconColor }) => (
                        <div className="col-lg-5 col-md-6" key={label}>
                            <a href={href} className="contact-card">
                                <div className="contact-icon-wrap" style={{ color: iconColor }}>
                                    <Icon size={18} />
                                </div>
                                <div>
                                    <div className="contact-label">{label}</div>
                                    <div className="contact-value">{value}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center gap-3 mt-4">
                    {socialLinks.map(({ label, href, icon: Icon, iconColor }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="contact-social-link"
                            style={{ color: iconColor }}
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}