import React, { useState } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import { useCreateDanateMutation } from "../apis/donateApi";
import { squareApplicationId, squareLocationId } from "../consts/api-url.const";
interface PayState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  amount: string;
  sourceId: string;
  postalCode: string;
}

interface SquarePaymentProps {
  pay: PayState;
  setPay: React.Dispatch<React.SetStateAction<PayState>>;
  setSubmitCheck: React.Dispatch<React.SetStateAction<boolean>>;
}
const SquarePayment: React.FC<SquarePaymentProps> = ({
  pay,
  setPay,
  setSubmitCheck,
}) => {
  const [addDonate] = useCreateDanateMutation();
  const [response, setResponse] = useState<any>("");
  const [error, setError] = useState<any>("");
  const reloadAllStep = () => {
    setTimeout(function () {
      setPay({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        amount: "",
        sourceId: "",
        postalCode: "99999",
      });
      setSubmitCheck(false);
    }, 3000);
  };
  return (
    <div className="form-donation">
      <PaymentForm
        applicationId={squareApplicationId}
        locationId={squareLocationId}
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          try {
            if (token.status === "OK") {
              console.log("Token received:", token);
              console.log("Billing details:", token?.details?.billing);

              // Prepare form data
              let formData = {
                ...pay,
                sourceId: token.token || "",
                postalCode: token?.details?.billing?.postalCode || "",
              };
              console.log(formData);

              // Process payment with your API
              //  const res = await addDonate(formData).unwrap();
              // setResponse(res);

              // Handle successful response
              reloadAllStep();
            } else {
              // Handle tokenization failure
              console.error("Tokenization failed:", token);
              setError("Payment Failed, Please try again!");
              reloadAllStep();
            }
          } catch (err) {
            console.error("Error processing payment:", err);
            setError("Payment Failed, Please try again!");
            reloadAllStep();
          }
        }}
      >
        <CreditCard
          buttonProps={{
            css: {
              backgroundColor: "#164576",
              fontSize: "14px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#164576",
                color: "#fff",
              },
            },
          }}
        >
          Submit
        </CreditCard>

        {error && (
          <div
            className="text-danger"
            style={{
              fontSize: "14px",
              marginTop: "5px",
              fontFamily: "Satoshi",
            }}
          >
            {error}
          </div>
        )}

        {response && (
          <div style={{ fontSize: "14px", marginTop: "5px", color: "green" }}>
            {response?.message}
          </div>
        )}
      </PaymentForm>
    </div>
  );
};

export default SquarePayment;
