import { useState } from "react";
import { BookOpen, Users, Star, MessageCircle } from "lucide-react";
import "./App.css";
import ChatBox from "./components/ChatBox";
import DocQuyenComponent from "./components/DocQuyen/DocQuyen";
import DocQuyenNhaNuocComponent from "./components/DocQuyenNhaNuoc/DocQuyenNhaNuoc";
import CompareDocQuyen from "./components/CompareDocQuyen/CompareDocQuyen";
import TacDongDocQuyen from "./components/TacDongDocQuyen/TacDongDocQuyen";
import QuanHeCanhTranh from "./components/QuanHeCanhTranh/QuanHeCanhTranh";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F6EF",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/*banner */}
      <div className="background-main" />

      {/*doc quyen */}
      <DocQuyenComponent />

      {/*doc quyen nha nuoc */}
      <DocQuyenNhaNuocComponent />
      
      <TacDongDocQuyen />

      <CompareDocQuyen />

      <QuanHeCanhTranh />

      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <button onClick={() => setIsChatOpen(true)} className="chat-toggle">
          <MessageCircle size={24} />
          <span
            style={{ display: window.innerWidth > 640 ? "inline" : "none" }}
          >
            Chat với AI
          </span>
        </button>
      )}

      {/* Chatbox */}
      {isChatOpen && <ChatBox setIsChatOpen={setIsChatOpen} />}

      {/* Footer */}
      <footer
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.95))",
          textAlign: "center",
          padding: "40px 24px",
          borderTop: "2px solid rgba(220, 38, 38, 0.3)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                color: "#fbbf24",
                fontSize: "18px",
                fontWeight: "700",
                margin: "0 0 8px 0",
              }}
            >
              📚 Trang Web Giáo Dục Mác - Lênin
            </h3>
            <p
              style={{
                color: "#e5e7eb",
                fontSize: "14px",
                margin: "0",
                lineHeight: "1.6",
              }}
            >
              Nền tảng học tập và nghiên cứu về chủ nghĩa Mác - Lênin
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "16px",
              marginTop: "16px",
            }}
          >
            <p style={{ color: "#9ca3af", fontSize: "13px", margin: "0" }}>
              © 2025 Trang Web Giáo Dục Mác - Lênin | Vì mục đích học tập và
              nghiên cứu
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
