import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Send,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

function Footer() {
  // ================= GOOGLE SHEETS =================

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyNzk5MX7b1J9BPh9U0OQoPfwnmdtFzBpHDeBmRi-2xFuaafTEy2RvJo3Pm50ZL5YTQQw/exec";

  // ================= CONTACT FORM =================

  const [contactData, setContactData] = useState({
    formType: "contact",
    name: "",
    email: "",
    message: "",
  });

  const [contactLoading, setContactLoading] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setContactLoading(true);
    setContactMessage("");
    setContactSuccess(false);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (result.success) {
        setContactSuccess(true);

        setContactMessage(
          "Thank you! Your message has been sent successfully."
        );

        setContactData({
          formType: "contact",
          name: "",
          email: "",
          message: "",
        });
      } else {
        setContactSuccess(false);

        setContactMessage(
          "Unable to send your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setContactSuccess(false);

      setContactMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setContactLoading(false);
    }
  };

  // ================= STYLES =================

  const footerContainerStyle = {
    position: "relative",
    paddingTop: "80px",
    paddingBottom: "150px",
    width: "100%",

    backgroundImage: `
      linear-gradient(
        rgba(255, 255, 255, 0.12),
        rgba(255, 255, 255, 0.12)
      ),
      url('/footerbg.png')
    `,

    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  const glassContainerStyle = {
    background: "rgb(255 255 255 / 39%)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "50px",
    padding: "60px",
    margin: "0 50px",
  };

  const titleStyle = {
    color: "#2c3e50",
    fontWeight: "800",
    fontSize: "1.3rem",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "#061a25",
    textDecoration: "none",
    display: "block",
    marginBottom: "10px",
    fontSize: "14px",
    fontWeight: "600",
  };

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid #dbe9f5",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "10px 15px",
    marginBottom: "10px",
    boxShadow: "none",
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      url: "https://www.facebook.com/disha.convent.school.2025",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/schooldishaconvent/?hl=en",
    },
    {
      name: "YouTube",
      icon: <Youtube size={18} />,
      url: "https://www.youtube.com/@DISHACONVANT-t8p",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={18} />,
      url: "https://wa.me/917339839499",
    },
  ];

  return (
    <>
      <footer style={footerContainerStyle}>
        {/* ================= MAIN GLASS FOOTER ================= */}

        <div className="footer-glass" style={glassContainerStyle}>
          <Container>
            <Row>

              {/* ================= BRAND ================= */}

              <Col
                lg={3}
                md={6}
                sm={12}
                className="mb-4 footer-brand"
              >
                <img
                  src="/logo.png"
                  alt="Disha Convent School"
                  className="footer-logo"
                  style={{
                    height: "55px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                    marginBottom: "15px",
                  }}
                />

                <p
                  className="footer-contact-text"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "#0e1011",
                    marginBottom: "15px",
                  }}
                >
                  📍 Ward No 7, Haat Stahal Ke Samne,
                  Nand Lal Ji Badi, Teacher Colony,
                  Kapren, Dist. Bundi (Rajasthan)

                  <br />

                  📞 +91 7339839499 , +91 9782142562

                  <br />

                  ✉️ dishaconventschool2023@gmail.com
                </p>

                {/* ================= SOCIAL LINKS ================= */}

                <div className="footer-socials">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="footer-social-link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Col>

              {/* ================= LINKS ================= */}

              <Col
                lg={4}
                md={6}
                sm={12}
                className="mb-4 footer-links"
              >
                <h5 style={titleStyle}>Useful Links</h5>

                <a href="/" style={linkStyle}>
                  Home
                </a>

                <a href="/about" style={linkStyle}>
                  About Us
                </a>

                <a href="/gallery" style={linkStyle}>
                  Gallery
                </a>

                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Terms Conditions
                </a>
              </Col>

              {/* ================= CONTACT ================= */}

              <Col
                lg={5}
                md={12}
                sm={12}
                className="mb-4 footer-form"
                id="contact"
              >
                <h5 style={titleStyle}>Get In Touch</h5>

                <Form onSubmit={handleContactSubmit}>

                  <Row className="g-2">

                    {/* NAME */}

                    <Col md={6} sm={12}>
                      <Form.Control
                        type="text"
                        name="name"
                        value={contactData.name}
                        onChange={handleContactChange}
                        placeholder="Your Name"
                        style={inputStyle}
                        required
                      />
                    </Col>

                    {/* EMAIL */}

                    <Col md={6} sm={12}>
                      <Form.Control
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleContactChange}
                        placeholder="Email Address"
                        style={inputStyle}
                        required
                      />
                    </Col>

                  </Row>

                  {/* MESSAGE */}

                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    placeholder="How can we help you?"
                    style={inputStyle}
                    required
                  />

                  {/* SUBMIT */}

                  <Button
                    type="submit"
                    disabled={contactLoading}
                    style={{
                      backgroundColor: "#ff6b6b",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px 25px",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow:
                        "0 4px 10px rgba(255, 107, 107, 0.3)",
                      opacity: contactLoading ? 0.7 : 1,
                    }}
                  >
                    {contactLoading
                      ? "Sending..."
                      : "Send Message"}

                    <Send size={16} />
                  </Button>

                  {/* SUCCESS / ERROR */}

                  {contactMessage && (
                    <div
                      style={{
                        marginTop: "12px",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        backgroundColor: contactSuccess
                          ? "#f0fdf4"
                          : "#fef2f2",
                        color: contactSuccess
                          ? "#166534"
                          : "#991b1b",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {contactMessage}
                    </div>
                  )}

                </Form>
              </Col>

            </Row>
          </Container>
        </div>

        {/* ================= COPYRIGHT ================= */}

        <div
          className="footer-copyright"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            padding: "15px",
            fontSize: "13px",
            fontWeight: "bold",
            color: "#000",
            borderTop: "1px solid rgba(0,0,0,0.05)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Disha Convent School.
            All rights reserved
          </p>
        </div>
      </footer>

      {/* ================= RESPONSIVE CSS ================= */}

      <style>
        {`

          /* ================= SOCIAL ICONS ================= */

          .footer-socials {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 15px;
          }

          .footer-social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #061a25;
            background: rgba(255, 255, 255, 0.65);
            border: 1px solid rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
          }

          .footer-social-link:hover {
            transform: translateY(-4px);
            background: #ff6b6b;
            color: #ffffff;
            border-color: #ff6b6b;
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
          }


          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 991px) {

            .footer-glass {
              margin: 0 25px !important;
              padding: 45px 35px !important;
              border-radius: 35px !important;
            }

            .footer-brand {
              margin-bottom: 30px !important;
            }

            .footer-links {
              margin-bottom: 30px !important;
            }

            .footer-form {
              margin-bottom: 20px !important;
            }

          }


          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 767px) {

            footer {
              padding-top: 50px !important;
              padding-bottom: 100px !important;
            }

            .footer-glass {
              margin: 0 15px !important;
              padding: 35px 22px !important;
              border-radius: 28px !important;
            }

            .footer-logo {
              height: 50px !important;
            }

            .footer-brand,
            .footer-links,
            .footer-form {
              width: 100% !important;
              margin-bottom: 30px !important;
            }

            .footer-contact-text {
              font-size: 13px !important;
              line-height: 1.8 !important;
              overflow-wrap: anywhere !important;
              word-break: break-word !important;
            }

            .footer-form .form-control {
              width: 100%;
            }

            .footer-social-link {
              width: 38px;
              height: 38px;
            }

            .footer-copyright {
              padding: 12px 15px !important;
              font-size: 12px !important;
              line-height: 1.5 !important;
            }

          }


          /* =========================================
             SMALL MOBILE
          ========================================= */

          @media (max-width: 480px) {

            footer {
              padding-top: 35px !important;
              padding-bottom: 90px !important;
            }

            .footer-glass {
              margin: 0 10px !important;
              padding: 30px 18px !important;
              border-radius: 22px !important;
            }

            .footer-logo {
              height: 45px !important;
              max-width: 180px !important;
            }

            .footer-glass h5 {
              font-size: 1.15rem !important;
              margin-bottom: 15px !important;
            }

            .footer-contact-text {
              font-size: 12.5px !important;
            }

            .footer-glass a {
              font-size: 13px !important;
              margin-bottom: 9px !important;
            }

            .footer-form button {
              width: 100%;
              justify-content: center;
            }

            .footer-copyright {
              font-size: 11px !important;
              padding: 10px !important;
            }

          }

        `}
      </style>
    </>
  );
}

export default Footer;
