import { useState } from "react";

function QuanHeCanhTranh() {
  const [exampleResults, setExampleResults] = useState({});
  const [loadingIndex, setLoadingIndex] = useState(null);

  const competitionLevels = [
    {
      icon: "🏪",
      number: "01",
      title: "Cạnh tranh Độc quyền vs Ngoài độc quyền",
      description:
        "Các tổ chức độc quyền sử dụng định giá độc quyền, chiếm đoạt nguồn nguyên liệu để loại bỏ doanh nghiệp nhỏ. Ngược lại, xí nghiệp ngoài độc quyền cạnh tranh bằng linh hoạt, chất lượng dịch vụ, và khai thác thị trường ngách.",
      color: "#3b82f6",
      bgLight: "#eff6ff",
      bgBorder: "#bfdbfe",
      prompt:
        "Hãy cho tôi 2-3 ví dụ cụ thể ngắn gọn về Cạnh tranh Độc quyền vs Ngoài độc quyền (ví dụ: Amazon vs cửa hàng nhỏ, Uber vs taxi truyền thống)",
    },
    {
      icon: "⚔️",
      number: "02",
      title: "Cạnh tranh Giữa các Tổ chức độc quyền",
      description:
        "Hình thức cạnh tranh gay gắt nhất giữa các tập đoàn lớn. Họ cạnh tranh qua thỏa hiệp, liên minh tạm thời, hoặc chiến tranh giá cả để giành thị trường.",
      color: "#f59e0b",
      bgLight: "#fffbeb",
      bgBorder: "#fcd34d",
      prompt:
        "Hãy cho tôi 2-3 ví dụ cụ thể ngắn gọn về Cạnh tranh Giữa các Tổ chức độc quyền (ví dụ: Samsung vs Apple, Coca-Cola vs Pepsi)",
    },
    {
      icon: "🔄",
      number: "03",
      title: "Cạnh tranh Nội bộ Tổ chức độc quyền",
      description:
        "Ngay cả trong nội bộ liên minh độc quyền (Cartel, Syndicate), các thành viên cạnh tranh để giành hạn ngạch sản xuất hoặc thị trường tiêu thụ lớn hơn, dẫn đến tan rã hoặc thay đổi cơ cấu.",
      color: "#ec4899",
      bgLight: "#fdf2f8",
      bgBorder: "#fbcfe8",
      prompt:
        "Hãy cho tôi 2-3 ví dụ cụ thể ngắn gọn về Cạnh tranh Nội bộ Tổ chức độc quyền (ví dụ: OPEC, các cartel)",
    },
  ];

  const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

  const handleFetchExample = async (index, prompt) => {
    setLoadingIndex(index);
    console.log("prompt", prompt);
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
      const result =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Không có phản hồi từ AI.";
      setExampleResults((prev) => ({ ...prev, [index]: result }));
    } catch (error) {
      console.error(error);
      setExampleResults((prev) => ({
        ...prev,
        [index]: "Xin lỗi, đã có lỗi xảy ra khi kết nối với AI.",
      }));
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <section
      style={{
        padding: "60px 24px",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#1f2937",
              margin: "0 0 12px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Quan hệ cạnh tranh trong trạng thái độc quyền
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#dc2626",
              margin: "0 auto 20px",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#4b5563",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Trong điều kiện độc quyền, cạnh tranh không hề biến mất mà tồn tại
            dưới những hình thức mới. Nó là sự đấu tranh gay gắt, phức tạp giữa
            các chủ thể khác nhau trên ba cấp độ chính.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {competitionLevels.map((level, index) => (
            <div
              key={index}
              style={{
                backgroundColor: level.bgLight,
                border: `2px solid ${level.bgBorder}`,
                borderRadius: "12px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 24px ${level.color}20`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: level.color,
                  opacity: 0.3,
                  marginBottom: "12px",
                }}
              >
                {level.number}
              </div>

              {/* Icon */}
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                {level.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: "0 0 12px 0",
                  lineHeight: "1.4",
                }}
              >
                {level.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.7",
                  color: "#475569",
                  margin: "0",
                  flex: 1,
                }}
              >
                {level.description}
              </p>

              {/* Accent line */}
              <div
                style={{
                  height: "3px",
                  backgroundColor: level.color,
                  borderRadius: "2px",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              />

              {/* Button */}
              <button
                onClick={() => handleFetchExample(index, level.prompt)}
                disabled={loadingIndex === index}
                style={{
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#ffffff",
                  backgroundColor: level.color,
                  border: "none",
                  borderRadius: "8px",
                  cursor: loadingIndex === index ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  opacity: loadingIndex === index ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (loadingIndex !== index) {
                    e.currentTarget.style.opacity = "0.9";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {loadingIndex === index ? "⏳ Đang tải..." : "📖 Ví dụ"}
              </button>

              {/* Example Result */}
              {exampleResults[index] && (
                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px",
                    backgroundColor: "#ffffff",
                    border: `1px solid ${level.bgBorder}`,
                    borderLeft: `4px solid ${level.color}`,
                    borderRadius: "8px",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "#475569",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {exampleResults[index]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            borderLeft: "4px solid green",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#1f2937",
              margin: "0 0 8px 0",
            }}
          >
            💡 Kết luận
          </h3>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#4b5563",
              margin: "0",
            }}
          >
            Ba cấp độ cạnh tranh này thể hiện tính phức tạp của nền kinh tế độc
            quyền. Dù độc quyền tập trung hoá sản xuất, nhưng cạnh tranh không
            bao giờ thực sự biến mất, mà chuyển hóa thành những hình thức mới,
            phản ánh mâu thuẫn nội tại của hệ thống.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuanHeCanhTranh;
