import Chatbot from "./Chatbot/Chatbot";

export default function ContentArea() {
    return (
        <div className="col-md-12 p-4 d-flex align-items-center justify-content-center" style={
            { 
                height: 'calc(100vh - 12vh)',
                backgroundColor: '#171717',
                overflow: 'hidden' }
            }>
            <div className="w-75 mx-auto d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                <Chatbot />
            </div>
        </div>
    );
}