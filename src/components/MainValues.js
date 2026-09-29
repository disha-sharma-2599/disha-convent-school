import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MainValues() {
  // Matching the color palette and icons to the school theme
  const values = [
    { title: "Respect", color: "#eba371", icon: "🤝" },
    { title: "Creativity", color: "#465a6d", icon: "🎨" },
    { title: "Learning", color: "#8cb0b9", icon: "📖" },
    { title: "Teamwork", color: "#fbb040", icon: "👫" }
  ];

  const sectionStyle = {
    padding: "80px 0",
    backgroundColor: "#fff",
    textAlign: "center"
  };

  const eggShapeStyle = (color) => ({
    width: "100px",
    height: "100px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    margin: "0 auto 20px",
    color: "#fff",
    /* The specific "Egg" formula from your screenshot */
    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
    boxShadow: `0 10px 20px ${color}33`,
    transition: "transform 0.3s ease"
  });

  return (
    <section style={sectionStyle}>
      <Container>
        {/* Title style matching the "Our Photo Gallery" and "What We Offer" headers */}
        <div className="mb-5">
          <p style={{ color: "#ff6b6b", fontWeight: "700", textTransform: "uppercase", fontSize: "14px" }}>
            The Heart of Our School
          </p>
          <h2 style={{ color: "#2c3e50", fontWeight: "900", fontSize: "2.5rem" }}>
            Our Main Values
          </h2>
        </div>

        <Row className="g-4">
          {values.map((v, i) => (
            <Col lg={3} md={6} key={i}>
              <div 
                className="value-card"
                style={{
                  padding: "30px",
                  borderRadius: "20px",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
              >
                {/* THE EGG ICON BACKDROP */}
                <div style={eggShapeStyle(v.color)} className="egg-icon">
                  {v.icon}
                </div>

                <h5 style={{ 
                  color: "#465a6d", 
                  fontWeight: "800", 
                  fontSize: "1.3rem",
                  marginTop: "15px"
                }}>
                  {v.title}
                </h5>
                
                <div style={{
                  width: "30px",
                  height: "3px",
                  backgroundColor: v.color,
                  margin: "10px auto",
                  borderRadius: "10px"
                }}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .value-card:hover .egg-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .value-card:hover h5 {
          color: #ff6b6b;
        }
      `}</style>
    </section>
  );
}

export default MainValues;