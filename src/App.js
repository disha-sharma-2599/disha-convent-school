import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import NavbarSection from "./components/NavbarSection";
import Footer from "./components/Footer";

// Page Components
import Hero from "./components/Hero";
import About from "./components/About";
import MainValues from "./components/MainValues";
import WhatWeOffer from "./components/WhatWeOffer";
import Counters from "./components/Counters";
import AdmissionProcess from "./components/AdmissionProcess";
import PrincipalMessage from "./components/PrincipalMessage";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";

// Legal Pages
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

// 1. The Home Component with Scroll-to-URL Logic
const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Find all divs that have an ID
      const sections = document.querySelectorAll(".scroll-section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if the scroll position is within this section (with 150px offset for Navbar)
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute("id");
        }
      });

      // Update the URL hash without reloading the page
      if (currentSection) {
        window.history.replaceState(null, null, `/#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarSection />
   
      <div id="home" className="scroll-section"><Hero /></div>
      <div id="about" className="scroll-section"><About /></div>
      <div id="offers" className="scroll-section"><WhatWeOffer /></div>
      <div id="stats" className="scroll-section"><Counters /></div>
      <div id="admission" className="scroll-section"><AdmissionProcess /></div>
      <div id="principal" className="scroll-section"><PrincipalMessage /></div>
      <div id="values" className="scroll-section"><MainValues /></div>
      <div id="testimonials" className="scroll-section"><Testimonials /></div>
      <div id="gallery" className="scroll-section"><Gallery /></div>

      
      <Footer />
    </>
  );
};

// 2. Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
