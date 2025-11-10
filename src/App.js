import{ useState } from "react";
import {  BookOpen, Users, Star, MessageCircle } from "lucide-react";
import "./App.css";
import ChatBox from "./components/ChatBox";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #7f1d1d, #991b1b, #450a0a)",
        color: "white",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          borderBottom: "2px solid #fbbf24",
        }}
      >
        <div className="container" style={{ padding: "24px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Star size={40} color="#fbbf24" fill="#fbbf24" />
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
                Chủ Nghĩa Mác - Lênin
              </h1>
              <p
                style={{
                  color: "#fcd34d",
                  fontSize: "14px",
                  margin: "4px 0 0 0",
                }}
              >
                Lý luận cách mạng của giai cấp công nhân
              </p>
            </div>
          </div>
        </div>
      </header>

      {/*banner */}
      <div className="background-main" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#fcd34d",
            }}
          >
            Khám Phá Học Thuyết Mác - Lênin
          </h2>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "32px",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Tìm hiểu về nền tảng lý luận của chủ nghĩa xã hội khoa học, từ chủ
            nghĩa duy vật biện chứng đến chủ nghĩa duy vật lịch sử
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container" style={{ padding: "48px 20px" }}>
        <div className="content-grid">
          <div className="content-card">
            <BookOpen
              size={48}
              color="#fbbf24"
              style={{ marginBottom: "16px" }}
            />
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Lý Luận Cơ Bản
            </h3>
            <p style={{ color: "#e5e7eb", lineHeight: "1.6" }}>
              Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử là nền
              tảng triết học của học thuyết Mác - Lênin, giải thích quy luật vận
              động của tự nhiên, xã hội và tư duy.
            </p>
          </div>

          <div className="content-card">
            <Users size={48} color="#fbbf24" style={{ marginBottom: "16px" }} />
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Đấu Tranh Giai Cấp
            </h3>
            <p style={{ color: "#e5e7eb", lineHeight: "1.6" }}>
              Lịch sử của mọi xã hội cho đến nay là lịch sử của đấu tranh giai
              cấp. Học thuyết về giá trị thặng dư và vai trò của giai cấp công
              nhân trong cách mạng xã hội chủ nghĩa.
            </p>
          </div>

          <div className="content-card">
            <Star size={48} color="#fbbf24" style={{ marginBottom: "16px" }} />
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Chủ Nghĩa Xã Hội
            </h3>
            <p style={{ color: "#e5e7eb", lineHeight: "1.6" }}>
              Mục tiêu xây dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa,
              nơi người lao động là chủ nhân của tư liệu sản xuất và thành quả
              lao động.
            </p>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section
        className="container"
        style={{ padding: "48px 20px", marginBottom: "80px" }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "48px",
            color: "#fcd34d",
          }}
        >
          Những Nhà Lý Luận Vĩ Đại
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              padding: "32px",
              borderRadius: "12px",
              border: "2px solid #fbbf24",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#fcd34d",
              }}
            >
              Karl Marx (1818-1883)
            </h3>
            <p style={{ color: "#e5e7eb", lineHeight: "1.7" }}>
              Nhà triết học, kinh tế học và nhà lý luận chính trị người Đức. Tác
              giả của "Tuyên ngôn của Đảng Cộng sản" và "Tư bản". Người sáng lập
              chủ nghĩa Mác và chủ nghĩa xã hội khoa học.
            </p>
          </div>

          <div
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              padding: "32px",
              borderRadius: "12px",
              border: "2px solid #fbbf24",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#fcd34d",
              }}
            >
              Vladimir Lenin (1870-1924)
            </h3>
            <p style={{ color: "#e5e7eb", lineHeight: "1.7" }}>
              Nhà cách mạng, chính trị gia người Nga. Lãnh đạo Cách mạng Tháng
              Mười Nga. Phát triển chủ nghĩa Mác trong điều kiện mới của chủ
              nghĩa đế quốc, sáng lập chủ nghĩa Mác - Lênin.
            </p>
          </div>
        </div>
      </section>

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
          background: "rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          padding: "24px",
          marginTop: "64px",
        }}
      >
        <p style={{ color: "#d1d5db" }}>
          © 2025 Trang Web Giáo Dục Mác - Lênin | Vì mục đích học tập và nghiên
          cứu
        </p>
      </footer>
    </div>
  );
}

export default App;
