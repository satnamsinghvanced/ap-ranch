import Header from "../components/layout/header";
import Footer from "./Footer";
import trackImg from "../assets/img/png/track-img.png";
import footballImg from "../assets/img/png/football-img.png";
import basketballImg from "../assets/img/png/basketball-img.png";
import facilityImg from "../assets/img/png/facility-img.png";
import { ROUTES } from "../components/consts/routes.consts";
import { useNavigate } from "react-router-dom";
import { useGetHomeDataQuery } from "../components/apis/homeAPi";
const Home = () => {
  const navigate = useNavigate();
  const { data }: any = useGetHomeDataQuery();
  if (!data) {
    return null;
  }
  return (
    <section className="apr-main-section">
      <Header />

      <section className="apr-banner">
        <div className="d-flex justify-content-center w-100 align-items-center h-100 ">
          <img src={data[0].banner.logoImage} alt="" className="img-fluid" />
        </div>
      </section>

      <section className=" about-apr section-padding pb-2">
        <div className="max-width-1050 mx-auto text-center ">
          <p>{data[0].banner.descriptions}</p>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-0 explore-section">
            <div className="sport-img-box ">
              <img
                src={footballImg}
                alt=""
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
              <div className="d-flex align-items-center justify-content-center flex-column h-100 position-absolute w-100 top-0">
                <h3 className="sport-name-heading">FOOTBALL</h3>
                <button
                  className="explore-btn  mt-4"
                  onClick={() => navigate(ROUTES.FOOTBALL)}
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 explore-section">
            <div className="sport-img-box  ">
              <img
                src={basketballImg}
                alt=""
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
              <div className="d-flex align-items-center justify-content-center flex-column h-100 position-absolute w-100 top-0">
                <h3 className="sport-name-heading">BASKETBALL</h3>
                <button
                  className="explore-btn  mt-4"
                  onClick={() => navigate(ROUTES.BASKETBALL)}
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 explore-section">
            <div className="sport-img-box">
              <img
                src={trackImg}
                alt=""
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
              <div className="d-flex align-items-center justify-content-center flex-column h-100 position-absolute w-100 top-0">
                <h3 className="sport-name-heading">TRACK</h3>
                <button
                  className="explore-btn  mt-4"
                  onClick={() => navigate(ROUTES.TRACK)}
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-12  col-md-6 p-0 explore-section">
            <div className="the-facility-img-box ">
              <img
                src={facilityImg}
                alt=""
                height={"100%"}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
              <div className="d-flex align-items-center justify-content-center flex-column h-100 text-center-md position-absolute w-100 top-0">
                <h3 className="sport-name-heading font-50">the facility</h3>
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

        <div className="incredible-partners-logos">
          {data[0].partnerLogos.map((val: any, indx: any) => (
            <div className="text-center" key={indx}>
              <img src={val.logo} alt="" />
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
            <div className="click-to-donate-box"></div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
