
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "d1.jpeg", size: "large" },
    { src: "g2.png", size: "small" },
    { src: "d2.jpeg", size: "small" },
    { src: "g4.png", size: "wide" },
    { src: "d3.jpeg", size: "tall" },
    { src: "g6.png", size: "small" },
    { src: "g7.png", size: "small" },
    { src: "g8.png", size: "wide" },
    { src: "staff.png", size: "small" },
  ];

  return (
    <>
      <section
        style={{
          padding: "80px 0",
          backgroundColor: "#fff",
        }}
        id="gallery"
      >
        <Container>
          {/* Header */}
          <div className="text-center mb-5">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>☀️</span>
              <span style={{ fontSize: "24px" }}>❤️</span>
            </div>

            <h2
              style={{
                color: "#2c3e50",
                fontWeight: "900",
                fontSize: "2.2rem",
              }}
            >
              Our Photo Gallery
            </h2>

            <p
              style={{
                color: "#7a8a9a",
                fontSize: "14px",
                maxWidth: "600px",
                margin: "10px auto",
              }}
            >
              Explore memorable moments, activities and special events from
              Disha Convent School.
            </p>
          </div>

          {/* MASONRY GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(250px, 1fr))",
              gridAutoRows: "200px",
              gridAutoFlow: "dense",
              gap: "10px",
            }}
          >
            {images.map((img, i) => {
              let gridSpan = {};

              if (img.size === "large") {
                gridSpan = {
                  gridColumn: "span 2",
                  gridRow: "span 2",
                };
              }

              if (img.size === "wide") {
                gridSpan = {
                  gridColumn: "span 2",
                };
              }

              if (img.size === "tall") {
                gridSpan = {
                  gridRow: "span 2",
                };
              }

              return (
                <div
                  key={i}
                  style={{
                    ...gridSpan,
                    overflow: "hidden",
                    borderRadius: "8px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt={`Gallery ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />

                  {/* Hover overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "rgba(0,0,0,0.15)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="gallery-overlay"
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "30px",
            cursor: "zoom-out",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: "25px",
              right: "30px",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "rgba(255,255,255,0.9)",
              color: "#2c3e50",
              fontSize: "28px",
              lineHeight: "1",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            ×
          </button>

          {/* Large Image */}
          <img
            src={selectedImage}
            alt="Selected Gallery"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              animation: "galleryZoom 0.3s ease",
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes galleryZoom {
            from {
              opacity: 0;
              transform: scale(0.85);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .gallery-overlay {
            pointer-events: none;
          }

          div:hover > .gallery-overlay {
            opacity: 1;
          }

          @media (max-width: 768px) {
            section#gallery {
              padding: 60px 0 !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default Gallery;
