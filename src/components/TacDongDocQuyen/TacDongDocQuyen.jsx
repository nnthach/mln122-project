function TacDongDocQuyen() {
  const positive = [
    {
      icon: "✅",
      title: "Thúc đẩy R&D",
      text: "Tạo động lực và nguồn lực cho nghiên cứu, phát triển khoa học - kỹ thuật.",
    },
    {
      icon: "📈",
      title: "Tăng năng suất",
      text: "Quy mô và vốn lớn giúp tăng năng suất, nâng cao năng lực cạnh tranh.",
    },
    {
      icon: "🏗️",
      title: "Đầu tư quy mô",
      text: "Dễ đầu tư các dự án lớn, hạ tầng và công nghiệp nặng cần vốn lớn.",
    },
  ];

  const negative = [
    {
      icon: "⚠️",
      title: "Giảm cạnh tranh",
      text: "Làm hạn chế cạnh tranh tự do, có thể dẫn tới giá cả cao hơn cho người tiêu dùng.",
    },
    {
      icon: "💸",
      title: "Lợi ích tập trung",
      text: "Dễ dẫn tới tích tụ lợi ích vào tay vài nhóm, tăng phân hóa giàu nghèo.",
    },
    {
      icon: "🔒",
      title: "Kìm hãm đổi mới",
      text: "Khi thiếu cạnh tranh, động lực đổi mới và cải tiến có thể suy giảm.",
    },
  ];

  return (
    <section
      style={{
        padding: "48px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h2
            style={{
              fontSize: "28px",
              margin: 0,
              color: "#0f172a",
              fontWeight: 800,
            }}
          >
            Tác động của độc quyền trong nền kinh tế thị trường
          </h2>
          <p style={{ color: "#475569", marginTop: "8px", fontSize: "15px" }}>
            Tổng quan các ảnh hưởng tích cực và tiêu cực để hiểu rõ ưu - nhược
            điểm của độc quyền
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            alignItems: "stretch",
          }}
        >
          {/* Positive column */}
          <div
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "linear-gradient(180deg, #ecfdf5, #ffffff)",
              boxShadow: "0 8px 24px rgba(6,95,70,0.04)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "20px",
                color: "#065f46",
                fontWeight: 700,
              }}
            >
              Tác động tích cực
            </h3>
            <p style={{ color: "#065f46", marginTop: "8px", fontSize: "14px" }}>
              Những lợi ích thường thấy khi độc quyền xuất hiện.
            </p>

            <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
              {positive.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    background: "#fff",
                    padding: "12px",
                    borderRadius: "10px",
                    minHeight: "88px",
                    borderLeft: "4px solid #bbf7d0",
                  }}
                >
                  <div style={{ fontSize: "24px", lineHeight: 1 }}>
                    {c.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#064e3b" }}>
                      {c.title}
                    </div>
                    <div
                      style={{
                        color: "#065f46",
                        fontSize: "13px",
                        marginTop: "6px",
                      }}
                    >
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Negative column */}
          <div
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "linear-gradient(180deg, #fff7f7, #ffffff)",
              boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "20px",
                color: "#7f1d1d",
                fontWeight: 700,
              }}
            >
              Tác động tiêu cực
            </h3>
            <p style={{ color: "#4b2f2f", marginTop: "8px", fontSize: "14px" }}>
              Những vấn đề thường phát sinh do độc quyền không được quản lý tốt.
            </p>

            <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
              {negative.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    background: "#fff",
                    padding: "12px",
                    borderRadius: "10px",
                    minHeight: "88px",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#0f172a" }}>
                      {c.title}
                    </div>
                    <div
                      style={{
                        color: "#475569",
                        fontSize: "13px",
                        marginTop: "6px",
                      }}
                    >
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TacDongDocQuyen;
