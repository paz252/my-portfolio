export default function ActionButtons({ onClear }) {
  return (
    <div className="action-buttons mt-2 mb-2 d-flex gap-2">
      <button
        className="btn btn-sm btn-outline-secondary rounded-1 d-flex align-items-center gap-1"
        onClick={onClear}
      >
        <i className="bi bi-trash"></i>
        Clear Chat
      </button>
    </div>
  );
}