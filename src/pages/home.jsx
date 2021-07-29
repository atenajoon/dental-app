import React from "react";
import Banner from "../components/banner";
import WelcomeSection from "../components/welcomeSection";
import ContactBar from "../components/contactBar";
import TestimonialSection from "../components/testimonialSection";
import ServiceSection from "../components/serviceSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContactBar />
      <WelcomeSection />
      <TestimonialSection />
      <ServiceSection />
    </div>
  );
};

export default Home;
