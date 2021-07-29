import React from "react";
import Button from "./button";
import CommentCard from "./commentCard";
import { testimonialSecData } from "../../static/data";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-box">
        {testimonialSecData.map(({ id, comment, stars }) => (
          <CommentCard stars={stars} key={id}>
            {comment}
          </CommentCard>
        ))}
      </div>
      <Button className="btn--alt">{"More Reviews on Google"}</Button>
    </div>
  );
};

export default Slider;
