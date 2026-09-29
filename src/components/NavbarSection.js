import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavbarSection() {
  const [scrolled, setScrolled] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = {
    color: scrolled ? "#020405ff" : "#000000ff" ,
    fontWeight: "700",
    fontSize: "15px",
    margin: "0 15px",
    transition: "color 0.3s ease",
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        padding: scrolled ? "10px 0" : "20px 0",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none"
      }}
    >
      <Container>
        {/* LOGO AREA - Playful Typography */}
      <Navbar.Brand
  href="#home"
  style={{
    display: "flex",
    alignItems: "center",
  }}
>
<img
  src="/logo.png"
  alt="Disha Convent School"
  style={{
    height: "55px",
    width: "auto",
    objectFit: "contain",
    background: "transparent",
    mixBlendMode: "multiply",
  }}
/>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link href="#about" style={navLinkStyle}>About</Nav.Link>
            <Nav.Link href="#Facilities" style={navLinkStyle}>Facilities</Nav.Link>
            <Nav.Link href="#gallery" style={navLinkStyle}>Gallery</Nav.Link>
            <Nav.Link href="#contact" style={navLinkStyle}>Contact</Nav.Link>

            {/* ADMISSION BUTTON - Same as SS UI */}
            <Button 
              style={{
                backgroundColor: "#ff6b6b",
                border: "none",
                borderRadius: "50px",
                padding: "10px 25px",
                fontWeight: "700",
                fontSize: "14px",
                marginLeft: "15px",
                boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Admission Open
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;