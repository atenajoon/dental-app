import React from "react";

const RatingStars = ({ children }) => {
  return (
    <div className="rating-star-box">
      <small>{children} stars</small>
    </div>
  );
};

export default RatingStars;
