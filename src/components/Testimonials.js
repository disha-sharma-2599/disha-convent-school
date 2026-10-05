
import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";

function Testimonials() {
  const testimonials = [
    {
      name: "Pratima Meena",
      color: "#465a6d",
      message:
        "Disha Convent School has provided a wonderful learning environment for my child. The teachers are caring, supportive and always encourage students to do their best.",
    },
    {
      name: "Kalpna Pareta",
      color: "#89adb8",
      message:
        "I am very happy with the education and discipline at Disha Convent School. The school focuses not only on studies but also on developing confidence and good values in children.",
    },
    {
      name: "Chandra Shekhar",
      color: "#e9a876",
      message:
        "The teachers at Disha Convent School are dedicated and approachable. I have seen a positive change in my child's confidence, communication and overall personality.",
    },
    {
      name: "Satya Prakash Meena",
      color: "#89adb8",
      message:
        "We are satisfied with the school's approach towards education. The combination of academics, discipline and extracurricular activities gives children a balanced learning experience.",
    },
    {
      name: "Saurabh Gautam",
      color: "#e9a876",
      message:
        "Disha Convent School provides a safe and encouraging atmosphere for children. The teachers understand every child's needs and help them learn with confidence and enthusiasm.",
    },
    {
      name: "Manoj Gautam",
      color: "#465a6d",
      message:
        "Choosing Disha Convent School has been a great decision for our family. The school gives equal importance to education, character building and the overall development of every child.",
    },
  ];

  // 3 testimonials per slide
  const slides = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#fff",
      }}
    >
      <Container>

        {/* HEADER */}
        <div className="text-center mb-5">
          <p
            style={{
              color: "#e9a876",
              fontWeight: "700",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            Testimonials
          </p>

          <h2
            style={{
              color: "#3c4858",
              fontWeight: "800",
              fontSize: "42px",
              lineHeight: "1.2",
            }}
          >
            Parents' Words Are The Key
            <br />
            To Happy Kids
          </h2>
        </div>

        {/* CAROUSEL */}
        <Carousel
          indicators={true}
          controls={false}
          interval={5000}
          pause="hover"
          fade
        >
          {slides.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="g-4 mb-5 pb-5">

                {group.map((item, i) => (
                  <Col md={4} key={i}>
                    <div
                      style={{
                        position: "relative",
                        padding: "20px",
                      }}
                    >

                      {/* TESTIMONIAL BOX */}
                      <div
                        style={{
                          backgroundColor: item.color,
                          padding: "40px 30px",
                          borderRadius: "35px 35px 90px 35px",
                          color: "white",
                          position: "relative",
                          minHeight: "250px",
                          boxShadow:
                            "0 10px 25px rgba(0,0,0,0.08)",
                        }}
                      >

                        {/* QUOTE */}
                        <span
                          style={{
                            position: "absolute",
                            top: "-22px",
                            right: "25px",
                            fontSize: "100px",
                            fontFamily: "serif",
                            lineHeight: "1",
                            color: "white",
                            opacity: "0.8",
                            pointerEvents: "none",
                          }}
                        >
                          “
                        </span>

                        {/* MESSAGE */}
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.8",
                            marginBottom: "25px",
                            fontWeight: "400",
                          }}
                        >
                          {item.message}
                        </p>

                        {/* NAME */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            position: "absolute",
                            bottom: "35px",
                            left: "30px",
                          }}
                        >
                          <div
                            style={{
                              width: "25px",
                              height: "1.5px",
                              backgroundColor: "white",
                            }}
                          ></div>

                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                            }}
                          >
                            {item.name}
                          </span>
                        </div>

                        {/* TAIL */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-19px",
                            left: "45px",
                            width: "0",
                            height: "0",
                            borderLeft:
                              "22px solid transparent",
                            borderTop:
                              `22px solid ${item.color}`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                ))}

              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* PAGINATION */}
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

          @media (max-width: 767px) {
            .carousel-indicators {
              bottom: -20px;
            }

            h2 {
              font-size: 32px !important;
            }
          }
        `}</style>

      </Container>
    </section>
  );
}

export default Testimonials;
