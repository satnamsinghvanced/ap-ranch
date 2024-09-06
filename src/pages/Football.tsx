import React from "react";
import CustomTittle from "../components/custom-components/custom-title";
import CustomServices from "../components/custom-components/custom-services";
import Footer from "./Footer";
// import GraphicSection from "../components/custom-components/graphic-section";
import Header from "../components/layout/header";
// import { useGetServicesByIdQuery } from "../components/apis/servicesApi";
import { footballServices } from "../components/consts/const";

const Football = () => {
  // const { data } = useGetServicesByIdQuery<any>({
  //   serviceId: 3,
  // });
  // console.log(data, "datavvv");
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
          <CustomTittle
            title={
              "At AP Ranch, we believe that football is more than just a game; it’s an opportunity to develop important life skills like teamwork, leadership, and perseverance. By providing a supportive and inclusive environment, we aim to help our student athletes grow into confident and well-rounded individuals who are prepared to succeed in all aspects of life."
            }
          />
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
      <CustomServices items={footballServices} />
      </section>
      <Footer />
    </div>
  );
};

export default Football;
