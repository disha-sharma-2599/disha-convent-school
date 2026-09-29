import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  const sectionStyle = {
    padding: "100px 0",
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden"
  };

  // Background Blob (Organic shape behind the video)
  const blobStyle = {
    position: "absolute",
    width: "500px",
    height: "500px",
    backgroundColor: "#eef7ff",
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", // Organic blob shape
    top: "10%",
    left: "-100px",
    zIndex: 0,
    opacity: 0.6
  };

  return (
    <section style={sectionStyle} id="about">
      {/* Decorative Blob */}
      <div style={blobStyle}></div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="align-items-center" >
        

          {/* Left: Content with Playful UI */}
          <Col lg={6} className="ps-lg-5">
            <p style={{ 
              color: "#ff6b6b", 
              fontWeight: "700", 
              textTransform: "uppercase", 
              fontSize: "14px",
              letterSpacing: "1px",
              marginBottom: "10px"
            }}>
              Know More About Us
            </p>
            <h2 style={{ 
              color: "#465a6d", 
              fontWeight: "900", 
              fontSize: "2.8rem", 
              lineHeight: "1.2",
              marginBottom: "20px"
            }}>
              Welcome to <span style={{ color: "#eba371" }}>Disha Convent School</span>
            </h2>
            
            <p style={{ color: "#5e6d77", fontSize: "16px", lineHeight: "1.8", marginBottom: "25px" }}>
              At Disha Convent School, we provide quality education from Nursery to Class 8. Our mission is to 
              create a nurturing environment where children can explore, learn, and grow with confidence. 
              We blend creative activities with academic excellence.
            </p>

            {/* Simple Feature List matching the SS vibe */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "24px" }}>🎨</span>
                <span style={{ fontWeight: "700", color: "#465a6d" }}>Creative Arts</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "24px" }}>📚</span>
                <span style={{ fontWeight: "700", color: "#465a6d" }}>Smart Learning</span>
              </div>
            </div>
          </Col>
  
          {/* Right: Video with Frame Style */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div style={{
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "30px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
              border: "1px solid #eee"
            }}>
              <iframe
  width="100%"
  height="350"
  src="https://www.youtube.com/embed/8oQ6FFCKCc4"
  title="School Video"
  style={{
    borderRadius: "20px",
    border: "none",
  }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;