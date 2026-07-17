import ReactMarkdown from "react-markdown";

export default function Message({
  message,
  index,
  copiedMessageIndex,
  onCopy,
}) {
  const isAI = message.type === "ai";

  return (
    <div className="message-block mb-3">
      <div
        className={`${
          isAI ? "ai-msg" : "user-msg"
        } p-3 rounded shadow-sm message-bubble`}
      >

        <div className="markdown-content-body text-break">
          {isAI ? (
            <ReactMarkdown>{message.text}</ReactMarkdown>
          ) : (
            <p className="m-0">{message.text}</p>
          )}
        </div>
      </div>

      <div
        className={`${
          isAI ? "text-start" : "text-end"
        } message-timestamp text-muted small`}
      >
        <span>{message.timestamp}</span>

        <button
          className="copy-btn ms-2"
          onClick={() => onCopy(message.text, index)}
          title="Copy"
        >
          <i
            className={`bi ${
              copiedMessageIndex === index
                ? "bi-clipboard-check-fill"
                : "bi-copy"
            }`}
          />
        </button>
      </div>
    </div>
  );
}