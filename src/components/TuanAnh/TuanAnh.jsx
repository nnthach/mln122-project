import React, { useState } from "react";

function TuanAnh() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const sections = [
    {
      id: 1,
      number: "1.2",
      title: "Sức mạnh của các tổ chức độc quyền",
      icon: "💪",
      color: "#dc2626",
      content:
        "Do tư bản tài chính và hệ thống tài phiệt chi phối. Song song với quá trình tích tụ và tập trung sản xuất trong công nghiệp, quá trình tích tụ và tập trung tư bản trong ngân hàng cũng phát triển mạnh, tạo ra các tổ chức độc quyền ngân hàng. Khi các tổ chức này kết hợp với độc quyền công nghiệp, tư bản tài chính ra đời.",
      quote:
        '"Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng độc quyền lớn nhất với tư bản của những liên minh độc quyền các nhà công nghiệp." - V.I. Lênin',
    },
    {
      id: 2,
      number: "1.3",
      title: "Xuất khẩu tư bản trở thành phổ biến",
      icon: "📤",
      color: "#3b82f6",
      content:
        "Trong giai đoạn tư bản tự do cạnh tranh, đặc trưng nổi bật là xuất khẩu hàng hóa. Tuy nhiên, ở giai đoạn tư bản độc quyền, đặc trưng nổi bật lại là xuất khẩu tư bản. Xuất khẩu tư bản là xuất khẩu giá trị ra nước ngoài (đầu tư tư bản ra nước ngoài).",
      highlights: [
        "Mục tiêu: chiếm đoạt giá trị thặng dư",
        "Lợi nhuận ở các nước nhập khẩu tư bản",
      ],
    },
    {
      id: 3,
      number: "1.4",
      title: "Phân chia thị trường thế giới",
      icon: "🌍",
      color: "#f59e0b",
      content:
        "Sự phát triển của các tập đoàn độc quyền tất yếu dẫn đến phân chia thị trường thế giới. Thực chất, đó là sự phân chia thị trường tiêu thụ hàng hóa, nguồn nguyên liệu và lĩnh vực đầu tư.",
      highlights: [
        "Thị trường tiêu thụ hàng hóa",
        "Nguồn nguyên liệu",
        "Lĩnh vực đầu tư",
        "Sự tham gia của các nhà nước phát triển",
      ],
    },
    {
      id: 4,
      number: "1.5",
      title: "Phân định khu vực ảnh hưởng",
      icon: "🗺️",
      color: "#8b5cf6",
      content:
        "Lôi kéo, thúc đẩy các chính phủ phân định khu vực ảnh hưởng để bảo vệ lợi ích độc quyền. Sự phân chia kinh tế thế giới được củng cố và mở rộng bằng việc phân chia lãnh thổ.",
      quote:
        '"Chủ nghĩa tư bản càng phát triển cao, nguyên liệu càng khan hiếm, cạnh tranh càng gay gắt; cuộc đấu tranh giành thuộc địa càng trở nên quyết liệt." - Lênin',
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
    color: "black",
    marginBottom: "15px",
    letterSpacing: "-1px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "black",
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
    backgroundColor: "#ffffff",
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
    backgroundColor: "rgba(244, 244, 244, 0.8)",
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
    backgroundColor: "rgba(247, 247, 247, 0.6)",
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
          <h1 style={titleStyle}>Đặc điểm của Tư bản Độc quyền</h1>
          <p style={subtitleStyle}>
            Khám phá năm đặc điểm chính của giai đoạn tư bản tài chính và tư bản
            độc quyền theo quan điểm Mác-Lê-Nin
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

export default TuanAnh;
