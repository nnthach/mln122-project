import { useState } from "react";

export default function CacHinhThucDocQuyen() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const forms = [
    {
      id: "cartel",
      name: "Cartel",
      icon: "🤝",
      color: "#dc2626",
      description:
        "Liên minh độc quyền về giá cả, phân chia thị trường, quy mô sản xuất. Các nhà tư bản vẫn độc lập trong sản xuất và lưu thông nhưng hợp tác về giá cả.",
      detail: "Đây là một liên minh độc quyền không bền vững.",
    },
    {
      id: "syndicate",
      name: "Syndicate",
      icon: "🏢",
      color: "#3b82f6",
      description:
        "Tổ chức độc quyền trong lĩnh vực lưu thông hàng hóa. Mọi hoạt động mua – bán được quản lý bởi một ban điều hành chung.",
      detail:
        "Mục tiêu là thống nhất đầu mối mua và bán để bán cao và mua rẻ. Phát triển mạnh ở Pháp.",
    },
    {
      id: "trust",
      name: "Trust",
      icon: "📊",
      color: "#f59e0b",
      description:
        "Hình thức độc quyền thống nhất cả sản xuất và lưu thông dưới sự kiểm soát của hội đồng quản trị.",
      detail:
        "Các nhà tư bản trở thành cổ đông và hưởng lợi nhuận theo cổ phần. Đánh dấu bước ngoặt trong quan hệ sản xuất tư bản chủ nghĩa. Quê hương: Nước Mỹ.",
    },
    {
      id: "consortium",
      name: "Consortium",
      icon: "🏦",
      color: "#8b5cf6",
      description:
        "Hình thức độc quyền đa ngành, hình thành qua hiệp nghị giữa các ngân hàng và doanh nghiệp công nghiệp.",
      detail:
        "Thực hiện những hoạt động tài chính lớn. Thường do một ngân hàng độc quyền lớn dẫn đầu. Ví dụ: Ngân hàng Morgan (Mỹ).",
    },
    {
      id: "conglomerate",
      name: "Conglomerate",
      icon: "🌐",
      color: "#ec4899",
      description:
        "Khi tư bản tăng quy mô và hợp nhất các doanh nghiệp, hình thành các tổ chức độc quyền hoặc liên hiệp tư bản lớn.",
      detail:
        "Hoạt động trong nhiều ngành. Ví dụ: VinGroup hoạt động trong bất động sản, giáo dục, công nghệ, ô tô.",
    },
  ];

  const getCardStyle = (index) => {
    const form = forms[index];
    const isHovered = hoveredIndex === index;
    return {
      backgroundColor: isHovered ? "#f9fafb" : "white",
      borderLeft: `5px solid ${form.color}`,
      borderRadius: "12px",
      padding: "30px",
      width: "400px",
      transition: "0.3s",
      boxShadow: isHovered
        ? "0 12px 24px rgba(0,0,0,0.15)"
        : "0 4px 10px rgba(0,0,0,0.08)",
      transform: isHovered ? "translateY(-8px)" : "none",
      cursor: "pointer",
    };
  };

  return (
    <div
      style={{
        backgroundColor: "#8AB8AD",
        padding: "60px 20px",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "white",
            marginBottom: "15px",
          }}
        >
          Các hình thức cơ bản của độc quyền
        </h1>
        <div
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "white",
            margin: "20px auto",
          }}
        ></div>
        <p
          style={{
            fontSize: "16px",
            color: "white",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Tìm hiểu năm hình thức tổ chức độc quyền chính trong nền kinh tế tư
          bản: Cartel, Syndicate, Trust, Consortium, và Conglomerate.
        </p>
      </div>

      {/* Hàng trên: 3 cột */}
      <div
        style={{
          width: "100%",
          maxWidth: "1300px", // max chiều rộng để không quá to
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          justifyItems: "center",
          gap: "25px",
        }}
      >
        {forms.slice(0, 3).map((form, index) => (
          <div
            key={form.id}
            style={getCardStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>
              {form.icon}
            </div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: form.color,
                marginBottom: "12px",
              }}
            >
              {form.name}
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              {form.description}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#666",
                borderTop: "1px solid #E0E0E0",
                paddingTop: "10px",
                marginTop: "10px",
              }}
            >
              {form.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Hàng dưới: 2 cột căn giữa */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {forms.slice(3).map((form, index) => (
          <div
            key={form.id}
            style={getCardStyle(index + 3)}
            onMouseEnter={() => setHoveredIndex(index + 3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>
              {form.icon}
            </div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: form.color,
                marginBottom: "12px",
              }}
            >
              {form.name}
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              {form.description}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#666",
                borderTop: "1px solid #E0E0E0",
                paddingTop: "10px",
                marginTop: "10px",
              }}
            >
              {form.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
