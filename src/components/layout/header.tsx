import React from "react";
import { ROUTES } from "../consts/routes.consts";
import logo from "../../assets/img/png/apr-logo.png";
const Header = () => {
  return (
    <header className="apr-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container apr-navbar">
          <div className="logo-bar">
            <a className="navbar-brand p-0" href={ROUTES.HOME}>
              <img src={logo} alt="" />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-none" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.ABOUT}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.FOOTBALL}>
                  Football
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={ROUTES.BASKETBALL}>
                  Basketball
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href={ROUTES.TRACK}>
                  Track
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href={ROUTES.FACILITY}>
                  The Facility
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href={ROUTES.TEAM}>
                  The Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href={ROUTES.CONTACT}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="donate-btn btn">
              <a className="nav-link  " href={ROUTES.DONATE}>
                DONATE
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
