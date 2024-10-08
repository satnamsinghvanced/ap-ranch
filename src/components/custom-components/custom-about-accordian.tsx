import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetServicesListQuery } from "../apis/servicesApi";
import { apiBaseUrl } from "../consts/api-url.const";
import DOMPurify from "dompurify";

const AboutAccordions = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { data }: any = useGetServicesListQuery();
  if (!data) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>LOADING...</p>
      </div>
    );
  }
  return (
    <>
      {data.map((item: any, index: any) => {
        const description = DOMPurify.sanitize(
          item.service?.serviceDescriptions,
          {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["target", "rel"],
          }
        );
        return (
          <div className="col-ms-12 p-0" key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: openIndex === index ? "600px" : "200px",
                backgroundImage: `url(${apiBaseUrl}/${item.service?.servicesImage})`,
                backgroundRepeat:
                  openIndex === index ? "no-repeat" : "no-repeat",
                backgroundSize: openIndex === index ? "cover" : "cover",
                backgroundPosition: "center",
                boxShadow: "inset -20px -20px 0px 300px hsl(0deg 0% 0% / 60%)",
              }}
              className={
                openIndex === index ? "about-football-banner-open" : ""
              }
            >
              <div className="container">
                <div
                  className="d-flex align-items-center justify-content-center flex-wrap"
                  onClick={() => toggleAccordion(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h1 className="about-page-accordian">
                    {item.service?.servicesName}
                  </h1>
                  <div className="ms-auto service-icon ">
                    {openIndex !== index ? (
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9995 0.52002C8.3546 0.52002 0.519531 8.35508 0.519531 18C0.519531 27.645 8.3546 35.48 17.9995 35.48C27.6445 35.48 35.4795 27.645 35.4795 18C35.4795 8.35508 27.6445 0.52002 17.9995 0.52002ZM17.9995 2.04002C26.823 2.04002 33.9595 9.17655 33.9595 18C33.9595 26.8235 26.823 33.96 17.9995 33.96C9.17606 33.96 2.03953 26.8235 2.03953 18C2.03953 9.17655 9.17606 2.04002 17.9995 2.04002ZM8.87953 17.24V18.76H27.1195V17.24H8.87953Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="row">
                    <div className="col-lg-6 mt-5">
                      <div
                        dangerouslySetInnerHTML={{ __html: description }}
                        style={{ fontFamily: "Satoshi" }}
                        className="description"
                      />
                    </div>
                    <div className="col-lg-5 mt-5">
                      <div className="about-accoridan-services">
                        <h3 className="about-accoridan-services-heading">
                          Services
                        </h3>
                        <p className="about-accoridan-services-para">
                          {item.providedServices?.map(
                            (service: any, serviceIndex: any) => (
                              <React.Fragment key={serviceIndex}>
                                {service.title}
                                <br />
                              </React.Fragment>
                            )
                          )}
                        </p>
                        <button
                          className="explore-btn-transparent"
                          onClick={() =>
                            navigate(`/sports/${item.service?.id}`)
                          }
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutAccordions;
