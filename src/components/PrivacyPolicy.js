import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarSection from "../components/NavbarSection"; // Adjust path as needed
import Footer from "../components/Footer";

function PrivacyPolicy() {
  const headerStyle = {
    backgroundColor: "#eef7ff",
    padding: "150px 0 80px",
    borderRadius: "0 0 50% 50% / 0 0 15% 15%",
    textAlign: "center",
    marginBottom: "50px"
  };

  const sectionTitleStyle = {
    color: "#465a6d",
    fontWeight: "800",
    marginTop: "30px",
    marginBottom: "15px"
  };

  return (
    <>
     
      
      {/* Playful Header */}
      <div style={headerStyle} id="PrivacyPolicy">
        <Container>
          <h1 style={{ fontWeight: "900", color: "#2c3e50", fontSize: "3rem" }}>
            Privacy <span style={{ color: "#ff6b6b" }}>Policy</span>
          </h1>
          <p style={{ color: "#7a8a9a" }}>Last Updated: March 2026</p>
        </Container>
      </div>

      <Container style={{ paddingBottom: "100px" }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div style={{ color: "#5e6d77", lineHeight: "1.8", fontSize: "16px" }}>
              <p>
                At <strong>Disha Convent School</strong>, accessible from our website, one of our main priorities is the privacy of our visitors and students. This Privacy Policy document contains types of information that is collected and recorded by Disha Convent School and how we use it.
              </p>

              <h4 style={sectionTitleStyle}>1. Information We Collect</h4>
              <p>
                When you fill out our <strong>Admission Enquiry Form</strong>, we collect personal information such as:
              </p>
              <ul>
                <li>Student's Name and Age</li>
                <li>Parent/Guardian Name</li>
                <li>Contact Information (Phone Number, Email)</li>
                <li>Residential Address</li>
              </ul>

              <h4 style={sectionTitleStyle}>2. How We Use Your Information</h4>
              <p>We use the information we collect in various ways, including to:</p>
              <ul>
                <li>Process school admissions and registrations.</li>
                <li>Communicate with you regarding school updates and news.</li>
                <li>Improve our website performance and user experience.</li>
                <li>Maintain safety and security records.</li>
              </ul>

              <h4 style={sectionTitleStyle}>3. Data Security</h4>
              <p>
                We value your trust in providing us your Personal Information. We use commercially acceptable means of protecting it. However, please remember that no method of transmission over the internet is 100% secure.
              </p>

              <div style={{
                backgroundColor: "#fff5f5",
                padding: "25px",
                borderRadius: "20px",
                borderLeft: "5px solid #ff6b6b",
                marginTop: "40px"
              }}>
                <h5 style={{ color: "#ff6b6b", fontWeight: "700" }}>Note for Parents:</h5>
                <p style={{ marginBottom: 0 }}>
                  We do not knowingly collect any Personal Identifiable Information from children under the age of 13 without verifiable parental consent.
                </p>
              </div>

              <h4 style={sectionTitleStyle}>4. Contact Us</h4>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>info@dishaconventschool.com</strong>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default PrivacyPolicy;