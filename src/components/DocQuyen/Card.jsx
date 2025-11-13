import { useState } from "react";

const cardBaseStyle = {
  backgroundColor: "#f9fafb",
  border: "2px solid #e5e7eb",
  borderRadius: "12px",
  padding: "32px 24px",
  textAlign: "center",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
};

const hoverStyle = {
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
  transform: "translateY(-4px)",
  borderColor: "#dc2626",
};

const normalStyle = {
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
  transform: "translateY(0)",
  borderColor: "#e5e7eb",
};

export default function Card({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const currentStyle = isHovered ? { ...cardBaseStyle, ...hoverStyle } : { ...cardBaseStyle, ...normalStyle };

  return (
    <div
      style={currentStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ fontSize: "40px", marginBottom: "16px" }}>{icon}</div>
      <h4
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#1a1a1a",
          margin: "16px 0 12px 0",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#6b7280",
          margin: "0",
        }}
      >
        {description}
      </p>
    </div>
  );
}
