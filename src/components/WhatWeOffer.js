import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WhatWeOffer() {
  const offers = [
    // { title: "Smart Classes", color: "#eba371", img: "smartclasses.png" },
    { title: "Sports", color: "#465a6d", img: "sports.png" },
    { title: "Activities", color: "#8cb0b9", img: "activites.png" },
    { title: "Transport", color: "#fbb040", img: "transport.png" },
    { title: "Library", color: "#465a6d", img: "library.png" },
    // { title: "Computer Lab", color: "#eba371", img: "computerlab.png" },
    // { title: "Science Lab", color: "#8cb0b9", img: "sciencelab.png" },
  ];

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#fff" }} id="Facilities">
      <Container>
        <div className="text-center mb-5">
          <p style={{ color: "#eba371", fontWeight: "700", textTransform: "uppercase" }}>Our Facilities</p>
          <h2 style={{ color: "#465a6d", fontWeight: "900", fontSize: "2.5rem" }}>What We Offer</h2>
        </div>

        {/* Using g-5 to add more vertical space between rows of eggs */}
        <Row className="g-5 justify-content-center">
          {offers.map((item, index) => (
            <Col key={index} lg={3} md={6} xs={12} className="text-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                
                {/* THE COLORFUL BACKGROUND SHAPE */}
                <div style={{
                  position: "absolute",
                  top: "-6px", left: "-6px", right: "-6px", bottom: "-6px",
                  backgroundColor: item.color,
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", 
                  zIndex: 0,
                  opacity: 0.7
                }}></div>

                {/* THE IMAGE MASK BOX */}
                <div 
                  style={{
                    width: "240px",
                    height: "240px",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    overflow: "hidden",
                    border: "8px solid white",
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    transition: "all 0.4s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
                  }}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </div>

                <h5 style={{ 
                  marginTop: "25px", 
                  color: "#000000ff", 
                  fontWeight: "800", 
                  fontSize: "1 rem",
                  letterSpacing: "-0.5px"
                }}>
                  {item.title}
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhatWeOffer;