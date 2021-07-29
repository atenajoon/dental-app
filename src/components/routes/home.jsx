import React from "react";
import Banner from "../common/banner";
import WelcomeSection from "../common/welcomeSection";
import ContactBar from "../contactBar";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContactBar />
      <WelcomeSection />
    </div>
  );
};

export default Home;
