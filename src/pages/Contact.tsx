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

      <Footer />
    </div>
  );
};

export default Contact;
