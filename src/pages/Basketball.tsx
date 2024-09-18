// import { useGetServicesByIdQuery } from "../components/apis/servicesApi";
import { basketballServices } from "../components/consts/const";
import CustomServices from "../components/custom-components/custom-services";
import CustomTittle from "../components/custom-components/custom-title";
import Header from "../components/layout/header";
import Footer from "./Footer";

const Basketball = () => {
  // const { data } = useGetServicesByIdQuery<any>({
  //   serviceId: 4,
  // });

  return (
    <div>
      <section className="basketball-banner">
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name">Basketball</h1>
        </div>
      </section>
      <section className="sport-contant-us">
        <div className="max-width-1050 mx-auto text-center ">
          <CustomTittle
            title={
              "Our basketball program offers everything you need - being a one stop shop to success. Working with individual athletes and teams at all levels from beginner to professional. We value & preach accountability, respect, teamwork, skillwork, and the benefit of hard work, both on and off the court - Everything that goes into performing at the highest level in every aspect of life. Our goal and mission is to create the complete student athlete, one player at a time! "
            }
          />
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-0 ">
            <div className="basketball-img-1 apr-sports-img "></div>
          </div>

          <div className="col-lg-4 col-md-6 p-0 border-x-5 d-done-sm">
            <div className="basketball-img-2 apr-sports-img  "> </div>
          </div>

          <div className="col-lg-4 col-md-12 p-0  d-done-sm">
            <div className="basketball-img-3 apr-sports-img "></div>
          </div>
        </div>
      </section>

      <section className="sports-services-section">
        <CustomServices items={basketballServices} />
      </section>
    </div>
  );
};

export default Basketball;
