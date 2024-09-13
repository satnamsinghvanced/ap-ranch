import React, { useState } from "react";
import DonationForm from "../components/forms/donation-form";
import Footer from "./Footer";
import Header from "../components/layout/header";
import SquarePayment from "../components/forms/SquarePayment";
const Donate = () => {

  const [pay, setPay] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "state": "",
    "amount": "",
    "sourceId": "",
    "postalCode": "99999"
  });
  const [submitCheck, setSubmitCheck] = useState(false);

  const handleSubmit = () => {
    const { sourceId, ...otherFields } = pay;
    console.log(otherFields);
    if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(pay.email)){
      return false;
    }
    const allFieldsFilled = Object.values(otherFields).every(value => value.trim() !== "");
    if (allFieldsFilled) {
      setSubmitCheck(true)
    }
  }
  return (
    <section className="apr-main-section">
      <section className="donation-banner">
        <Header />
        <div className="banner-form">
          <h2>DONATE</h2>
          {!submitCheck ?
            <DonationForm 
              handleSubmit={handleSubmit}
              pay={pay}
              setPay={setPay}
            />
            :
            <SquarePayment 
              pay={pay}
              setPay={setPay}
              setSubmitCheck={setSubmitCheck}
            />
          }
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Donate;
