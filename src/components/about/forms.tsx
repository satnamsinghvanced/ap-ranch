import React from "react";
import Header from "../layout/header";
import Footer from "../../pages/Footer";

const Forms = () => {
  return (
    <div>
      <div>
        <Header />
        <section className="about-banner ">
          <div className="container-fluid mb-4">
            <div className="row">
              <div className="col-lg-6 p-0  our-missions-page">
                <div className="our-missions-page-content ">
                  <h1 className="about-collabrate-question">
                    REGISTRATION NOW OPEN!!!
                  </h1>
                  <ul style={{ listStyleType: "num" }}>
                    <li className="about-page-para">
                      Fill out the registration form.
                    </li>
                    <li className="about-page-para">
                      Fill out the Indemnity waiver form.
                    </li>
                    <li className="about-page-para">
                      Make payment for selected training, payments can be paid
                      online at www.apranch.org under “donate”
                    </li>
                  </ul>
                  <p className="about-page-para mt-5">
                    **Scholarships and grants are also available**
                  </p>
                  <p className="about-collabrate-question  mt-5">
                    AP RANCH Sports AND TRAINING WORKOUTS
                  </p>
                  <p className="about-collabrate-question  mt-3">
                    Training Days :
                  </p>
                  <p className="about-page-para  mt-3">
                    Monday -Thursday 2:00pm-9:00pm
                  </p>
                  <p className="about-page-para  mt-3">
                    Saturday 10:00am-3:00pm
                  </p>
                  <p className="about-page-para  mt-3">Sunday: Per Request</p>
                  <p className="about-page-para  mt-3">
                    Contact Coach Kae to schedule training: coachkae@apranch.org
                  </p>
                  <p className="about-page-para  mt-3">
                    Location: 1590 RM 2871 Fort Worth, TX 76126
                  </p>
                </div>
              </div>

              <div className="col-lg-5 p-0 our-missions-page  ">
                <div
                  className="d-flex justify-content-center flex-wrap "
                  style={{ gap: "20px" }}
                >
                  <button
                    className="form-white-btn"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    Indemnity Agreement
                  </button>
                  <button className="form-white-btn">
                    Parent's Code of Conduct Agreement
                  </button>
                  <button className="form-white-btn">
                    Scholarship Application
                  </button>
                  <button className="form-white-btn">Grant Application</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Forms;
