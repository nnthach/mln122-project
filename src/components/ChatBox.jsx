import { Send, Star, X } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import "./ChatBox.css";

function ChatBox({ setIsChatOpen }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là trợ lý AI về chủ nghĩa Mác - Lênin. Tôi có thể giúp bạn tìm hiểu về Chương 4: Cạnh tranh và độc quyền trong nền kinh tế thị trường nhé!",
    },
  ]);
  const messagesEndRef = useRef(null);
  const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `Bạn là chuyên gia về chủ nghĩa Mác - Lênin. 
                          Chỉ trả lời các câu hỏi liên quan đến "Chương 4: Cạnh tranh và độc quyền trong nền kinh tế thị trường", bao gồm:
                            4.1. Cạnh tranh ở cấp độ độc quyền trong nền kinh tế thị trường
                            4.2. Lý luận của V. I. Lênin về đặc điểm kinh tế của độc quyền và độc quyền nhà nước trong nền kinh tế thị trường tư bản chủ nghĩa

                          Nếu người dùng hỏi ngoài phạm vi này, hãy trả lời: "Xin lỗi, vui lòng hỏi đúng trọng tâm của Chương 4 về cạnh tranh và độc quyền, tôi chỉ trả lời trong phạm vi này."

                          Câu hỏi: ${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      console.log("ai res", response);

      const data = await response.json();

      console.log("ai data", data);

      const assistantMessage = {
        role: "assistant",
        content:
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Không có phản hồi",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Xin lỗi, đã có lỗi xảy ra khi kết nối với Gemini AI.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbox">
      {/* Chat Header */}
      <div className="chat-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Star size={24} color="#fbbf24" fill="#fbbf24" />
          <span style={{ fontWeight: "bold" }}>AI Trợ Lý Mác - Lênin</span>
        </div>
        <button
          onClick={() => setIsChatOpen(false)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "4px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#7f1d1d")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="message-content">
              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Hỏi về Mác - Lênin..."
            className="chat-input"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="chat-button"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ChatBox);
