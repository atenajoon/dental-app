import React from "react";
import Header from "./common/header";

const Home = () => {
  return (
    <div>
      <Header />
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
