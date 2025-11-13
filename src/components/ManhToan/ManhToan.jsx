import React, { useState } from "react";

function ManhToan() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const sections = [
    {
      id: 1,
      number: "1",
      title: "Khái niệm sở hữu độc quyền nhà nước",
      icon: "🏛️",
      color: "#dc2626",
      content:
        "Sở hữu độc quyền nhà nước là hình thức sở hữu trong đó nhà nước nắm quyền chi phối hoặc kiểm soát những tư liệu sản xuất, ngành, lĩnh vực có tính chiến lược, thiết yếu của nền kinh tế, thông qua việc kết hợp sức mạnh kinh tế của các tổ chức độc quyền tư nhân với quyền lực của nhà nước.",
      quote:
        '"Theo Lênin, đây là biểu hiện cao nhất của sự kết hợp giữa tư bản độc quyền và nhà nước tư sản, hình thành nên chủ nghĩa tư bản độc quyền nhà nước."',
    },
    {
      id: 2,
      number: "2",
      title: "Hình thức của sở hữu độc quyền nhà nước",
      icon: "📋",
      color: "#3b82f6",
      content:
        "Trong nền kinh tế tư bản chủ nghĩa, sở hữu độc quyền nhà nước biểu hiện qua ba hình thức chủ yếu.",
      highlights: [
        "Nhà nước trực tiếp sở hữu tư liệu sản xuất lớn (năng lượng, giao thông, quân sự, ngân hàng)",
        "Nhà nước nắm cổ phần chi phối trong các công ty tư nhân hoặc tập đoàn độc quyền",
        "Nhà nước kết hợp, liên doanh hoặc hợp tác chặt chẽ với tư bản tư nhân",
      ],
    },
    {
      id: 3,
      number: "3",
      title: "Chức năng của sở hữu độc quyền nhà nước",
      icon: "⚙️",
      color: "#f59e0b",
      content:
        "Theo Lênin, sở hữu độc quyền nhà nước trong chủ nghĩa tư bản có ba chức năng chính.",
      highlights: [
        "Chức năng điều tiết và ổn định kinh tế: Kiềm chế khủng hoảng, ổn định sản xuất",
        "Chức năng phục vụ lợi ích giai cấp tư sản độc quyền: Củng cố quyền lực và lợi nhuận",
        "Chức năng quân sự – chính trị: Bảo vệ lợi ích thông qua chi tiêu quốc phòng",
      ],
    },
  ];

  const containerStyle = {
    backgroundColor: "#FFFFFF",
    padding: "60px 20px",
    minHeight: "100vh",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };

  const sectionWrapperStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "60px",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "900",
    color: "#1a1a1a",
    marginBottom: "15px",
    letterSpacing: "-1px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#4a4a4a",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.7",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  };

  const cardStyle = (isExpanded, color) => ({
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    border: `2px solid ${isExpanded ? color : "#E0E0E0"}`,
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: isExpanded
      ? `0 20px 40px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
          color.slice(3, 5),
          16
        )}, ${parseInt(color.slice(5, 7), 16)}, 0.15)`
      : "0 4px 12px rgba(0,0,0,0.08)",
    transform: isExpanded ? "scale(1.02)" : "scale(1)",
  });

  const cardHeaderStyle = (color) => ({
    padding: "25px",
    backgroundColor: "rgb(249, 250, 251)",
    borderBottom: `3px solid ${color}`,
    display: "flex",
    alignItems: "center",
    gap: "15px",
  });

  const iconStyle = {
    fontSize: "32px",
  };

  const cardTitleContainerStyle = {
    flex: 1,
  };

  const numberStyle = (color) => ({
    fontSize: "14px",
    color: color,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  });

  const cardTitleInnerStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginTop: "5px",
  };

  const chevronStyle = (isExpanded) => ({
    fontSize: "20px",
    transition: "transform 0.3s ease",
    transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
  });

  const cardContentStyle = {
    padding: "25px",
    backgroundColor: "#FFFFFF",
  };

  const contentTextStyle = {
    fontSize: "15px",
    color: "#333333",
    lineHeight: "1.8",
    marginBottom: "20px",
  };

  const quoteStyle = (color) => ({
    backgroundColor: "rgba(249, 250, 251, 0.8)",
    borderLeft: `4px solid ${color}`,
    padding: "16px 20px",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#1a1a1a",
    fontStyle: "italic",
    lineHeight: "1.7",
    marginTop: "15px",
  });

  const highlightsStyle = {
    marginTop: "16px",
    display: "grid",
    gap: "10px",
  };

  const highlightItemStyle = (color) => ({
    backgroundColor: "rgba(249, 250, 251, 0.6)",
    border: `1px solid ${color}`,
    padding: "12px 15px",
    borderRadius: "6px",
    fontSize: "14px",
    color: "#333333",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });

  return (
    <div style={containerStyle}>
      <div style={sectionWrapperStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Sở hữu độc quyền nhà nước</h1>
          <p style={subtitleStyle}>
            Khám phá khái niệm, hình thức và chức năng của sở hữu độc quyền nhà
            nước trong chủ nghĩa tư bản
          </p>
        </div>

        <div style={cardsContainerStyle}>
          {sections.map((section, index) => (
            <div
              key={section.id}
              style={cardStyle(expandedIndex === index, section.color)}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? -1 : index)
              }
            >
              <div style={cardHeaderStyle(section.color)}>
                <div style={iconStyle}>{section.icon}</div>
                <div style={cardTitleContainerStyle}>
                  <div style={numberStyle(section.color)}>
                    Phần {section.number}
                  </div>
                  <div style={cardTitleInnerStyle}>{section.title}</div>
                </div>
                <div style={chevronStyle(expandedIndex === index)}>▼</div>
              </div>

              {expandedIndex === index && (
                <div style={cardContentStyle}>
                  <p style={contentTextStyle}>{section.content}</p>

                  {section.highlights && (
                    <div style={highlightsStyle}>
                      {section.highlights.map((highlight, i) => (
                        <div key={i} style={highlightItemStyle(section.color)}>
                          <span style={{ color: section.color }}>●</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.quote && (
                    <div style={quoteStyle(section.color)}>{section.quote}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManhToan;
