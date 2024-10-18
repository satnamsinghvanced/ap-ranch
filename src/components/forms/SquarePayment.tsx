/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import { useCreateDonateMutation } from "../apis/donateApi";
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
  memo: string;
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
  const [addDonate] = useCreateDonateMutation();
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
        memo: "",
      });
      setSubmitCheck(false);
    }, 5000);
  };
  const handleError = (err:any) => {
    if (err && typeof err === 'object' && 'data' in err) {
      const errorData = (err as any).data; // Casting to `any` to access the 'data' property
      setError(errorData?.msg?.errors[0]?.detail);
    } else {
      setError("Payment Failed, Please try again!");
    }
    reloadAllStep();
  };
  useEffect(() => {
  }, [error]);

  return (
    <div className="form-donation ">
      <PaymentForm
        applicationId={squareApplicationId}
        locationId={squareLocationId}
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          try {
            if (token.status === "OK") {
              // Prepare form data
              let formData = {
                ...pay,
                sourceId: token.token || "",
                postalCode: token?.details?.billing?.postalCode || "",
              };

              // Process payment with your API
              const res = await addDonate(formData).unwrap();
              setResponse(res);

              // Handle successful response
              reloadAllStep();
            } else {
              // Handle tokenization failure
              console.error("Tokenization failed:", token);
              setError("Payment Failed, Please try again!");
              reloadAllStep();
            }
          } catch (err) {
            handleError(err);
            /*if (err && typeof err === 'object' && 'data' in err) {
              const errorData = (err as any).data; // Casting to `any` to access the 'data' property
              setError(errorData?.msg?.errors[0]?.detail);
              reloadAllStep();
            } else {
              setError("Payment Failed, Please try again!");
              reloadAllStep();
            }*/
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
            className=""
            style={{
              fontWeight: 600,
              color: "#ff0000",
              fontFamily: "'Satoshi', sans-serif",
              marginTop: "5px",
              fontSize: 16
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
