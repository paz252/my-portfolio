export default function TypingIndicator() {
  return (
    <div className="ai-msg p-3 mb-3 rounded shadow-sm d-inline-block">
      <div className="text-uppercase tracking-wider font-monospace text-muted small mb-2 opacity-75">
        Retrieving relevant chunks...
      </div>

      <span className="typing-indicator">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}