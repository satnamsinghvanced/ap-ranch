import React, { useState } from "react";
import footballImage from "../../assets/img/png/football-full-img.png";
import footballCollapseImage from "../../assets/img/png/about-football-img.png";
import basketballImage from "../../assets/img/png/basketball-full-img.png";
import basketballCollapseImage from "../../assets/img/png/about-basketball.png";
import trackImage from "../../assets/img/png/track-full-img.png";
import trackCollapseImage from "../../assets/img/png/about-track-img.png";
import { ROUTES } from "../consts/routes.consts";
import { useNavigate } from "react-router-dom";
import { useGetServicesListQuery } from "../apis/servicesApi";
import { apiBaseUrl } from "../consts/api-url.const";
const accordionData = [
  {
    title: "FOOTBALL",
    description: `At AP Ranch, we believe that football is more than just a game; it’s an opportunity to develop important life skills like teamwork, leadership, and perseverance. By providing a supportive and inclusive environment, we aim to help our student athletes grow into confident and well-rounded individuals who are prepared to succeed in all aspects of life.`,
    services: [
      "Private One-On-One Training",
      "Small Group Training",
      "Offensive Mentorship/Consulting",
      "Film Breakdown/ Game Analysis",
    ],
    image: footballImage,
    collapseImage: footballCollapseImage,
    path: ROUTES.FOOTBALL,
  },
  {
    title: "BASKETBALL",
    description: `Our basketball program offers everything you need - being a one stop shop to success. Working with individual athletes and teams at all levels from beginner to professional. We value & preach accountability, respect, teamwork, skill-work, and the benefit of hard work, both on and off the court. Everything that goes into performing at the highest level in every aspect of life.`,
    services: [
      "Private Sessions",
      "Team Sessions",
      "Large Group Skill Sessions/Camps",
      " Private & Open Hoops Sessions/Runs",
      "Private/Small Group Film Breakdown",
      "Mentorship & Mental Performance Coaching",
      "Closed Pre/Post Season Scrimmages",
    ],
    image: basketballImage,
    collapseImage: basketballCollapseImage,
    path: ROUTES.BASKETBALL,
  },
  {
    title: "TRACK",
    description: `AP Ranch is proud to offer a world-class track club and training, coached by three-time NCAA National Champion Greg Sholars and his team of professional coaches. Athletes will receive an elite-level of training and an unprecedented opportunity to achieve at a level they may have only have dreamed of. We teach our athletes the importance of hard work, dedication, determination and perseverance both in the classroom and on the track. `,
    services: [
      "Off Season Training (September-January)",
      "Indoor Track (January)",
      "Summer Track (April-August)",
    ],
    image: trackImage,
    collapseImage: trackCollapseImage,
    path: ROUTES.TRACK,
  },
];

const AboutAccordions = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { data }: any = useGetServicesListQuery();
  console.log(data, "data");
  if (!data) {
    return null;
  }
  return (
    <>
      {data.map((item: any, index: any) => (
        <div className="col-ms-12 p-0" key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: openIndex === index ? "600px" : "200px",
              backgroundImage: `url(${apiBaseUrl}/${item.service?.servicesImage})`,
              backgroundRepeat: openIndex === index ? "no-repeat" : "no-repeat",
              backgroundSize: openIndex === index ? "cover" : "cover",
              backgroundPosition: "center",
              boxShadow: "inset -20px -20px 0px 300px hsl(0deg 0% 0% / 60%)",
            }}
            className={openIndex === index ? "about-football-banner-open" : ""}
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
              {openIndex === index && (
                <div className="row">
                  <div className="col-lg-6 mt-5">
                    <p className="about-accoridan-text">
                      {item.service?.serviceDescriptions}
                    </p>
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
                        // onClick={() => navigate(item.path)}
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
      ))}
    </>
  );
};

export default AboutAccordions;
