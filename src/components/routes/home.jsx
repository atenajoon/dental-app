import React from "react";
import Banner from "../common/banner";
import WelcomeSection from "../welcomeSection";
import ContactBar from "../contactBar";
import TestimonialSection from "../testimonialSection";
import ServiceSection from "../serviceSection";

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
