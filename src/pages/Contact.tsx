import React from "react";
import ContactForm from "../components/forms/contact-form";
import Footer from "./Footer";
import Header from "../components/layout/header";
import contactBg from "../assets/img/png/contact-bg.png";
const Contact = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row ">
        <div className="col-lg-6 p-0 ">
          <div className="contact-form">
            <h1 className="contact-page-heading">CONTACT</h1>
            <div className="contact-form-inner">
              {/* <form action=""> */}
              <div className="d-flex flex-column">
                <label htmlFor="" className="contact-form-label">
                  Name
                </label>
                <input type="text" className="contact-from-input" />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="" className="contact-form-label">
                  Email
                </label>
                <input type="text" className="contact-from-input" />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="" className="contact-form-label">
                  Phone number
                </label>
                <input type="text" className="contact-from-input" />
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="" className="contact-form-label">
                  What are you contacting about?
                </label>
                <input type="text" className="contact-from-input" />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="" className="contact-form-label">
                  Comments
                </label>
                <textarea cols={30} rows={5} className="contact-from-input" />
              </div>

              <div>
                <button className="submit-btn">Submit</button>
              </div>
              {/* </form> */}
            </div>
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
