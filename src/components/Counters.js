import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Counters() {
  const stats = [
    { number: 250, suffix: "+", label: "Students", color: "#eba371", icon: "🎓" },
    { number: 16, suffix: "+", label: "Teachers", color: "#465a6d", icon: "👩‍🏫" },
    { number: 5, suffix: "+", label: "Years", color: "#8cb0b9", icon: "⏳" },
    { number: 9, suffix: "+", label: "Awards", color: "#fbb040", icon: "🏆" },
  ];

  // This hook detects when the section is visible on screen
  const { ref, inView } = useInView({
    threshold: 0.3, // Triggers when 30% of the section is visible
    triggerOnce: false, // Set to false so it re-animates every time you scroll back
  });

  return (
    <section 
      ref={ref} 
      style={{ 
        padding: "80px 0", 
        background: "linear-gradient(to bottom, #fff, #eef7ff)",
        position: "relative" 
      }}
    >
      <Container>
        <Row className="g-4">
          {stats.map((item, index) => (
            <Col key={index} lg={3} md={6} xs={12}>
              <div style={{
                backgroundColor: "#fff",
                padding: "40px 20px",
                borderRadius: "30px",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                borderBottom: `6px solid ${item.color}`,
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                {/* THE EGG-SHAPED ICON BACKDROP */}
                <div style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: item.color,
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "35px",
                  color: "#fff",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  boxShadow: `0 10px 20px ${item.color}44`
                }}>
                  {item.icon}
                </div>

                <h1 style={{ 
                  color: "#2c3e50", 
                  fontWeight: "900", 
                  fontSize: "2.8rem",
                  marginBottom: "5px"
                }}>
                  {/* ANIMATED COUNTER LOGIC */}
                  {inView ? (
                    <CountUp end={item.number} duration={2.5} suffix={item.suffix} />
                  ) : (
                    "0" + item.suffix
                  )}
                </h1>
                
                <p style={{ 
                  color: "#7a8a9a", 
                  fontWeight: "700", 
                  textTransform: "uppercase",
                  fontSize: "14px",
                  letterSpacing: "1px"
                }}>
                  {item.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Counters;
