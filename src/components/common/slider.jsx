import React from "react";
import Button from "./button";
import CommentCard from "./commentCard";
import { testimonialSecData } from "../../static/data";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-box">
        {console.log(testimonialSecData)}
        {testimonialSecData.map((review) => (
          <CommentCard key={review.id}>{review.comment}</CommentCard>
        ))}
      </div>
      <Button className="btn--alt">{"More Reviews on Google"}</Button>
    </div>
  );
};

export default Slider;
