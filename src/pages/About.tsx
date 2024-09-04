import React from "react";
import CustomAccordion from "../components/custom-components/custom-accordion";
import Footer from "./Footer";
import Header from "../components/layout/header";
import aboutBanner from "../assets/img/png/about-banner.png"

const About = () => {
  return (
    <div>
      <Header />

          <section className="about-banner">
              <div className="container-fluid">
                <div className="row">
                  
                  <div className="col-lg-6 p-0">
                    <div className="about-page-content ">
                      <h1 className="about-page-heading">ABOUT</h1>
                      <p className="about-page-para">AP Ranch is a transformative sports facility and community dedicated to cultivating and empowering students athletes of all backgrounds and abilities.</p>
                      <p className="about-page-para">We strive to provide a nurturing environment where athletes can explore their passions, develop skills, and unlock their true potential. Through relentless dedication, innovative teaching techniques, and a commitment to fostering character development, and personal growth we aim to inspire our team to push boundaries, overcome challenges, and achieve their highest performance.</p>
                      <p className="about-page-para">Together, we aspire to build a community that celebrates diversity, fosters teamwork, and instills lifelong values of discipline, resilience, and sportsmanship.</p>
                      <p className="about-page-para fw-bold">At AP Ranch, we empower athletes to new heights and define their limits to leave a lasting impact on the world.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 p-0 d-none-lg">
                      <div className="d-flex justify-content-end about-section-img">
                         <img src={aboutBanner} alt="" className="img-fluid" />
                      </div>
                  </div>

                </div>
                
              </div>
          </section>

          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-ms-12 p-0">
                <div className="about-football-banner">
                    <div className="container h-100">
                       <div className="d-flex align-items-center justify-content-center h-100 flex-wrap">
                        <h1 className="about-page-accordian">FOOTBALL</h1>
                        <div className="ms-auto">
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
                        </div>
                       </div>
                    </div>
                </div>

                </div>

                <div className="col-ms-12 p-0">
                <div className="about-basketball-banner">
                    <div className="container h-100">
                       <div className="d-flex align-items-center justify-content-center h-100 flex-wrap">
                        <h1 className="about-page-accordian">basketball</h1>
                        <div className="ms-auto">
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
                        </div>
                       </div>
                    </div>
                </div>

                </div>

                <div className="col-ms-12 p-0">
                <div className="about-track-banner">
                    <div className="container h-100">
                       <div className="d-flex align-items-center justify-content-center h-100 flex-wrap">
                        <h1 className="about-page-accordian">track</h1>
                        <div className="ms-auto">
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
                        </div>
                       </div>
                    </div>
                </div>

                </div>
              </div>

            </div>
          </section>

     
      <Footer />
    </div>
  );
};

export default About;
