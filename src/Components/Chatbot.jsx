import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your PlaceNix assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! This is a demo chatbot. In the full version, I'll be able to help you with placement queries, company information, and more.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-bounce"
          aria-label="Open chat"
        >
          <FaRobot className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">PlaceNix Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close chat"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                      : "bg-muted text-foreground"
                  } animate-fade-in`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-white/70" : "text-muted-foreground"
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity flex items-center justify-center"
                aria-label="Send message"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
