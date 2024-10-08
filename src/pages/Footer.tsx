import React from "react";
import { ROUTES } from "../components/consts/routes.consts";
import whiteLogo from "../assets/img/png/apr-white-logo.png";
import footerlogo from "../assets/img/png/footer-logo.png";
import { Link } from "react-router-dom";
import { useGetServicesListQuery } from "../components/apis/servicesApi";
import { apiBaseUrl } from "../components/consts/api-url.const";
import { useGetFooterDataQuery } from "../components/apis/footerApi";

const Footer = () => {
  const { data: services }: any = useGetServicesListQuery();
  const { data }: any = useGetFooterDataQuery();
  if (!data) {
    return null;
  }
  return (
    <footer className="apr-footer">
      <div className="container">
        <div className="apr-footer-logo">
          <img src={whiteLogo} alt="" className="img-fluid" />
        </div>
        <div className="footer-logo">
          {/* <img src={footerlogo} alt="" className="img-fluid" /> */}
          <img
            src={`${apiBaseUrl}/${data[0]?.footerLogo}`}
            alt=""
            className="img-fluid"
          />
        </div>

        <div className="footer-content">
          <div className="footer-list-group">
            <ul className="list-style-none d-flex gap-3 flex-wrap">
              <li className="color-gray-custom footer-items">
                <Link to={ROUTES.ABOUT} className="me-3">
                  About
                </Link>
                /
              </li>
              {services?.map((item: any, index: any) => (
                <li className="color-gray-custom footer-items" key={index}>
                  <Link
                    to={`/sports/${item.service?.id}`}
                    key={index}
                    className="me-3 text"
                  >
                    {item.service?.servicesName}
                  </Link>
                  /
                </li>
              ))}
              <li className="color-gray-custom footer-items">
                <Link to={ROUTES.FACILITY} className="me-3">
                  Facility
                </Link>
                /
              </li>
              <li className="color-gray-custom footer-items">
                <Link to={ROUTES.TEAM} className="me-3">
                  Our Team
                </Link>
                /
              </li>
              <li className="color-gray-custom footer-items">
                <Link to={ROUTES.DONATE} className="me-3">
                  Donate
                </Link>
                /
              </li>
              <li className="footer-items">
                <Link to={ROUTES.CONTACT} className="me-3">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="media-link">
            {/* <div>
              <a href="/#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2399 1.92004C5.65112 1.92004 1.91992 5.65124 1.91992 10.24V21.76C1.91992 26.3488 5.65112 30.08 10.2399 30.08H21.7599C26.3487 30.08 30.0799 26.3488 30.0799 21.76V10.24C30.0799 5.65124 26.3487 1.92004 21.7599 1.92004H10.2399ZM23.6799 7.04004C24.3839 7.04004 24.9599 7.61604 24.9599 8.32004C24.9599 9.02404 24.3839 9.60004 23.6799 9.60004C22.9759 9.60004 22.3999 9.02404 22.3999 8.32004C22.3999 7.61604 22.9759 7.04004 23.6799 7.04004ZM15.9999 8.96004C19.8847 8.96004 23.0399 12.1152 23.0399 16C23.0399 19.8848 19.8847 23.04 15.9999 23.04C12.1151 23.04 8.95992 19.8848 8.95992 16C8.95992 12.1152 12.1151 8.96004 15.9999 8.96004ZM15.9999 10.24C12.8255 10.24 10.2399 12.8256 10.2399 16C10.2399 19.1744 12.8255 21.76 15.9999 21.76C19.1743 21.76 21.7599 19.1744 21.7599 16C21.7599 12.8256 19.1743 10.24 15.9999 10.24Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </a>
            </div>

            <div className="ms-1">
              <a href="/#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9999 1.92004C8.22392 1.92004 1.91992 8.22404 1.91992 16C1.91992 23.0592 7.11992 28.8877 13.8956 29.906V19.7319H10.4121V16.0308H13.8956V13.568C13.8956 9.4906 15.8822 7.70052 19.271 7.70052C20.894 7.70052 21.7522 7.82084 22.1586 7.87588V11.1066H19.847C18.4082 11.1066 17.9058 12.4704 17.9058 14.0077V16.0308H22.1222L21.55 19.7319H17.9058V29.936C24.7782 29.0036 30.0799 23.1277 30.0799 16C30.0799 8.22404 23.7759 1.92004 15.9999 1.92004Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </a>
            </div>

            <div className="ms-1">
              <a href="/#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.04006 2.56006C4.56582 2.56006 2.56006 4.56582 2.56006 7.04006V24.9601C2.56006 27.4343 4.56582 29.4401 7.04006 29.4401H24.9601C27.4343 29.4401 29.4401 27.4343 29.4401 24.9601V7.04006C29.4401 4.56582 27.4343 2.56006 24.9601 2.56006H7.04006ZM8.37506 8.32006H13.4551L17.0626 13.4463L21.4401 8.32006H23.0401L17.7851 14.4726L24.2651 23.6801H19.1863L15.0001 17.7326L9.92006 23.6801H8.32006L14.2776 16.7063L8.37506 8.32006ZM10.8251 9.60006L19.8538 22.4001H21.8151L12.7863 9.60006H10.8251Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </a>
            </div> */}
            {data[0]?.mediaLinks.map(
              (
                val: { link: string | undefined; logo: string | undefined },
                idx: React.Key | null | undefined
              ) => (
                <div className="m-1" key={idx}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    <img
                      src={`${apiBaseUrl}/${val.logo}`}
                      alt=""
                      height={28}
                      width={28}
                      style={{ borderRadius: "4px" }}
                    />
                  </a>
                </div>
              )
            )}
          </div>
          <div>
            <p className="apr-copyright">
              {/* © 2024 — AP Ranch Copyright */}
              {data[0]?.footerTxt}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
