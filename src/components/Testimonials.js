import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

function Testimonials() {
  const testimonials = [
    { name: "Jenny Wilson", color: "#465a6d" }, // Slate Blue
    { name: "Esther Howard", color: "#89adb8" }, // Muted Teal
    { name: "Wade Warren", color: "#e9a876" }, // Soft Orange
    { name: "Cameron Williamson", color: "#89adb8" },
    { name: "Jane Cooper", color: "#e9a876" },
    { name: "Robert Fox", color: "#465a6d" },
  ];

  // This splits the 6 items into 2 slides (3 items per slide)
  const slides = [testimonials.slice(0, 3), testimonials.slice(3, 6)];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <Container>
        {/* Header matching your SS exactly */}
        <div className="text-center mb-5">
          <p style={{ color: '#e9a876', fontWeight: '700', fontSize: '14px' }}>Testimonials</p>
          <h2 style={{ color: '#3c4858', fontWeight: '800', fontSize: '42px', lineHeight: '1.2' }}>
            Parents' Words Are The Key <br /> To Happy Kids
          </h2>
        </div>

        <Carousel indicators={true} controls={false} interval={5000}>
          {slides.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="g-4 mb-5 pb-5">
                {group.map((item, i) => (
                  <Col md={4} key={i}>
                    <div style={{ position: 'relative', padding: '20px' }}>
                      
                      {/* THE BUBBLE BOX */}
                      <div style={{
                        backgroundColor: item.color,
                        padding: '40px 30px',
                        borderRadius: '35px 35px 90px 35px', // Exact Bachpan shape
                        color: 'white',
                        position: 'relative',
                        minHeight: '220px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
                      }}>
                        
                        {/* THE "66" QUOTE MARK - POSITIONED ON THE EDGE */}
                        <span style={{
                          position: 'absolute',
                          top: '-22px',
                          right: '25px',
                          fontSize: '100px',
                          fontFamily: 'serif',
                         
                          lineHeight: '1',
                          color: 'white',
                          opacity: '0.8',
                          pointerEvents: 'none'
                        }}>
                          “
                        </span>

                        <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', fontWeight: '400' }}>
                          Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi Class aptent taciti sociosqu ad litora
                        </p>

                        {/* Name with the horizontal line */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '25px', height: '1.5px', backgroundColor: 'white' }}></div>
                          <span style={{ fontWeight: '600', fontSize: '15px' }}>{item.name}</span>
                        </div>

                        {/* THE SHARP TAIL (TRIANGLE) */}
                        <div style={{
                          position: 'absolute',
                          bottom: '-19px',
                          left: '45px',
                          width: '0',
                          height: '0',
                          borderLeft: '22px solid transparent',
                          borderTop: `22px solid ${item.color}`
                        }}></div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* CUSTOM PAGINATION STYLE (Matching the Green Pill in your SS) */}
        <style>{`
          .carousel-indicators [data-bs-target] {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #a5d6a7;
            border: none;
            margin: 0 6px;
          }
          .carousel-indicators .active {
            width: 30px;
            height: 15px;
            border-radius: 20px;
            background-color: #66bb6a !important;
            border: 3px solid #fff;
            box-shadow: 0 0 0 2px #66bb6a;
          }
          .carousel-indicators {
            bottom: -30px;
          }
        `}</style>
      </Container>
    </section>
  );
}

export default Testimonials;