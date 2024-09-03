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
        <div className="d-flex justify-content-center w-100 align-items-center h-100 animate__animated animate__fadeInDown">
          <img src={aprSxLogo} alt="" className="img-fluid" />
        </div>
      </section>

      <section className=" about-apr section-pending">
        <div className="max-width-1000 mx-auto text-center animate__backInUp animate__animated">
          <p>
            Our mission at AP Ranch is to create a transformative sports
            facility and community dedicated to cultivating and empowering
            student-athletes of all backgrounds and abilities. We strive to
            provide a nurturing environment where INDIVIDUALS can explore their
            passions, develop skills, and unlock their true potential.
            <h1 data-aos="zoom-y-out" data-aos-delay="50">
              Sample heading
            </h1>
          </p>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-0 ">
            <div className="foodball-img sport-img-box animate__animated animate__fadeInLeft">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
                <h3 className="sport-name-heading">FOOTBALL</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="basketball-img sport-img-box animate__backInDown animate__animated ">
              <div className="d-flex align-items-center justify-content-center flex-column h-100 ">
                <h3 className="sport-name-heading">BASKETBALL</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0 ">
            <div className="track-img sport-img-box animate__animated animate__fadeInRight">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
                <h3 className="sport-name-heading">TRACK</h3>
                <button className="explore-btn  mt-4">EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-0">
            <div className="the-facility-img-box">
              <div className="d-flex align-items-center justify-content-center flex-column h-100">
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
        <h1 data-aos="zoom-y-out">Sample heading</h1>
        <div className="incredible-partners-logos">
          <div>
            <img src={nikeLogo} alt="" />
          </div>
          <div>
            <img src={rekortan} alt="" />
          </div>
          <div>
            <img src={USATrackLogo} alt="" />
          </div>
          <div>
            <img src={sorinexLogo} alt="" />
          </div>
          <div>
            <img src={artboardLogo} alt="" />
          </div>
        </div>
      </section>

      <section className="click-to-donate  container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="d-inline-flex w-auto justify-content-center h-100 flex-column click-to-donate-content  ps-5 animate__backOutLeft animate__animated">
              <h1 className="click-to-donate-heading ms-5">
                CLICK to
                <br /> donate
              </h1>
              <button className="donate-white-btn border-0 mt-3  ms-5">
                DONATE
              </button>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="click-to-donate-box animate__backOutRight animate__animated"></div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
