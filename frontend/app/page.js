import React from "react";
import HomeLandingPage from "./components/HomeLandingPage";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import ContactUsSection from "./components/ContactUsSection";

function Home() {
  return (
    <div>
      <HomeLandingPage />
      <AboutUs />
      <ServicesPage />
      <ContactUsSection />
    </div>
  );
}

export default Home;
