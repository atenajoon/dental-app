import React from "react";
import CommentCard from "./commentCard";

const Slider = () => {
  return (
    <div className="slider-container">
      {" "}
      Slider
      <div className="slider-box">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default Slider;
