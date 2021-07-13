import React from "react";

const Navbar = () => {
  return (
    <nav className=" navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i
            width="30"
            height="24"
            className="fa fa-diamond d-inline-block align-text-top"
          />
          <span className="logo-text"> Dental-App</span>
        </a>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarText"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
