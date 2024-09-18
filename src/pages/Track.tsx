import React from "react";
import CustomServices from "../components/custom-components/custom-services";
import CustomTittle from "../components/custom-components/custom-title";
// import GraphicSection from "../components/custom-components/graphic-section";
import Footer from "./Footer";
import Header from "../components/layout/header";
// import { useGetServicesByIdQuery } from "../components/apis/servicesApi";
import { TrackServices } from "../components/consts/const";

const Track = () => {
  // const { data } = useGetServicesByIdQuery<any>({
  //   serviceId: 4,
  // });
  return (
    <div>
      <section className="track-banner">
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name">track</h1>
        </div>
      </section>

      <section className="sport-contant-us">
        <div className="max-width-1050 mx-auto text-center ">
          <CustomTittle
            title={
              "AP Ranch is proud to offer a world-class track club and training, coached by three-time NCAA National Champion Greg Sholars and his team of professional coaches. Athletes will receive an elite-level of training and an unprecedented opportunity to achieve at a level they may have only have dreamed of. We teach our athletes the importance of hard work, dedication, determination and perseverance both in the classroom and on the track. "
            }
          />
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-0 ">
            <div className="track-img-1 apr-sports-img "></div>
          </div>

          <div className="col-lg-4 col-md-6 p-0 border-x-5 d-done-sm">
            <div className="track-img-2 apr-sports-img  "> </div>
          </div>

          <div className="col-lg-4 col-md-12 p-0  d-done-sm">
            <div className="track-img-3 apr-sports-img "></div>
          </div>
        </div>
      </section>

      <section className="sports-services-section">
        <CustomServices items={TrackServices} />
      </section>
    </div>
  );
};

export default Track;
