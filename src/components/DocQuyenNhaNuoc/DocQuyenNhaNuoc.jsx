import CardDocQuyenNhaNuoc from "./CardDocQuyenNhaNuoc";

const cards = [
  {
    icon: "📈",
    title: "Phát Triển Sản Xuất",
    description:
      "Sự phát triển tất yếu của kinh tế, qua quá trình tích tụ và tập trung tư bản, khiến quy mô sản xuất vượt khả năng tự điều tiết của thị trường, đòi hỏi sự can thiệp của Nhà nước.",
  },
  {
    icon: "🌱",
    title: "Ngành Mới Phát Triển",
    description:
      "Do sự phát triển và xuất hiện của các ngành mới đòi hỏi đầu tư rất lớn, thu hồi vốn chậm và có ít lợi nhuận , những ngành này cần sự can thiệp và bảo trợ của Nhà nước.",
  },
  {
    icon: "⚖️",
    title: "Xoa Dịu Mâu Thuẫn",
    description:
      "Để đối phó với sự thống trị độc quyền , Nhà nước cần có vai trò xoa dịu mâu thuẫn xã hội giữa tư sản và nhân dân lao động.",
  },
  {
    icon: "🌍",
    title: "Quan Hệ Kinh Tế Quốc Tế",
    description:
      "Do yêu cầu mở rộng quan hệ kinh tế đối ngoại , Nhà nước phải thực hiện bảo hộ tư bản và tạo môi trường quốc tế thuận lợi.",
  },
];

function DocQuyenNhaNuocComponent() {
  return (
    <section
      style={{
        marginTop: "60px",
        backgroundColor: "white",
        paddingTop: 60,
        paddingBottom: 60,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "black",
              margin: "0 0 16px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Độc Quyền Nhà Nước
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#dc2626",
              margin: "0 auto 24px",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "gray",
              maxWidth: "700px",
              margin: "0 auto",
              fontWeight: "500",
            }}
          >
            Độc quyền nhà nước là kiểu độc quyền trong đó nhà nước thực hiện nắm
            giữ vị thế độc quyền trên cơ sở duy trì sức mạnh của các tổ chức độc
            quyền ở các lĩnh vực then chốt... nhằm tạo ra sức mạnh vật chất cho
            sự ổn định của chế độ chính trị xã hội ứng với điều kiện nhất định
            trong các thời kỳ lịch sử
          </p>
        </div>

        {/* Nguyên nhân */}
        <div style={{ marginTop: "80px" }}>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "black",
              marginBottom: "24px",
              textAlign: "center",
              position: "relative",
              paddingBottom: "20px",
            }}
          >
            Nguyên Nhân Hình Thành
            <div
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#dc2626",
                margin: "16px auto 0",
                borderRadius: "2px",
              }}
            />
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
              maxWidth: "930px",
              margin: "0 auto",
              alignItems: "stretch",
            }}
          >
            {cards.map((card, index) => (
              <CardDocQuyenNhaNuoc
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocQuyenNhaNuocComponent;
