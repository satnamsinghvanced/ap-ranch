
import React, { useState } from "react";
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
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
const SquarePayment: React.FC<SquarePaymentProps> = ({ pay, setPay, setSubmitCheck }) => {
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
        postalCode: "",
      })
      setSubmitCheck(false);
    }, 3000)
  }
  return (
    <div className="form-donation">
      <PaymentForm
        applicationId={squareApplicationId}
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          try {
            console.log('token:', token);
            console.log('details:', token?.details?.billing);
            let formData = pay;
            formData.sourceId = token.token ?? '';
            formData.postalCode = token?.details?.billing?.postalCode ?? '';

            const res = await addDonate(formData).unwrap();
            setResponse(res);
            reloadAllStep();
          } catch (err) {
            console.log("err");
            console.log(err);
            setError("Payment Failed, Please try again!");
            reloadAllStep();
          }
        }}
        locationId={squareLocationId}
      >
        <CreditCard
          buttonProps={{
            css: {
              backgroundColor: "#164576",
              fontSize: "14px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#164576",
                color: "#fff"
              },
            },
          }}
        >Submit</CreditCard>
        {error && <div className="text-danger" style={{ fontSize: "14px", marginTop: "5px" }}>{error}</div>}
        {response && <div style={{ fontSize: "14px", marginTop: "5px", color: "green" }}>{response?.message}</div>}
      </PaymentForm>
    </div>
  )
}

export default SquarePayment;