import { useState } from "react";
import { Zap } from "lucide-react";

function CompareDocQuyen() {
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonResult, setComparisonResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

  const handleCompare = async (prompt) => {
    setIsComparing(true);
    setIsLoading(true);
    setComparisonResult("");
    console.log("propmt compare", prompt);

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
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      console.log("ai res", response);

      const data = await response.json();
      console.log("ai data", data);

      const result =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Không có phản hồi từ AI.";
      setComparisonResult(result);
    } catch (error) {
      console.error(error);
      setComparisonResult(
        "Xin lỗi, đã có lỗi xảy ra khi kết nối với Gemini AI."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Các prompt khác nhau
  const prompts = {
    compare: `Bạn là chuyên gia về chủ nghĩa Mác - Lênin. 
Hãy so sánh ngắn gọn nhất có thể và dễ hiểu, không kẻ bảng giữa "Độc Quyền" và "Độc Quyền Nhà Nước" theo các khía cạnh sau:
1. Định nghĩa
2. Đặc điểm chính
3. Nguyên nhân hình thành
4. Vai trò của Nhà nước
5. Ảnh hưởng đến nền kinh tế
Trình bày ngắn gọn, rõ ràng, dễ hiểu.`,
    examples: `Hãy đưa ra ví dụ thực tế, ngắn gọn nhất có thể và dễ hiểu về:
1. Độc quyền tư nhân
2. Độc quyền nhà nước
Mỗi loại khoảng 2 ví dụ, có chú thích ngắn gọn.`,
    nature: `Phân tích ngắn gọn nhất có thể và dễ hiểu về bản chất của "Chủ nghĩa tư bản độc quyền nhà nước":
- Mối quan hệ giữa tư bản độc quyền và Nhà nước
- Mục tiêu và tác động của hình thái này
- Vì sao đây là giai đoạn phát triển cao của chủ nghĩa tư bản.`,
  };

  return (
    <section
      style={{
        padding: "40px 24px",
        backgroundColor: "#F5F6EF",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Màn chào hỏi */}
        {!isComparing && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "24px",
            }}
          >
            <div style={{ fontSize: "80px", animation: "bounce 2s infinite" }}>
              🤖
            </div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "800",
                color: "#1a1a1a",
              }}
            >
              Trợ Lý AI Kinh tế chính trị Mác - Lênin
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#4b5563",
                lineHeight: "1.8",
                maxWidth: "600px",
              }}
            >
              Chọn một nội dung bạn muốn tôi phân tích:
            </p>

            {/* 3 Nút dọc */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <button
                onClick={() => handleCompare(prompts.compare)}
                disabled={isLoading}
                style={buttonStyle}
              >
                <Zap size={20} />
                So sánh Độc quyền & Độc quyền Nhà nước
              </button>

              <button
                onClick={() => handleCompare(prompts.examples)}
                disabled={isLoading}
                style={buttonStyle}
              >
                <Zap size={20} />
                Ví dụ về Độc quyền & Độc quyền Nhà nước
              </button>

              <button
                onClick={() => handleCompare(prompts.nature)}
                disabled={isLoading}
                style={buttonStyle}
              >
                <Zap size={20} />
                Bản chất của Chủ nghĩa tư bản độc quyền Nhà nước
              </button>
            </div>
          </div>
        )}

        {/* Kết quả hiển thị */}
        {isComparing && comparisonResult && (
          <div
            style={{
              backgroundColor: "#f9fafb",
              border: "2px solid #e5e7eb",
              borderRadius: "12px",
              padding: "32px",
              marginTop: "32px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "32px" }}>🤖</span>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  margin: "0",
                }}
              >
                Kết Quả Phân Tích
              </h3>
            </div>

            <div
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#374151",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {comparisonResult}
            </div>

            <button
              onClick={() => {
                setIsComparing(false);
                setComparisonResult("");
              }}
              style={{
                marginTop: "24px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#dc2626",
                backgroundColor: "#fee2e2",
                border: "2px solid #dc2626",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#dc2626";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fee2e2";
                e.currentTarget.style.color = "#dc2626";
              }}
            >
              Quay lại
            </button>
          </div>
        )}

        {/* Loading */}
        {isLoading && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div
              style={{
                display: "inline-block",
                fontSize: "48px",
                animation: "spin 1s linear infinite",
              }}
            >
              ⚙️
            </div>
            <p
              style={{
                fontSize: "18px",
                color: "#4b5563",
                marginTop: "16px",
                fontWeight: "500",
              }}
            >
              AI đang phân tích...
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

// Style chung cho các nút
const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "14px 32px",
  fontSize: "16px",
  fontWeight: "700",
  color: "#ffffff",
  backgroundColor: "#dc2626",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export default CompareDocQuyen;
