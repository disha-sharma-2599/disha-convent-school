import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Programs() {
  // Programs data with specific theme colors from your screenshots
  const programs = [
    { title: "Playgroup", age: "2 Years", color: "#eba371", icon: "🧸" },
    { title: "Nursery", age: "3 Years", color: "#465a6d", icon: "🎨" },
    { title: "LKG", age: "4 Years", color: "#8cb0b9", icon: "📚" },
    { title: "UKG", age: "5 Years", color: "#fbb040", icon: "🧩" }
  ];

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#fff" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <p style={{ color: "#ff6b6b", fontWeight: "700", textTransform: "uppercase", fontSize: "14px" }}>
            Education for Your Children
          </p>
          <h2 style={{ color: "#2c3e50", fontWeight: "900", fontSize: "2.5rem" }}>
            Care Programs
          </h2>
        </div>

        <Row className="g-4">
          {programs.map((p, i) => (
            <Col lg={3} md={6} key={i} className="text-center">
              <div 
                className="program-card"
                style={{
                  padding: "40px 20px",
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative"
                }}
              >
                {/* EGG SHAPE ICON BACKDROP (Matching your screenshot style) */}
                <div style={{
                  width: "120px",
                  height: "120px",
                  margin: "0 auto 25px",
                  backgroundColor: p.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "50px",
                  color: "#fff",
                  // The "Egg" shape formula from your SS reference
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  boxShadow: `0 10px 20px ${p.color}44`,
                  transition: "transform 0.4s ease"
                }}
                className="icon-backdrop"
                >
                  {p.icon}
                </div>

                <h5 style={{ color: "#465a6d", fontWeight: "800", fontSize: "1.4rem" }}>
                  {p.title}
                </h5>
                <p style={{ color: "#7a8a9a", fontWeight: "600" }}>
                  Age: {p.age}
                </p>

                {/* Decorative dot or line if needed */}
                <div style={{ 
                    width: "40px", 
                    height: "4px", 
                    backgroundColor: p.color, 
                    margin: "15px auto", 
                    borderRadius: "10px" 
                }}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Adding Hover Effects via CSS-in-JS style tag */}
      <style>{`
        .program-card:hover {
          transform: translateY(-10px);
        }
        .program-card:hover .icon-backdrop {
          transform: rotate(10deg) scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default Programs;