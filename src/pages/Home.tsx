import Header from "../components/layout/header";
import Footer from "./Footer";
import nikeLogo from "../assets/img/png/nike-logo.png";
import rekortan from "../assets/img/png/Rekortan-logo.png";
import USATrackLogo from "../assets/img/png/USA_Track-logo.png";
import sorinexLogo from "../assets/img/png/sorinex-logo.png";
import artboardLogo from "../assets/img/png/Artboard-logo.png";
import aprSxLogo from "../assets/img/png/apr-sx-logo.png";

const Home = () => {
  return (
    <section className="apr-main-section">
      <Header />

      <section className="apr-banner section-padding">
        <div className="d-flex justify-content-center w-100 align-items-center h-100 ">
          <img src={aprSxLogo} alt="" className="img-fluid" />
        </div>
      </section>

      <section className=" about-apr section-padding pb-2">
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
          <div className="col-lg-4 col-md-6 p-0 explore-section">
            <div className="football-img sport-img-box ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
                <h3 className="sport-name-heading">FOOTBALL</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 explore-section">
            <div className="basketball-img sport-img-box  ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100 ">
                <h3 className="sport-name-heading">BASKETBALL</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-0 explore-section">
            <div className="track-img sport-img-box ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
                <h3 className="sport-name-heading">TRACK</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-lg-12  col-md-6 p-0 explore-section">
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

        <div className="incredible-partners-logos">
          <div className="text-center">
            <img src={nikeLogo} alt="" />
          </div>
          <div className="text-center">
            <img src={rekortan} alt="" />
          </div>
          <div className="text-center">
            <img src={USATrackLogo} alt="" />
          </div>
          <div className="text-center">
            <img src={sorinexLogo} alt="" />
          </div>
          <div className="text-center">
            <img src={artboardLogo} alt="" />
          </div>
        </div>
      </section>

      <section className="click-to-donate  container-fluid">
        <div className="row">
          <div className="col-lg-6 pb-5">
            <div className="d-inline-flex w-auto justify-content-center h-100 flex-column click-to-donate-content  ">
              <h1 className="click-to-donate-heading">
                CLICK to
                <br /> donate
              </h1>
              <button className="donate-white-btn border-0 mt-3  ">
                DONATE
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
