import React from "react";

const WorkingHours = () => {
  return (
    <div className="content-box">
      <h3>Working Hours</h3>
      <p>
        Mon. to Fri. <br /> 10 am to 5 pm
      </p>
      <p>
        We Do <span className="text-danger">NOT</span> work on Weekends
      </p>
    </div>
  );
};

export default WorkingHours;
