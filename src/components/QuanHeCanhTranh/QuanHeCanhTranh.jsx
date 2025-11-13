function QuanHeCanhTranh() {
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
    },
    {
      icon: "⚔️",
      number: "02",
      title: "Cạnh tranh Giữa các Tổ chức độc quyền",
      description:
        "Hình thức cạnh tranh gay gắt nhất giữa các tập đoàn lớn (Samsung vs Apple, các tập đoàn dầu mỏ). Họ cạnh tranh qua thỏa hiệp, liên minh tạm thời, hoặc chiến tranh giá cả để giành thị trường.",
      color: "#f59e0b",
      bgLight: "#fffbeb",
      bgBorder: "#fcd34d",
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
    },
  ];

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
                }}
              />
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
            borderLeft: "4px solid #dc2626",
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
