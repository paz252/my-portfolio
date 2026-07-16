import Chatbot from "./Chatbot/Chatbot";

export default function Hero({ guestName }) {
  return (
    <div className="col-md-12 p-4 d-flex align-items-center justify-content-center" style={
      {
        background: "linear-gradient(135deg, #07070a 0%, #0f1116 100%)",
        overflow: 'hidden'
      }
    }>
      <div className="mx-auto d-flex align-items-center justify-content-center" style={
        {
          width: '60%',
        }
      }>
        <Chatbot guestName={guestName} />
      </div>
    </div>
  );
}