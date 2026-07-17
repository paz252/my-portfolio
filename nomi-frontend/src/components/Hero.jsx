import Chatbot from "./Chatbot/Chatbot";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="col-md-12 p-4 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #07070a 0%, #0f1116 100%)",
        overflow: "hidden",
      }}
    >
      <div className="hero-chatbot-wrapper mx-auto d-flex align-items-center justify-content-center">
        <Chatbot />
      </div>
    </div>
  );
}