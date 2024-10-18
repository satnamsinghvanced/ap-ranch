import React, { useState } from "react";
import { allStates } from "../consts/usState";
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
type ErrorState = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  state: boolean;
  amount: boolean;
};
interface DonationFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  pay: PayState;
  setPay: React.Dispatch<React.SetStateAction<PayState>>;
  errors: ErrorState;
  setErrors:React.Dispatch<React.SetStateAction<ErrorState>>;
}
const DonationForm: React.FC<DonationFormProps> = ({
  handleSubmit,
  pay,
  setPay,
  errors,
  setErrors
}) => {

  const [emailError, setEmailError] = useState("");

  const handleFieldChange = (field: keyof PayState, value: string) => {
    if(field === "phone" || field === "amount"){
      value = value.replace(/\D/g, "");
    }
    if (value.trim() !== '') {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    }else{
      setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
    }
    if (field === "phone") {
      // Check if the phone number has 10 digits (US phone number without country code)
      // (value.length === 11 && value.startsWith("1"))
      if (value.length === 10) {
        setErrors((prevErrors) => ({ ...prevErrors, phone: false }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, phone: true }));
      }
    }
    //
    if(field === "email"){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setEmailError("");
        setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
      } else {
        setEmailError("Enter a valid email address");
        setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
      }
    }
    //
    setPay((prevState) => ({ ...prevState, [field]: value })) 
  };
  return (
    <div className="form-donation">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.firstName ? 'error-border' : ''}`}
              placeholder="First Name"
              onChange={(ev) => handleFieldChange('firstName', ev.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.lastName ? 'error-border' : ''}`}
              placeholder="Last Name"
              onChange={(ev) => handleFieldChange('lastName', ev.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 position-relative">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.email ? 'error-border' : ''}`}
              placeholder="Email"
              onChange={(ev) => handleFieldChange('email', ev.target.value)}
            />
            {emailError && (
              <div
                className="error-message"
                style={{
                  fontWeight: 600,
                }}
              >
                {emailError}
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-12 col-md-6 ">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.phone ? 'error-border' : ''}`}
              placeholder="Phone"
              value={pay.phone}
              onChange={(ev) => handleFieldChange('phone', ev.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <select
              name=""
              id=""
              className={`form-control form-control-lg ${errors.state ? 'error-border' : ''}`}
              onChange={(ev) => handleFieldChange('state', ev.target.value)}
            >
              <option value="">State</option>
              {allStates.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.name}
                </option>
              ))}
              {/* <option value="CA">California</option>
              <option value="New York">New York</option>
              <option value="New Mexico">New Mexico</option> */}
            </select>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-lg ${errors.amount ? 'error-border' : ''}`}
              placeholder="Amount ($)"
              value={pay.amount}
              onChange={(ev) => handleFieldChange('amount', ev.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 ">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-lg`}
              placeholder="Memo"
              value={pay.memo}
              onChange={(ev) => handleFieldChange('memo', ev.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="submit">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DonationForm;
