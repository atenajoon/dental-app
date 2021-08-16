import React from "react";
import Banner from "../components/Banner";
import WelcomeSection from "../components/WelcomeSection";
import ContactBar from "../components/ContactBar";
import TestimonialSection from "../components/TestimonialSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  const handleCall = () => {
    console.log("calling");
  };

  const handleAppointment = () => {
    console.log("handleAppointment");
  };

  return (
    <div>
      <Banner />
      <ContactBar onCall={handleCall} onAppointment={handleAppointment} />
      <WelcomeSection />
      <TestimonialSection />
      <ServiceSection />
    </div>
  );
};

export default Home;
