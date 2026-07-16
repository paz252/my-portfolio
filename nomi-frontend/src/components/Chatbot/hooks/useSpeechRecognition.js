import { useEffect, useRef, useState } from "react";

export default function useSpeechRecognition(onResult) {
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ??
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (e) =>
      onResult(e.results[0][0].transcript);

    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;
  }, [onResult]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert(
        "Voice recognition is supported only in Chromium browsers."
      );
      return;
    }

    isListening
      ? recognitionRef.current.stop()
      : recognitionRef.current.start();
  };

  return {
    isListening,
    toggleListening,
  };
}