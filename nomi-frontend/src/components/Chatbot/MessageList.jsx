import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({
  messages,
  guestName,
  copiedMessageIndex,
  onCopy,
  isLoading,
}) {
  if (!messages.length) {
    return (
      <div className="chat-welcome">
        <p className="chat-welcome-text">
          Ask me anything about Aman Saxena...
        </p>
      </div>
    );
  }

  return (
    <>
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
          index={index}
          copiedMessageIndex={copiedMessageIndex}
          onCopy={onCopy}
        />
      ))}

      {isLoading && <TypingIndicator />}
    </>
  );
}