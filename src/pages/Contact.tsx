import ContactForm from "../components/forms/contact-form";
import Footer from "./Footer";
import Header from "../components/layout/header";
import contactBg from "../assets/img/png/contact-bg.png";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="row contact-main">
        <div className="col-lg-6 p-0 ">
          <div className="contact-form">
            <h1 className="contact-page-heading">CONTACT</h1>
            <ContactForm />
          </div>
        </div>
        <div className="col-lg-6 text-end p-0 contact-img d-none-lg ">
          <img src={contactBg} alt="contactBg" className="img-fluid" />
        </div>
      </div>

      <div style={{height:"500px",}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1678.9653896548184!2d-97.5070628!3d32.6878862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e0d9247921ba3%3A0xf9ac78e0cfe8fa2a!2sAthletic%20Performance%20Ranch!5e0!3m2!1sen!2sin!4v1725882539477!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0",}} loading="lazy" ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
