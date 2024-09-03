import React from "react";
import CustomTittle from "../components/custom-components/custom-title";
import CustomServices from "../components/custom-components/custom-services";
import Footer from "./Footer";
import GraphicSection from "../components/custom-components/graphic-section";
import Header from "../components/layout/header";

const Football = () => {
  return (
    <div>
      <Header />
      
      <section className="football-banner">
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name">FOOTBALL</h1>
        </div>
      </section>

      <section className="sport-contant-us">
        <div className="max-width-1050 mx-auto text-center ">
          <p>
          At <b>AP Ranch,</b> we believe that football is more than just a game; it’s an opportunity to develop important life skills like teamwork, leadership, and perseverance. By providing a supportive and inclusive environment, we aim to help our student athletes grow into confident and well-rounded individuals who are prepared to succeed in all aspects of life. 
          </p>
          <button className="contact-white-btn">
            CONTACT
          </button>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-0 ">
            <div className="sport-img-1 apr-sports-img "></div>
          </div>

          <div className="col-lg-4 col-md-6 p-0 border-x-5 d-done-sm">
            <div className="sport-img-2 apr-sports-img  "> </div>
          </div>

          <div className="col-lg-4 col-md-12 p-0  d-done-sm">
            <div className="sport-img-3 apr-sports-img "></div>
          </div>
        </div>
      </section>


      <section className="sports-services-section">
        <div className="container">
          <div>
               <h1 className="sport-services-heading">Services</h1>
          </div>

          <div className="sport-services-accordion">

            <div className="d-flex  justify-content-between mb-3">
              <p className="sport-services-text">Private One On One Training</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <p className="sport-services-text">small group training</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

            <div className="d-flex  justify-content-between mt-4">
              <p className="sport-services-text">offensive mentorship & consulting</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

            <div className="d-flex  justify-content-between mt-4">
              <p className="sport-services-text">film breakdown and game analysis</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

          </div>

        </div>
          
      </section>

      <section className="sport-contant-us">
        <div className="max-width-1050 mx-auto text-center ">
          <p>
          At <b>AP Ranch,</b> we believe that football is more than just a game; it’s an opportunity to develop important life skills like teamwork, leadership, and perseverance. By providing a supportive and inclusive environment, we aim to help our student athletes grow into confident and well-rounded individuals who are prepared to succeed in all aspects of life. 
          </p>
          <button className="contact-white-btn">
            CONTACT
          </button>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-0 ">
            <div className="sport-img-1 apr-sports-img "></div>
          </div>

          <div className="col-lg-4 col-md-6 p-0 border-x-5 d-done-sm">
            <div className="sport-img-2 apr-sports-img  "> </div>
          </div>

          <div className="col-lg-4 col-md-12 p-0  d-done-sm">
            <div className="sport-img-3 apr-sports-img "></div>
          </div>
        </div>
      </section>


      <section className="sports-services-section">
        <div className="container">
          <div>
               <h1 className="sport-services-heading">Services</h1>
          </div>

          <div className="sport-services-accordion">

            <div className="d-flex  justify-content-between mb-3">
              <p className="sport-services-text">Private One On One Training</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <p className="sport-services-text">small group training</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

            <div className="d-flex  justify-content-between mt-4">
              <p className="sport-services-text">offensive mentorship & consulting</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

            <div className="d-flex  justify-content-between mt-4">
              <p className="sport-services-text">film breakdown and game analysis</p>
              <div>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0C8.51637 0 0 8.51637 0 19C0 29.4836 8.51637 38 19 38C29.4836 38 38 29.4836 38 19C38 8.51637 29.4836 0 19 0ZM19 1.65217C28.5907 1.65217 36.3478 9.40928 36.3478 19C36.3478 28.5907 28.5907 36.3478 19 36.3478C9.40928 36.3478 1.65217 28.5907 1.65217 19C1.65217 9.40928 9.40928 1.65217 19 1.65217ZM18.1739 9.08696V18.1739H9.08696V19.8261H18.1739V28.913H19.8261V19.8261H28.913V18.1739H19.8261V9.08696H18.1739Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>

          </div>

        </div>
          
      </section>
      
      <Footer />
    </div>
  );
};

export default Football;
