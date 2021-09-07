import React from "react";

const WorkingHours = () => {
  return (
    <div className="p-3 p-md-4 p-lg-5 d-flex flex-column align-items-center text-sm-center">
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
