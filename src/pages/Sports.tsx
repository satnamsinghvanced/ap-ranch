import React from "react";
import CustomTittle from "../components/custom-components/custom-title";
import CustomServices from "../components/custom-components/custom-services";
import Footer from "./Footer";
import Header from "../components/layout/header";
import { useParams } from "react-router-dom";
import { useGetServicesByIdQuery } from "../components/apis/servicesApi";
import { apiBaseUrl } from "../components/consts/api-url.const";

const Sports = () => {
  const { id } = useParams<{ id: any }>();
  const { data } = useGetServicesByIdQuery<any>({
    serviceId: id,
  });
  if (!data) {
    return null;
  }
  return (
    <div>
      <Header />

      <section
        className="football-banner"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${apiBaseUrl}/${data?.servicesImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
          marginTop: "-80px",
          padding: "0 16px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name">{data.servicesName}</h1>
        </div>
      </section>

      <section className="sport-contant-us">
        <div className="max-width-1050 mx-auto text-center ">
          <CustomTittle title={data.serviceDescriptions} />
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          {data.images.map((val: any, idx: any) => (
            <div
              className={`${
                data.images.length === 1
                  ? "col-lg-12"
                  : data.images.length === 2
                  ? "col-lg-6"
                  : "col-lg-4"
              } col-md-6 p-0 `}
              key={idx}
            >
              <div
                className="apr-sports-img "
                style={{
                  backgroundImage: `url(${apiBaseUrl}/${val?.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sports-services-section">
        <CustomServices items={data.providedServices} />
      </section>
      <Footer />
    </div>
  );
};

export default Sports;
