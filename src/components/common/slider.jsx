import React from "react";
import Button from "./button";
import CommentCard from "./commentCard";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-box">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
      <Button className="btn--alt">{"More Reviews on Google"}</Button>
    </div>
  );
};

export default Slider;
