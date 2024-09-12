import ContactForm from "../components/forms/contact-form";
import Footer from "./Footer";
import Header from "../components/layout/header";
import contactBg from "../assets/img/png/contact-bg.png";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="row contact-main">
        <div className="col-lg-5 p-0 ">
          <div className="contact-form">
            <h1 className="contact-page-heading">CONTACT</h1>
            <ContactForm />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
          <div className="justify-content-start m-0 directions-container">
            <h1 className="directions">
              Directions to the Athletic Performance Ranch
            </h1>
            <p className="directions-description">
              From Downtown Fort Worth travel west on I-30 and exit FM 2871,
              turn south and the entrance to the ranch is a few hundred feet on
              the right after the I-20 overpass. From south Fort Worth travel
              west on I-20 and exit FM 2871, turn south and the entrance to the
              ranch will be on the right.
            </p>
            <ul className="directions-description">
              <li>1590 FM2871 Fort Worth, TX 76126</li>
              <li>+1 214-538-9086</li>
              <li>greg@apranch.org</li>
            </ul>
            <h5 className="directions-description fw-bold fs-5">
              Email our team:
            </h5>
            <ul className="directions-description mt-0">
              <li>greg@apranch.org</li>
              <li>latoska@apranch.org</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 text-end p-0 contact-img d-none-lg">
          <img src={contactBg} alt="contactBg" className="img-fluid" />
        </div>
      </div>

      <div style={{ height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1678.9653896548184!2d-97.5070628!3d32.6878862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e0d9247921ba3%3A0xf9ac78e0cfe8fa2a!2sAthletic%20Performance%20Ranch!5e0!3m2!1sen!2sin!4v1725882539477!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
