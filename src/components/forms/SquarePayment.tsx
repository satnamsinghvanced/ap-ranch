
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
}

interface SquarePaymentProps {
  pay: PayState;
  setPay: React.Dispatch<React.SetStateAction<PayState>>;
}
const SquarePayment: React.FC<SquarePaymentProps> = ({ pay, setPay }) => {
  const [addDonate] = useCreateDanateMutation();
  const [response, setResponse] = useState<any>("");
  return (
    <div className="form-donation">
      <PaymentForm
        applicationId={squareApplicationId}
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          console.log('token:', token.token);
          console.log('verifiedBuyer:', verifiedBuyer);
          let formData = pay;
          formData.sourceId = token.token ?? '';
          const res = await addDonate(formData).unwrap();
          setResponse(res);
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

      </PaymentForm>
    </div>
  )
}

export default SquarePayment;