import React, { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = forwardRef((props, ref) => {
  return (
    <nav
      ref={ref}
      id="nav"
      className=" navbar navbar-dark sticky-top navbar-expand-lg"
    >
      <div className="container-fluid">
        <Link className="navbar-brand myLogo nav-link" to="/">
          <i
            width="30"
            height="24"
            className="fa fa-diamond d-inline-block align-text-top"
          />
          <span className="navbar-brand mb-0 h1 logo-text">
            Dimond Dental-App
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Header;
