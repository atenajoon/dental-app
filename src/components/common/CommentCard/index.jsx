import React from "react";
import RatingStars from "../ratingStars";

const CommentCard = ({ children, stars }) => {
  return (
    <div className="content-box comment-card">
      <RatingStars>{stars}</RatingStars>
      {children}
    </div>
  );
};

export default CommentCard;
