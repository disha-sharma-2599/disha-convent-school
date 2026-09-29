
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  Form,
} from "react-bootstrap";

function Hero() {

  // ==============================
  // GOOGLE APPS SCRIPT URL
  // ==============================
  const GOOGLE_SCRIPT_URL =
    "YOUR_GOOGLE_APPS_SCRIPT_URL";


  // ==============================
  // FORM STATE
  // ==============================
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);


  // ==============================
  // INPUT CHANGE
  // ==============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // ==============================
  // FORM SUBMIT
  // ==============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {

        setSuccess(true);

        setMessage(
          "Thank you! Your admission enquiry has been submitted successfully."
        );

        // Clear form
        setFormData({
          studentName: "",
          parentName: "",
          phone: "",
        });

      } else {

        setSuccess(false);

        setMessage(
          "Unable to submit your enquiry. Please try again."
        );
      }

    } catch (error) {

      console.error("Admission enquiry error:", error);

      setSuccess(false);

      setMessage(
        "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  // ==============================
  // STYLES
  // ==============================

  const heroWrapperStyle = {
    backgroundColor: "#eef7ff",
    paddingTop: "120px",
    paddingBottom: "100px",
    position: "relative",
    borderRadius: "0 0 50% 50% / 0 0 15% 15%",
    overflow: "hidden",
  };

  const cloudStyle = {
    position: "absolute",
    fontSize: "60px",
    opacity: "0.4",
    zIndex: 0,
    animation: "float 6s ease-in-out infinite",
  };

  const cardStyle = {
    border: "none",
    borderRadius: "20px",
    padding: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    position: "relative",
    zIndex: 2,
  };


  return (
    <section style={heroWrapperStyle} id="home">

      {/* ==============================
          ANIMATED CLOUDS
      ============================== */}

      <div
        style={{
          ...cloudStyle,
          top: "10%",
          left: "5%",
        }}
      >
        ☁️
      </div>

      <div
        style={{
          ...cloudStyle,
          top: "15%",
          right: "10%",
          animationDelay: "2s",
        }}
      >
        ☁️
      </div>


      <Container>

        <Row className="align-items-center">

          {/* ==============================
              LEFT - CAROUSEL
          ============================== */}

          <Col lg={8} className="mb-4 mb-lg-0">

            <div
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                border: "10px solid white",
                backgroundColor: "white",
              }}
            >

              <Carousel
                fade
                indicators={false}
                interval={1000}
              >

                <Carousel.Item>

                  <img
                    src="/b1.png"
                    className="d-block w-100"
                    alt="Creative Learning"
                    style={{
                      objectFit: "cover",
                      aspectRatio: "16/9",
                    }}
                  />

                </Carousel.Item>


                <Carousel.Item >

                  <img
                    src="/b2.png"
                    className="d-block w-100"
                    alt="Fun Activities"
                    style={{
                      objectFit: "cover",
                      aspectRatio: "16/9", 
                     
                    }}
                  />

                </Carousel.Item>

              </Carousel>

            </div>

          </Col>


          {/* ==============================
              RIGHT - ADMISSION FORM
          ============================== */}

          <Col lg={4}>

            <Card style={cardStyle}>

              {/* HEADER */}

              <div className="text-center mb-4">

                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#eef7ff",
                    borderRadius:
                      "50% 50% 50% 50% / 60% 60% 40% 40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                    fontSize: "30px",
                  }}
                >
                  📝
                </div>

                <h4
                  style={{
                    fontWeight: "900",
                    color: "#465a6d",
                  }}
                >
                  Admission{" "}
                  <span style={{ color: "#ff6b6b" }}>
                    Enquiry
                  </span>
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#7a8a9a",
                  }}
                >
                  Secure your child's bright future today!
                </p>

              </div>


              {/* SUCCESS / ERROR MESSAGE */}

              {message && (
                <div
                  className="mb-3 text-center"
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: success
                      ? "#eaf8ef"
                      : "#fff0f0",
                    color: success
                      ? "#218838"
                      : "#dc3545",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {message}
                </div>
              )}


              {/* FORM */}

              <Form onSubmit={handleSubmit}>

                {/* STUDENT NAME */}

                <Form.Control
                  type="text"
                  name="studentName"
                  placeholder="Student Name"
                  className="mb-3"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px",
                    border: "1px solid #e0e6ed",
                    fontSize: "14px",
                  }}
                />


                {/* PARENT NAME */}

                <Form.Control
                  type="text"
                  name="parentName"
                  placeholder="Parent Name"
                  className="mb-3"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px",
                    border: "1px solid #e0e6ed",
                    fontSize: "14px",
                  }}
                />


                {/* PHONE */}

                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="mb-4"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  style={{
                    borderRadius: "10px",
                    padding: "12px",
                    border: "1px solid #e0e6ed",
                    fontSize: "14px",
                  }}
                />


                {/* SUBMIT BUTTON */}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-100 border-0"
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: "#ff6b6b",
                    fontWeight: "700",
                    fontSize: "16px",
                    boxShadow:
                      "0 10px 20px rgba(255, 107, 107, 0.3)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor =
                        "#ee5b5b";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor =
                        "#ff6b6b";
                    }
                  }}
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Request"}
                </Button>

              </Form>

            </Card>

          </Col>

        </Row>

      </Container>


      {/* ==============================
          ANIMATION CSS
      ============================== */}

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-20px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

    </section>
  );
}

export default Hero;

