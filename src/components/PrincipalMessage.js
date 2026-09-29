
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function PrincipalMessage() {
  const sectionStyle = {
    padding: "100px 0",
    backgroundColor: "#fcfdfe",
    position: "relative",
    overflow: "hidden",
  };

  const principalImageStyle = {
    width: "300px",
    height: "360px",
    objectFit: "cover",
    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
    border: "10px solid white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    position: "relative",
    background: "white",
    zIndex: 2,
  };

  const backdropShape = {
    position: "absolute",
    width: "350px",
    height: "350px",
    backgroundColor: "#eba371",
    borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%) rotate(15deg)",
    zIndex: 1,
    opacity: 0.2,
  };

  const messages = [
    {
      type: "Principal's Message",
      name: "Mrs. Neha Sharma",
      image: "/neha.png",
      heading: (
        <>
          Guiding Your Child to <br />
          <span style={{ color: "#8cb0b9" }}>A Brighter Future</span>
        </>
      ),
      text1: (
        <>
          Welcome to <strong>Disha Convent School</strong>. Our mission is to
          provide quality education and help every child grow academically,
          socially and morally. We believe that every child is unique and
          possesses a spark of genius that needs to be nurtured.
        </>
      ),
      text2: (
        <>
          We focus on creativity, discipline and character building so that
          students become confident future leaders. Our dedicated faculty
          ensures a safe, playful, and innovative learning environment.
        </>
      ),
    },
    {
      type: "Director's Message",
      name: "Diwakar Sharma",
      image: "/dj.jpeg",
      heading: (
        <>
          Building Strong Foundations for <br />
          <span style={{ color: "#eba371" }}>Tomorrow's Leaders</span>
        </>
      ),
      text1: (
        <>
          At <strong>Disha Convent School</strong>, we believe education is
          more than academic achievement. It is about developing values,
          confidence, curiosity and a lifelong love for learning.
        </>
      ),
      text2: (
        <>
 Every child has the potential to shine; our responsibility is to provide the right direction, values and opportunities to help them discover it.”
        </>
      ),
    },
  ];

  return (
    <section style={sectionStyle}>
      <Container>
        <Carousel
          indicators={true}
          controls={true}
          interval={5000}
          pause="hover"
          fade
        >
          {messages.map((message, index) => (
            <Carousel.Item key={index}>
              <Row className="align-items-center">

                {/* LEFT IMAGE */}
                <Col
                  lg={5}
                  className="text-center mb-5 mb-lg-0"
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {/* Backdrop */}
                    <div style={backdropShape}></div>

                    {/* Image */}
                    <img
                      src={message.image}
                      alt={message.name}
                      style={principalImageStyle}
                      className="p-4"
                    />

                    {/* Name */}
                    <div
                      style={{
                        marginTop: "20px",
                        position: "relative",
                        zIndex: 3,
                      }}
                    >
                      <h4
                        style={{
                          color: "#465a6d",
                          fontWeight: "900",
                          marginBottom: "5px",
                        }}
                      >
                        {message.name}
                      </h4>

                      <span
                        style={{
                          backgroundColor:
                            index === 0 ? "#ff6b6b" : "#eba371",
                          color: "white",
                          padding: "5px 20px",
                          borderRadius: "50px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        {message.type}
                      </span>
                    </div>
                  </div>
                </Col>

                {/* RIGHT MESSAGE */}
                <Col lg={7} className="ps-lg-5">
                  <h2
                    style={{
                      color: "#2c3e50",
                      fontWeight: "900",
                      fontSize: "2.8rem",
                      marginBottom: "25px",
                      lineHeight: "1.2",
                    }}
                  >
                    {message.heading}
                  </h2>

                  <div style={{ position: "relative" }}>
                    {/* Decorative Quote */}
                    <span
                      style={{
                        position: "absolute",
                        top: "-40px",
                        left: "-20px",
                        fontSize: "100px",
                        color: "#eef7ff",
                        zIndex: 0,
                        fontFamily: "serif",
                      }}
                    >
                      “
                    </span>

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <p
                        style={{
                          color: "#5e6d77",
                          fontSize: "17px",
                          lineHeight: "1.9",
                          marginBottom: "20px",
                        }}
                      >
                        {message.text1}
                      </p>

                      <p
                        style={{
                          color: "#5e6d77",
                          fontSize: "17px",
                          lineHeight: "1.9",
                        }}
                      >
                        {message.text2}
                      </p>
                    </div>
                  </div>

                  {/* Signature */}
                  <div
                    style={{
                      marginTop: "30px",
                      borderLeft: "4px solid #eba371",
                      paddingLeft: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "#465a6d",
                        fontWeight: "800",
                        marginBottom: "0",
                      }}
                    >
                      Best Regards,
                    </p>

                    <p
                      style={{
                        color: "#7a8a9a",
                        fontSize: "14px",
                      }}
                    >
                      {message.type.replace("'s Message", "")},{" "}
                      Disha Convent School
                    </p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Carousel Arrow / Indicator Styling */}
      <style>
        {`
         

          .carousel-indicators {
            bottom: -55px;
          }

          .carousel-indicators [data-bs-target] {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #8cb0b9;
          }

          @media (max-width: 991px) {
            .carousel-control-prev {
              left: 0;
            }

            .carousel-control-next {
              right: 0;
            }
          }

          @media (max-width: 576px) {
            .carousel-control-prev,
            .carousel-control-next {
              width: 35px;
              height: 35px;
            }

            .carousel-control-prev {
              left: 5px;
            }

            .carousel-control-next {
              right: 5px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default PrincipalMessage;

