import React from "react";
import HomeLandingPage from "./components/HomeLandingPage";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import ContactUsSection from "./components/ContactUsSection";
import WeWorkWith from "./components/WeWorkWith";
import Footer from "./components/Footer";

import OurPartnersSection from "./components/OurPartnersSection";
import AboutUsSection from "./components/AboutUsSection";
import OurServiceSection from "./components/OurServiceSection";
import OurPartners from "./components/OurPartners";
import WhyChooseUs from "./components/WhyChooseUs";

function Home() {
  return (
    <>
      <OurPartnersSection />
      <AboutUsSection />
      <OurServiceSection />
      <OurPartners />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default Home;

{
  /* <HomeLandingPage />
<AboutUs />
<WeWorkWith />
<ServicesPage />
<ContactUsSection /> */
}
