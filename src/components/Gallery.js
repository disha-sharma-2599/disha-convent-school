import React from "react";
import { Container } from "react-bootstrap";

function Gallery() {
  // Array of specific image URLs to match the school/kids theme
  const images = [
    { src: "d1.jpeg", size: "large" },
    { src: "g2.png", size: "small" },
    { src: "d2.jpeg", size: "small" },
    { src: "g4.png", size: "wide" },
    { src: "d3.jpeg", size: "tall" },
    { src: "g6.png", size: "small" },
    { src: "g7.png", size: "small" },
     { src: "g8.png", size: "wide" },
       { src: "g9.png", size: "small" },
  ];

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#fff" }} id="gallery">
      <Container>
        {/* Header matching the screenshot style */}
        <div className="text-center mb-5">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
             <span style={{ fontSize: '24px' }}>☀️</span>
             <span style={{ fontSize: '24px' }}>❤️</span>
          </div>
          <h2 style={{ color: "#2c3e50", fontWeight: "900", fontSize: "2.2rem" }}>Our Photo Gallery</h2>
          <p style={{ color: "#7a8a9a", fontSize: "14px", maxWidth: "600px", margin: "10px auto" }}>
            Kidzo mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.
          </p>
        </div>

        {/* MASONRY GRID SYSTEM */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridAutoRows: "200px",
          gridAutoFlow: "dense",
          gap: "10px"
        }}>
          {images.map((img, i) => {
            // Determine spans based on size to mimic the SS layout
            let gridSpan = {};
            if (img.size === "large") gridSpan = { gridColumn: "span 2", gridRow: "span 2" };
            if (img.size === "wide") gridSpan = { gridColumn: "span 2" };
            if (img.size === "tall") gridSpan = { gridRow: "span 2" };

            return (
              <div key={i} style={{ 
                ...gridSpan, 
                overflow: "hidden", 
                borderRadius: "4px",
                position: "relative"
              }}>
                <img 
                  src={img.src} 
                  alt="Gallery" 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
                
                {/* Optional overlay like the 'Magic Prince' text in SS */}
                {img.size === "large" && (
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    color: "white",
                    zIndex: 2,
                    textShadow: "1px 1px 4px rgba(0,0,0,0.5)"
                  }}>
                  
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;