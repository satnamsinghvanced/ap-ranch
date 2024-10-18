import React, { useState } from "react";
import DonationForm from "../components/forms/donation-form";
import SquarePayment from "../components/forms/SquarePayment";
import { useGetDonateTabDataQuery } from "../components/apis/donateApi";
import { apiBaseUrl } from "../components/consts/api-url.const";
const Donate = () => {
  const [pay, setPay] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    amount: "",
    sourceId: "",
    postalCode: "99999",
    memo: ""
  });
  const [submitCheck, setSubmitCheck] = useState(false);
  const { data }: any = useGetDonateTabDataQuery();

  const [errors, setErrors] = useState({ firstName: false, lastName: false, email: false, phone: false, state: false, amount: false });
  const handleSubmit = () => {
   // const { sourceId, ...otherFields } = pay;
    const emailRegex = /^[^\s@]+(\.[^\s@]+)*@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(pay.email)) {
      // return false;
    }
    let tempErrors = errors;
    tempErrors = {
      firstName: !pay.firstName,
      lastName: !pay.lastName,
      email: !pay.email || !emailRegex.test(pay.email),
      phone: !pay.phone || pay.phone.length !== 10, 
      state: !pay.state,
      amount: !pay.amount,
    };
    setErrors(tempErrors);
    if (!tempErrors.firstName && !tempErrors.lastName && !tempErrors.email && !tempErrors.phone && !tempErrors.state && !tempErrors.amount) {
     /* const allFieldsFilled = Object.values(otherFields).every(
        (value) => value.trim() !== ""
      );
      if (allFieldsFilled) {*/
        setSubmitCheck(true);
     // }
    }
  };

  return (
    <section className="apr-main-section">
      <section
        className="donation-banner"
        style={{
          backgroundImage: `${
            data
              ? `linear-gradient(180deg, rgba(22, 20, 21, 0) 0%, #161415 100%), url(${apiBaseUrl}/${data[0]?.logo})`
              : ""
          }`,
        }}
      >
        <div className="banner-form">
          <h2>DONATE</h2>
          {!submitCheck ? (
            <DonationForm
              handleSubmit={handleSubmit}
              pay={pay}
              setPay={setPay}
              errors={errors}
              setErrors={setErrors}
            />
          ) : (
            <SquarePayment
              pay={pay}
              setPay={setPay}
              setSubmitCheck={setSubmitCheck}
            />
          )}
        </div>
      </section>
    </section>
  );
};

export default Donate;
