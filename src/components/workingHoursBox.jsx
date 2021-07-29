import React from "react";

const WorkingHours = () => {
  return (
    <div className="content-box">
      <h3>Working Hours</h3>
      <p>
        Mon. to Fri. <br /> 10 am to 5 pm
      </p>
      <div className="announcement-box">
        We Do <span className="text-danger">NOT</span> work on Weekends
      </div>
    </div>
  );
};

export default WorkingHours;
