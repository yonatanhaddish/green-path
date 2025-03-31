import React from "react";
import HomeLandingPage from "./components/HomeLandingPage";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";

function Home() {
  return (
    <div>
      <HomeLandingPage />
      <AboutUs />
      <ServicesPage />
    </div>
  );
}

export default Home;
