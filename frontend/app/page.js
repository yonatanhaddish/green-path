import React from "react";
import HomeLandingPage from "./components/HomeLandingPage";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import ContactUsSection from "./components/ContactUsSection";
import WeWorkWith from "./components/WeWorkWith";

function Home() {
  return (
    <div>
      <HomeLandingPage />
      <AboutUs />
      <WeWorkWith />
      <ServicesPage />
      <ContactUsSection />
    </div>
  );
}

export default Home;
