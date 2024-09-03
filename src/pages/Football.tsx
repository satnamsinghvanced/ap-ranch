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
      
      <section className="football-banner ">
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name">FOOTBALL</h1>
        </div>
          
      </section>

      <section className=" about-apr section-pending">
        <div className="max-width-1000 mx-auto text-center ">
          <p>
            Our mission at AP Ranch is to create a transformative sports
            facility and community dedicated to cultivating and empowering
            student-athletes of all backgrounds and abilities. We strive to
            provide a nurturing environment where INDIVIDUALS can explore their
            passions, develop skills, and unlock their true potential. 
          </p>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-0 ">
            <div className="foodball-img sport-img-box ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
                <h3 className="sport-name-heading">FOOTBALL</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0">
            <div className="basketball-img sport-img-box  ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100 ">
                <h3 className="sport-name-heading">BASKETBALL</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 ">
            <div className="track-img sport-img-box ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
                <h3 className="sport-name-heading">TRACK</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-12  col-md-6 p-0">
            <div className="the-facility-img-box ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100 text-center-md">
                <h3 className="sport-name-heading font-50">the facility</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="incredible-partners">
        <h3 className="incredible-partners-heading text-center">
          our incredible partners
        </h3>

    
      </section>
      
      <Footer />
    </div>
  );
};

export default Football;
