import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import NavbarSection from "../components/NavbarSection";
import Footer from "../components/Footer";

function TermsConditions() {
  const headerStyle = {
    backgroundColor: "#fff5f5", // Light coral/peach tint
    padding: "150px 0 80px",
    borderRadius: "0 0 50% 50% / 0 0 15% 15%",
    textAlign: "center",
    marginBottom: "50px"
  };

  return (
    <>
     
      
      {/* Playful Header */}
      <div style={headerStyle} id="TermsConditions">
        <Container>
          <h1 style={{ fontWeight: "900", color: "#2c3e50", fontSize: "3rem" }}>
            Terms & <span style={{ color: "#ff6b6b" }}>Conditions</span>
          </h1>
          <p style={{ color: "#7a8a9a" }}>General Guidelines for Parents & Students</p>
        </Container>
      </div>

      <Container style={{ paddingBottom: "100px" }}>
        <Row className="justify-content-center">
          <Col lg={9}>
            <p className="text-center mb-5" style={{ color: "#5e6d77", fontSize: "18px" }}>
              By enrolling your child at <strong>Disha  Convent  School</strong>, you agree to abide by the following rules and regulations designed to ensure a safe and productive learning environment.
            </p>

            <Accordion defaultActiveKey="0" flush className="custom-accordion">
              {/* Admission & Fees */}
              <Accordion.Item eventKey="0" className="mb-3 border rounded-4 overflow-hidden">
                <Accordion.Header>
                  <span style={{ fontWeight: "700", color: "#465a6d" }}>1. Admission & Fee Policy</span>
                </Accordion.Header>
                <Accordion.Body style={{ color: "#5e6d77", lineHeight: "1.8" }}>
                  Admission is granted on a first-come, first-served basis. Fees must be paid by the 10th of every month. A late fee may be applicable after the due date. Please note that registration fees are non-refundable.
                </Accordion.Body>
              </Accordion.Item>

              {/* Attendance */}
              <Accordion.Item eventKey="1" className="mb-3 border rounded-4 overflow-hidden">
                <Accordion.Header>
                  <span style={{ fontWeight: "700", color: "#465a6d" }}>2. Attendance & Punctuality</span>
                </Accordion.Header>
                <Accordion.Body style={{ color: "#5e6d77" }}>
                  Students should reach the school campus 10 minutes before the morning assembly. A minimum of 75% attendance is required for students to be eligible for final examinations.
                </Accordion.Body>
              </Accordion.Item>

              {/* Code of Conduct */}
              <Accordion.Item eventKey="2" className="mb-3 border rounded-4 overflow-hidden">
                <Accordion.Header>
                  <span style={{ fontWeight: "700", color: "#465a6d" }}>3. Code of Conduct</span>
                </Accordion.Header>
                <Accordion.Body style={{ color: "#5e6d77" }}>
                  We expect mutual respect between students, teachers, and parents. Any form of bullying or misconduct will be dealt with strictly. Discipline is the backbone of Disha Convent  School.
                </Accordion.Body>
              </Accordion.Item>

              {/* Health & Safety */}
              <Accordion.Item eventKey="3" className="mb-3 border rounded-4 overflow-hidden">
                <Accordion.Header>
                  <span style={{ fontWeight: "700", color: "#465a6d" }}>4. Health & Safety</span>
                </Accordion.Header>
                <Accordion.Body style={{ color: "#5e6d77" }}>
                  Parents must inform the school of any pre-existing medical conditions. If a child is unwell, we request parents to keep them at home to ensure a speedy recovery and the safety of other children.
                </Accordion.Body>
              </Accordion.Item>

              {/* Withdrawal */}
              <Accordion.Item eventKey="4" className="mb-3 border rounded-4 overflow-hidden">
                <Accordion.Header>
                  <span style={{ fontWeight: "700", color: "#465a6d" }}>5. Withdrawal Policy</span>
                </Accordion.Header>
                <Accordion.Body style={{ color: "#5e6d77" }}>
                  One month's notice is required before withdrawing a student from the school. Transfer certificates will be issued only after all dues are cleared.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div style={{
              marginTop: "50px",
              padding: "30px",
              backgroundColor: "#eef7ff",
              borderRadius: "25px",
              textAlign: "center"
            }}>
              <h5 style={{ fontWeight: "800", color: "#465a6d" }}>Need Clarification?</h5>
              <p style={{ color: "#7a8a9a" }}>If you have any questions regarding these terms, please visit our office during working hours.</p>
              <a href="mailto:contact@dishaconventschool.com" style={{ 
                color: "#ff6b6b", 
                fontWeight: "700", 
                textDecoration: "none",
                fontSize: "1.1rem"
              }}>contact@dishaconventschool.com</a>
            </div>
          </Col>
        </Row>
      </Container>


      <style>{`
        .custom-accordion .accordion-button:not(.collapsed) {
          background-color: #fff5f5;
          color: #ff6b6b;
          box-shadow: none;
        }
        .custom-accordion .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0,0,0,.125);
        }
      `}</style>
    </>
  );
}

export default TermsConditions;