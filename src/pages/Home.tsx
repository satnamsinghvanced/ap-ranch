import { ROUTES } from "../components/consts/routes.consts";
import { useNavigate } from "react-router-dom";
import { useGetHomeDataQuery } from "../components/apis/homeAPi";
import { apiBaseUrl } from "../components/consts/api-url.const";
import DOMPurify from "dompurify";
import { useGetServicesListQuery } from "../components/apis/servicesApi";
import { useGetFacilitiesDataQuery } from "../components/apis/facilityApi";
const Home = () => {
  const navigate = useNavigate();
  const { data }: any = useGetHomeDataQuery();
  const { data: services }: any = useGetServicesListQuery();
  const { data: facilities }: any = useGetFacilitiesDataQuery();
  if (!data) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>LOADING...</p>
      </div>
    );
  }
  if (!services) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>LOADING...</p>
      </div>
    );
  }
  if (!facilities) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>LOADING...</p>
      </div>
    );
  }
  const description = DOMPurify.sanitize(data[0].banner.descriptions);
  return (
    <section className="apr-main-section">
      <section
        className="apr-banner"
        style={{
          background: `linear-gradient(180deg, rgba(22, 20, 21, 0) 0%, #161415 100%), url(${apiBaseUrl}/${data[0].banner.bannerImage})`,
          backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
          marginTop: "-80px",
          padding: "0 16px",
        }}
      >
        <div className="d-flex justify-content-center w-100 align-items-center h-100 ">
          <img
            src={`${apiBaseUrl}/${data[0].banner.logoImage}`}
            alt=""
            className="img-fluid"
            style={{ maxHeight: "231px" }}
          />
        </div>
      </section>

      <section className=" about-apr section-padding pb-2">
        <div className="max-width-1050 mx-auto text-center ">
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="home-description"
            style={{ fontFamily: "Satoshi" }}
          />
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          {services.map((item: any, index: any) => (
            <div
              className={`${
                services.length === 1
                  ? "col-lg-12"
                  : services.length === 2
                  ? "col-lg-6"
                  : "col-lg-4"
              } col-md-6 p-0 explore-section`}
              key={index}
            >
              <div
                className="sport-img-box "
                style={{
                  boxShadow:
                    "inset -20px -20px 0px 400px hsl(0deg 0% 0% / 60%)",
                  backgroundImage: `url(${apiBaseUrl}/${item.service?.servicesImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="d-flex align-items-center justify-content-center flex-column h-100 position-absolute w-100 top-0">
                  <h3 className="sport-name-heading">
                    {item.service?.servicesName}
                  </h3>
                  <button
                    className="explore-btn  mt-4"
                    onClick={() => navigate(`/sports/${item.service?.id}`)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12  col-md-6 p-0 explore-section">
            <div
              className="the-facility-img-box "
              style={{
                boxShadow: "inset -20px -20px 0px 400px hsl(0deg 0% 0% / 60%)",
                backgroundImage: `url(${apiBaseUrl}/${facilities[0]?.image})`,
              }}
            >
              <div className="d-flex align-items-center justify-content-center flex-column h-100 text-center-md position-absolute w-100 top-0">
                <h3 className="sport-name-heading font-50">
                  {facilities[0]?.name}
                </h3>
                <button
                  className="explore-btn  mt-4"
                  onClick={() => navigate(ROUTES.FACILITY)}
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="incredible-partners">
        <h3 className="incredible-partners-heading text-center">
          our incredible partners
        </h3>

        <div
          className="incredible-partners-logos"
          style={{
            justifyContent:
              data[0].partnerLogos.length <= 3 ? "center" : "space-between",
            gap: data[0].partnerLogos.length <= 3 ? "30px" : "0",
          }}
        >
          {data[0].partnerLogos.map((val: any, indx: any) => (
            <div className="text-center" key={indx}>
              <img
                src={`${apiBaseUrl}/${val.logo}`}
                alt=""
                style={{ maxWidth: "200px", maxHeight: "85px" }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="click-to-donate  container-fluid">
        <div className="row">
          <div className="col-lg-6 pb-5 px-4">
            <div className="d-inline-flex w-auto justify-content-center h-100 flex-column click-to-donate-content  ">
              <h1 className="click-to-donate-heading">{data[0].donate.text}</h1>
              <button
                className="donate-white-btn border-0 mt-3"
                onClick={() => navigate(ROUTES.DONATE)}
              >
                {data[0].donate.buttonText}
              </button>
            </div>
          </div>
          <div className="col-lg-6 p-0 d-done-sm">
            <div
              className="click-to-donate-box"
              style={{
                background: `linear-gradient(180deg, #00000099, #00000099),  url(${apiBaseUrl}/${data[0].donate.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "600px",
              }}
            ></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
