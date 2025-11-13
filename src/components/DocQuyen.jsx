import Card from "./DocQuyen/Card";

const cards = [
  {
    icon: "🏭",
    title: "Phát Triển Sản Xuất",
    description:
      "Sự phát triển của lực lượng sản xuất, khoa học - kỹ thuật, dẫn đến hình thành xí nghiệp lớn.",
  },
  {
    icon: "⚔️",
    title: "Cạnh Tranh Thị Trường",
    description:
      "Do cạnh tranh, dẫn đến doanh nghiệp nhỏ hợp lại hoặc bị loại bỏ.",
  },
  {
    icon: "💰",
    title: "Khủng Hoảng Kinh Tế",
    description:
      "Do khủng hoảng kinh tế, sự phát triển của hệ thống tín dụng, dẫn đến tập trung sản xuất.",
  },
];

function DocQuyenComponent() {
  return (
    <section
      style={{
        marginTop: "60px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#355952",
              margin: "0 0 16px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Độc Quyền
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
              color: "#4b5563",
              maxWidth: "700px",
              margin: "0 auto",
              fontWeight: "500",
            }}
          >
            Độc quyền là sự liên minh giữa các doanh nghiệp lớn, có khả năng
            thâu tóm việc sản xuất và tiêu thụ một số loại hang hóa, có khả năng
            định ra giá cả độc quyền, nhằm thu lợi nhuận độc quyền cao.
          </p>
        </div>

        {/* Nguyên nhân */}
        <div style={{ marginTop: "80px" }}>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#355952",
              marginBottom: "50px",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              marginTop: "40px",
            }}
          >
            {cards.map((card, index) => (
              <Card
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

export default DocQuyenComponent;
