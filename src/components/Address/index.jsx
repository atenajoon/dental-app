import React from "react";
import { Link } from "react-router-dom";

const Address = ({ contactLink }) => {
  return (
    // <div className="d-flex flex-column  justify-content-center">
    <div className="p-3 p-md-4 p-lg-5 d-flex flex-column align-items-center text-sm-center">
      <h3>Location</h3>
      <p>
        236 Marin dr. <br></br>North Vancouver, BC.
      </p>
      {/* <div className="map-icon-image"> */}
      <Link className="map-icon-image" to={contactLink}></Link>
      {/* </div> */}
    </div>
  );
};

export default Address;
