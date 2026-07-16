export default function ChatInput({
  inputValue,
  setInputValue,
  isLoading,
  isListening,
  onToggleVoice,
  onSubmit,
}) {
  return (
    <div className="chat-input-wrapper">
      <form
        className="input-group input-group-lg"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="form-control border bg-light px-4 py-2 border-start-0"
          placeholder={
            isListening
              ? "Listening to voice input..."
              : "Ask anything about Aman..."
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading || isListening}
        />

        <button
          type="button"
          className={`btn px-3 border border-end-0 bg-light ${
            isListening
              ? "voice-active-pulse text-danger"
              : "text-secondary"
          }`}
          onClick={onToggleVoice}
          disabled={isLoading}
          title={
            isListening
              ? "Listening..."
              : "Use voice input"
          }
        >
          <i
            className={`bi ${
              isListening
                ? "bi-mic-fill animate-flash"
                : "bi-mic"
            }`}
          />
        </button>

        <button
          className="btn btn-primary px-4"
          disabled={
            isLoading ||
            isListening ||
            !inputValue.trim()
          }
        >
          <i className="bi bi-send-fill text-white" />
        </button>
      </form>
    </div>
  );
}