import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FileText, ClipboardCheck, Users, GraduationCap } from "lucide-react";

function AdmissionProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // NEW ADMISSION CONTENT
  const steps = [
    { 
      title: "Registration", 
      icon: <FileText size={40} />, 
      desc: "Fill out the online enquiry form or visit our campus for a prospectus.",
      color: "#eba371", // Peach
      pos: "up", 
      delay: "0s" 
    },
    { 
      title: "Documentation", 
      icon: <ClipboardCheck size={40} />, 
      desc: "Submit the required documents including birth certificate and photos.",
      color: "#465a6d", // Slate Blue
      pos: "down", 
      delay: "0.2s" 
    },
    { 
      title: "Interaction", 
      icon: <Users size={40} />, 
      desc: "A friendly meeting with the child and parents to understand needs.",
      color: "#8cb0b9", // Teal
      pos: "up", 
      delay: "0.4s" 
    },
    { 
      title: "Admission", 
      icon: <GraduationCap size={40} />, 
      desc: "Secure your seat by paying the fees and join the Disha Convent  School family!",
      color: "#fbb040", // Yellow
      pos: "down", 
      delay: "0.6s" 
    },
  ];

  return (
    <section 
      ref={sectionRef}
      style={{ padding: "100px 0", backgroundColor: "#fcfdfe", overflow: "hidden" }}
    >
      <Container style={{ position: "relative" }}>
        
        {/* SECTION HEADER */}
        <div className="text-center mb-5 pb-lg-5">
           <p style={{ color: "#ff6b6b", fontWeight: "700", textTransform: "uppercase", fontSize: "14px", letterSpacing: "1px" }}>
            Step by Step
          </p>
          <h2 style={{ color: "#2c3e50", fontWeight: "900", fontSize: "2.5rem" }}>
            Admission <span style={{ color: "#8cb0b9" }}>Process</span>
          </h2>
        </div>

        {/* THE DASHED LINE PATH */}
        <div className="d-none d-lg-block" style={{
          position: "absolute",
          top: "55%", left: "10%", right: "10%",
          transform: "translateY(-50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
          zIndex: 0
        }}>
          <svg width="100%" height="150" viewBox="0 0 1000 150" preserveAspectRatio="none">
            <path 
              d="M0,75 C150,150 350,0 500,75 C650,150 850,0 1000,75" 
              fill="none" stroke="#dbe9f5" strokeWidth="3" strokeDasharray="10,10"
            />
          </svg>
        </div>

        <Row className="g-0">
          {steps.map((step, index) => (
            <Col key={index} lg={3} md={6} xs={12} className="text-center mb-5 mb-lg-0">
              <div style={{
                transform: `translateY(${isVisible ? (window.innerWidth > 991 ? (step.pos === "up" ? "-30px" : "30px") : "0") : "80px"})`,
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${step.delay}`,
                zIndex: 1,
                position: "relative"
              }}>
                
                {/* ORGANIC BLOB ICON */}
                <div 
                  style={{
                    width: "120px", height: "115px",
                    backgroundColor: step.color,
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", // Signature Egg Shape
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", margin: "0 auto 25px auto",
                    boxShadow: `0 10px 25px ${step.color}44`,
                    transition: "all 0.4s ease"
                  }}
                  className="step-blob"
                >
                  {step.icon}
                  {/* Step Number Circle */}
                  <div style={{
                    position: "absolute",
                    top: "0", right: "100px",
                    width: "35px", height: "35px",
                    backgroundColor: "#ff6b6b",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "14px", fontWeight: "bold",
                    border: "3px solid white"
                  }}>
                    0{index + 1}
                  </div>
                </div>

                <h4 style={{ color: "#465a6d", fontWeight: "800", marginBottom: "15px" }}>{step.title}</h4>
                <p style={{ color: "#7a8a9a", fontSize: "14px", lineHeight: "1.7", maxWidth: "200px", margin: "0 auto" }}>
                  {step.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .step-blob:hover {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </section>
  );
}

export default AdmissionProcess;