import React from "react";
import { ROUTES } from "../consts/routes.consts";
import logo from "../../assets/img/png/apr-logo.png";
import logo2 from "../../assets/img/png/apr-sx-logo.png";
const Header = () => {
  return (
    <header className="apr-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container apr-navbar">
          <div className="logo-bar">
            <a className="navbar-brand p-0" href={ROUTES.HOME}>
              <img src={logo} alt="" />
            </a>
            <a className="logo-mobile" href={ROUTES.HOME}>
              <img src={logo2} alt="" />
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
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div
            className="collapse navbar-collapse flex-none header-nav"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={ROUTES.ABOUT}
                >
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
                <a
                  className="nav-link "
                  href={ROUTES.FACILITY}
                >
                  The Facility
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                   href={ROUTES.TEAM}
                >
                  The Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  "
                  // href={ROUTES.CONTACT}
                  href={"/"}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="donate-link">
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
