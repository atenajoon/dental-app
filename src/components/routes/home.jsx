import React from "react";
import Banner from "../common/banner";
import WelcomeSection from "../welcomeSection";
import ContactBar from "../contactBar";
import TestimonialSection from "../testimonialSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContactBar />
      <WelcomeSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
