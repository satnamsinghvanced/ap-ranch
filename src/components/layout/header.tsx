import React, { useState } from "react";
import { ROUTES } from "../consts/routes.consts";
// import logo from "../../assets/img/png/apr-logo.png";
import logo2 from "../../assets/img/png/apr-sx-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useGetServicesListQuery } from "../apis/servicesApi";
import { useGetHeaderDataQuery } from "../apis/headerApi";
import { apiBaseUrl } from "../consts/api-url.const";
import { useCreateSearchMutation } from "../apis/searchApi";
import DOMPurify from "dompurify";
const Header = () => {
  debugger;
  const { data }: any = useGetHeaderDataQuery();
  const location = useLocation();
  const teamMemberPattern = new RegExp(`^${ROUTES.TEAM}|/team/\\d+`, "i");
  const isActive = (path: any) => {
    return location.pathname === path;
  };
  const { data: services }: any = useGetServicesListQuery();
  const [search] = useCreateSearchMutation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSportsVisible, setSportsVisible] = useState(false);
  const [searchField, setSearchField] = useState(false);
  const [searchOpenField, setSearchOpenField] = useState(false);
  const [searchValue, setSearchValue] = useState<any>("");
  const [searchedValue, setSearchedValue] = useState<any>();
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
  const handleServiceClick = () => {
    // Close the mobile menu by targeting the collapse element
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse?.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };
  const handleSearchOpen = () => {
    setSearchField(!searchField);
  };
  const handleResponsiveSearchOpen = () => {
    setSearchOpenField(!searchOpenField);
  };
  const handleSearchChange = async (event: any) => {
    setSearchValue(event.target.value);
    try {
      const res = await search({ searchTerm: event.target.value }).unwrap();
      setSearchedValue(res);
    } catch (error: any) {}
  };

  if (!data) {
    return null;
  }
  return (
    <header className="apr-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container apr-navbar" style={{ position: "relative" }}>
          <div className="logo-bar mt-2">
            <Link to={ROUTES.HOME} className="navbar-brand p-0">
              {/* <img src={logo} alt="" /> */}
              <img src={`${apiBaseUrl}/${data[0]?.headerLogo}`} alt="" />
            </Link>
            <Link
              to={ROUTES.HOME}
              className="logo-mobile"
              onClick={handleServiceClick}
            >
              <img src={logo2} alt="" />
              {/* <img src={`${apiBaseUrl}/${data[0]?.headerLogo}`} alt="" /> */}
            </Link>
          </div>

          <div
            style={{
              position: "relative",
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {searchOpenField === true && (
              <div>
                <div
                  className="input-group input-group-sm"
                  style={{
                    position: "absolute",
                    width: "60%",
                    left: "23px",
                    bottom: "-3px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{
                      border: "1px solid #164576",
                      borderRadius: "70px",
                    }}
                    onChange={handleSearchChange}
                    value={searchValue}
                  />
                </div>
                {searchedValue && (
                  <div
                    style={{
                      position: "absolute",
                      zIndex: 999,
                      background: "white",
                      boxShadow: "0px 2px 20px 0px #0000003d",
                      borderRadius: "8px",
                      top: "36px",
                      left: "24px",
                      width: "60%",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      maxHeight: "500px",
                      overflow: "auto",
                    }}
                  >
                    {searchedValue.data?.length !== 0 ? (
                      <>
                        {searchedValue.data?.map((val: any, idx: any) => {
                          const description = DOMPurify.sanitize(val.content);
                          return (
                            <div
                              style={{
                                borderBottom: " 1px solid black",
                                padding: " 0 0 15px 0",
                                cursor: "pointer",
                              }}
                            >
                              <Link
                                key={idx}
                                to={val.page_name}
                                style={{ color: "#000000" }}
                              >
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: description,
                                  }}
                                  className="search-list"
                                  style={{
                                    fontFamily: "Satoshi",
                                    color: "#000000",
                                    maxWidth: "170px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "block",
                                  }}
                                />
                              </Link>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <p style={{ padding: "16px", textAlign: "center" }}>
                        No match found
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
            <button
              className="navbar-toggler"
              onClick={handleResponsiveSearchOpen}
            >
              <span>
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
            </button>
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
          </div>

          <div
            className="collapse navbar-collapse flex-none header-nav"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li
                className={`nav-item ${
                  isActive(ROUTES.OUR_MISSION) ||
                  isActive(ROUTES.FORM) ||
                  isActive(ROUTES.ABOUT)
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
                  Who We Are
                  {isDropdownVisible && (
                    <div className="dropdown-menu">
                      <ul>
                        <Link
                          to={ROUTES.ABOUT}
                          className="nav-link"
                          onClick={handleServiceClick}
                        >
                          About
                        </Link>
                        <Link
                          to={ROUTES.OUR_MISSION}
                          className="nav-link"
                          onClick={handleServiceClick}
                        >
                          OUR MISSION
                        </Link>
                        <Link
                          to={ROUTES.FORM}
                          className="nav-link"
                          onClick={handleServiceClick}
                        >
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
                onClick={handleServiceClick}
              >
                <Link to={ROUTES.COLLABORATE} className="nav-link">
                  Collaborate
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname.startsWith("/sports") ? "active" : ""
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
                  {isSportsVisible && (
                    <div className="dropdown-menu">
                      <ul>
                        {services?.map((item: any, index: any) => (
                          <Link
                            to={`/sports/${item.service?.id}`}
                            className={`nav-link ${
                              isActive(`/sports/${item.service?.id}`)
                                ? "active"
                                : ""
                            }`}
                            key={index}
                            onClick={handleServiceClick}
                          >
                            {item.service?.servicesName}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.FACILITY) ? "active" : ""
                }`}
                onClick={handleServiceClick}
              >
                <Link to={ROUTES.FACILITY} className="nav-link">
                  The Facility
                </Link>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.TEAM) ||
                  teamMemberPattern.test(location.pathname)
                    ? "active"
                    : ""
                }`}
                onClick={handleServiceClick}
              >
                <Link to={ROUTES.TEAM} className="nav-link">
                  The Team
                </Link>
              </li>
              <li
                className={`nav-item ${
                  isActive(ROUTES.CONTACT) ? "active" : ""
                }`}
                onClick={handleServiceClick}
              >
                <Link to={ROUTES.CONTACT} className="nav-link">
                  Contact
                </Link>
              </li>
              <li
                className={`nav-item ${isActive("") ? "active" : ""}`}
                onClick={handleServiceClick}
                // style={{
                //   borderRadius: "50px",
                //   color: "#164576",
                //   fontWeight: 900,
                //   textDecoration: "underline",
                // }}
              >
                <Link
                  target="_blank"
                  to={"https://student.apranch.org/"}
                  style={{
                    borderRadius: "50px",
                    color: "#164576",
                    fontWeight: 900,
                    textDecoration: "underline",
                  }}
                  className="nav-link"
                >
                  LOGIN
                </Link>
                {/* <p className="nav-link m-0">Login</p> */}
              </li>
              <div className="search-button">
                {searchField === true && (
                  <div
                    className="input-group input-group-sm "
                    style={{
                      position: "absolute",
                      width: "20%",
                      left: "67%",
                      top: "55px",
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      style={{
                        border: "1px solid #164576",
                        borderRadius: "70px",
                      }}
                      onChange={handleSearchChange}
                      value={searchValue}
                    />
                  </div>
                )}
                <button
                  type="button"
                  className="nav-item btn"
                  style={{
                    height: "35.5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={handleSearchOpen}
                >
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
                </button>
              </div>

              <li
                className={`nav-item ${
                  isActive(ROUTES.DONATE) ? "active" : ""
                } donate-button`}
                onClick={handleServiceClick}
              >
                <Link to={ROUTES.DONATE} className="nav-link">
                  DONATE
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
