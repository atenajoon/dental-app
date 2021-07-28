import React from "react";
import Banner from "./common/banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="navbar bg-black">
        {" "}
        Call us at (604) 777-0343 or Book an appointment
      </div>
      <h1>Home</h1>
      <button className="btn btn-danger sm">Delete</button>
    </div>
  );
};

export default Home;
