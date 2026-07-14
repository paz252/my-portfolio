import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentArea from "./components/ContentArea";
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
      <Header guestName={guestName} />

      <WelcomeModal isOpen={showWelcomeModal} onSubmit={handleNameSubmit} />

      <ContentArea guestName={guestName} />
      <Footer />
    </>
  );
}