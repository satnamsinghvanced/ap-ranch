import React from "react";
import DonationForm from "../components/forms/donation-form";
import Footer from "./Footer";
import Header from "../components/layout/header";

const Donate = () => {
  return (
    <section className="apr-main-section">
      <section className="donation-banner">
        <Header />
        <div className="banner-form">
          <h2>DONATE</h2>
          <DonationForm />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Donate;
