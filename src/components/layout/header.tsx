import React, { useState } from "react";
import { ROUTES } from "../consts/routes.consts";
import logo from "../../assets/img/png/apr-logo.png";
import logo2 from "../../assets/img/png/apr-sx-logo.png";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSportsVisible, setSportsVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const handleSportsMouseEnter = () => {
    setSportsVisible(true);
  };

  const handleSportsMouseLeave = () => {
    setSportsVisible(false);
  };
  return (
    <header className="apr-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container apr-navbar">
          <div className="logo-bar mt-2">
            <Link to={ROUTES.HOME} className="navbar-brand p-0">
              <img src={logo} alt="" />
            </Link>
            <Link to={ROUTES.HOME} className="logo-mobile">
              <img src={logo2} alt="" />
            </Link>
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
            <span className="menu-mobile">
              <span className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M13 13L10.6667 10.6667M12.3333 6.66667C12.3333 9.79628 9.79628 12.3333 6.66667 12.3333C3.53705 12.3333 1 9.79628 1 6.66667C1 3.53705 3.53705 1 6.66667 1C9.79628 1 12.3333 3.53705 12.3333 6.66667Z"
                    stroke="#707070"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M1 7H19M1 1H19M7 13H19"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div
            className="collapse navbar-collapse flex-none header-nav"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li
                className={`nav-item ${
                  isActive(ROUTES.OUR_MISSION) || isActive(ROUTES.FORM)
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="nav-link"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  About
                  {/* <DropdownMenu /> */}
                  {isDropdownVisible && (
                    <div className="dropdown-menu">
                      <ul>
                        <Link to={ROUTES.OUR_MISSION} className="nav-link">
                          OUR MISSION
                        </Link>
                        <Link to={ROUTES.FORM} className="nav-link">
                          FORMS
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.COLLABORATE) ? "active" : ""
                }`}
              >
                <Link to={ROUTES.COLLABORATE} className="nav-link">
                  Collaborate
                </Link>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.FOOTBALL) ||
                  isActive(ROUTES.BASKETBALL) ||
                  isActive(ROUTES.TRACK)
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="nav-link"
                  onMouseEnter={handleSportsMouseEnter}
                  onMouseLeave={handleSportsMouseLeave}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  Sports
                  {/* <DropdownMenu /> */}
                  {isSportsVisible && (
                    <div className="dropdown-menu">
                      <ul>
                        <Link to={ROUTES.FOOTBALL} className="nav-link">
                          Football
                        </Link>
                        <Link to={ROUTES.BASKETBALL} className="nav-link">
                          Basketball
                        </Link>
                        <Link to={ROUTES.TRACK} className="nav-link">
                          Track
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              {/* <li
                className={`nav-item ${
                  isActive(ROUTES.FOOTBALL) ? "active" : ""
                }`}
              >
                <Link to={ROUTES.FOOTBALL} className="nav-link">
                  Football
                </Link>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.BASKETBALL) ? "active" : ""
                }`}
              >
                <Link to={ROUTES.BASKETBALL} className="nav-link">
                  Basketball
                </Link>
              </li>
              <li
                className={`nav-item ${isActive(ROUTES.TRACK) ? "active" : ""}`}
              >
                <Link to={ROUTES.TRACK} className="nav-link">
                  Track
                </Link>
              </li> */}
              <li
                className={`nav-item ${
                  isActive(ROUTES.FACILITY) ? "active" : ""
                }`}
              >
                <Link to={ROUTES.FACILITY} className="nav-link">
                  The Facility
                </Link>
              </li>
              <li
                className={`nav-item ${isActive(ROUTES.TEAM) ? "active" : ""}`}
              >
                <Link to={ROUTES.TEAM} className="nav-link">
                  The Team
                </Link>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.CONTACT) ? "active" : ""
                }`}
              >
                <Link to={ROUTES.CONTACT} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="donate-link">
            <button className="donate-btn btn">
              <Link to={ROUTES.DONATE} className="nav-link">
                DONATE
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
