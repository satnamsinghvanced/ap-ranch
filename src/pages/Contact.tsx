import React from "react";
import ContactForm from "../components/forms/contact-form";
import Footer from "./Footer";
import Header from "../components/layout/header";
import contactBg from "../assets/img/png/contact-bg.png";
const Contact = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row contact-page">
        <div className="col-7 contact-form">
          <ContactForm />
        </div>
        <div className="col-3 mt--75px">
          <img src={contactBg} alt="contactBg" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
