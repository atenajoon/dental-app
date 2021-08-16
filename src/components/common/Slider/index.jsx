import React from "react";
import Button from "../Button";
import CommentCard from "../../CommentCard";
import { testimonialSecData } from "../../../static/data";

const Slider = ({ onGoogleClick }) => {
  return (
    <div className="slider-container">
      <div className=" d-flex justify-content-between slider-box">
        {testimonialSecData.map(({ id, comment, stars }) => (
          <CommentCard stars={stars} key={id}>
            {comment}
          </CommentCard>
        ))}
      </div>
      <Button onClick={onGoogleClick} className="btn--alt">
        {"More Reviews on Google"}
      </Button>
    </div>
  );
};

export default Slider;
