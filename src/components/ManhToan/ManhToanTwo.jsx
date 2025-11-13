function ManhToanTwo() {
  const section1Title = "Sự điều tiết kinh tế của nhà nước tư sản";
  const section1Content =
    "Hệ thống điều tiết kinh tế của nhà nước tư sản là một tổng thể các thiết chế kinh tế của nhà nước có khả năng điều tiết sự vận động của toàn bộ nền kinh tế quốc dân, toàn bộ quá trình tái sản xuất theo hướng có lợi cho tầng lớp tư bản độc quyền.";

  const section1Items = [
    {
      title: "Khái niệm",
      desc: "Hệ thống thiết chế kinh tế của nhà nước",
      color: "#dc2626",
      icon: "📌",
    },
    {
      title: "Mục đích",
      desc: "Điều tiết nền kinh tế theo hướng lợi cho tư bản",
      color: "#3b82f6",
      icon: "🎯",
    },
    {
      title: "Phương pháp",
      desc: "Sử dụng chính sách kinh tế và công cụ điều tiết",
      color: "#f59e0b",
      icon: "🔧",
    },
  ];

  const section2Title = "Chính sách kinh tế và công cụ điều tiết";

  const section2Items = [
    {
      category: "Chính sách kinh tế",
      icon: "📊",
      color: "#10b981",
      items: [
        "Chống khủng hoảng chu kỳ",
        "Chống lạm phát",
        "Tăng trưởng kinh tế",
        "Ổn định tỷ giá hối đoái",
      ],
    },
    {
      category: "Chính sách xã hội",
      icon: "👥",
      color: "#8b5cf6",
      items: [
        "Chính sách lao động",
        "Bảo trợ xã hội",
        "Giáo dục và đào tạo",
        "Y tế công cộng",
      ],
    },
    {
      category: "Công cụ tiền tệ",
      icon: "💰",
      color: "#06b6d4",
      items: [
        "Điều chỉnh lãi suất",
        "Kiểm soát cung tiền",
        "Dự trữ bắt buộc",
        "Hoạt động thị trường mở",
      ],
    },
    {
      category: "Công cụ tài khóa",
      icon: "📈",
      color: "#ec4899",
      items: [
        "Chính sách thuế",
        "Chi tiêu ngân sách",
        "Nợ công",
        "Trợ cấp cho doanh nghiệp",
      ],
    },
  ];

  const containerStyle = {
    backgroundColor: "#F5F6EF",
    padding: "60px 20px",
    minHeight: "100vh",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };

  const sectionWrapperStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const sectionTitleStyle = {
    fontSize: "42px",
    fontWeight: "900",
    color: "#89ACA5",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "-0.5px",
    textAlign: "center",
  };

  const sectionTitleStyle2 = {
    fontSize: "42px",
    fontWeight: "900",
    color: "#89ACA5",
    margin: "40px 0",
    marginTop: "80px",
    textTransform: "uppercase",
    letterSpacing: "-0.5px",
    textAlign: "center",
  };

  const sectionDescStyle = {
    fontSize: "16px",
    color: "#89ACA5",
    lineHeight: "1.8",
    marginBottom: "40px",
    maxWidth: "900px",
    margin: "0 auto 40px auto",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  };

  const cardStyle = (color) => ({
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "30px",
    border: `3px solid ${color}`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "default",
  });

  const cardTitleStyle = (color) => ({
    fontSize: "18px",
    fontWeight: "700",
    color: color,
    marginBottom: "10px",
  });

  const cardDescStyle = {
    fontSize: "14px",
    color: "#555555",
    lineHeight: "1.6",
  };

  const section2GridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const categoryCardStyle = (color) => ({
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "30px",
    border: `2px solid ${color}`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  });

  const categoryTitleStyle = (color) => ({
    fontSize: "20px",
    fontWeight: "700",
    color: color,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });

  const iconStyle = {
    fontSize: "24px",
  };

  const itemListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const itemStyle = (color) => ({
    fontSize: "14px",
    color: "#333333",
    paddingLeft: "16px",
    borderLeft: `3px solid ${color}`,
    paddingTop: "8px",
    paddingBottom: "8px",
  });

  return (
    <div style={containerStyle}>
      {/* Section 1 */}
      <div style={sectionWrapperStyle}>
        <h1 style={sectionTitleStyle}>{section1Title}</h1>
        <p style={sectionDescStyle}>{section1Content}</p>

        <div style={gridStyle}>
          {section1Items.map((item, index) => (
            <div key={index} style={cardStyle(item.color)}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                {item.icon}
              </div>
              <h3 style={cardTitleStyle(item.color)}>{item.title}</h3>
              <p style={cardDescStyle}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div style={sectionWrapperStyle}>
        <h1 style={sectionTitleStyle2}>{section2Title}</h1>

        <div style={section2GridStyle}>
          {section2Items.map((category, index) => (
            <div key={index} style={categoryCardStyle(category.color)}>
              <h2 style={categoryTitleStyle(category.color)}>
                <span style={iconStyle}>{category.icon}</span>
                {category.category}
              </h2>
              <div style={itemListStyle}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} style={itemStyle(category.color)}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManhToanTwo;
