import React from "react";
import Footer from "./Footer";
import Header from "../components/layout/header";
import AboutAccordions from "../components/custom-components/custom-about-accordian";
import { useGetAboutDataQuery } from "../components/apis/aboutApi";
import { apiBaseUrl } from "../components/consts/api-url.const";
import DOMPurify from "dompurify";

const About = () => {
  const { data }: any = useGetAboutDataQuery();
  if (!data) {
    return null;
  }
  const description = DOMPurify.sanitize(data[0]?.descriptions);
  return (
    <div>
      <Header />

      <section className="about-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="about-page-content ">
                <h1 className="about-page-heading">{data[0]?.name}</h1>
                <p className="about-page-para">
                  <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    className="about-page-para"
                  />
                </p>
                {/* <p className="about-page-para">
                  We strive to provide a nurturing environment where athletes
                  can explore their passions, develop skills, and unlock their
                  true potential. Through relentless dedication, innovative
                  teaching techniques, and a commitment to fostering character
                  development, and personal growth we aim to inspire our team to
                  push boundaries, overcome challenges, and achieve their
                  highest performance.
                </p>
                <p className="about-page-para">
                  Together, we aspire to build a community that celebrates
                  diversity, fosters teamwork, and instills lifelong values of
                  discipline, resilience, and sportsmanship.
                </p>
                <p className="about-page-para fw-bold">
                  At AP Ranch, we empower athletes to new heights and define
                  their limits to leave a lasting impact on the world.
                </p> */}
              </div>
            </div>

            <div className="col-lg-6 p-0 d-none-lg">
              <div className="d-flex justify-content-end about-section-img">
                <img
                  src={`${apiBaseUrl}/${data[0]?.image}`}
                  alt=""
                  className="img-fluid"
                  style={{ minHeight: "1066px", minWidth: "626px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "35px" }}>
        <div className="container-fluid">
          <div className="row">
            <AboutAccordions />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
