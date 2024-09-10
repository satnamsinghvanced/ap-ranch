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
}

interface DonationFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  pay: PayState;
  setPay: React.Dispatch<React.SetStateAction<PayState>>;
}
const DonationForm: React.FC<DonationFormProps> = ({ handleSubmit, pay, setPay }) => {
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const email = ev.target.value;
    setPay({ ...pay, email });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handlePhoneChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value.replace(/\D/g, '');
    setPay({ ...pay, phone: value });
  };
  const handleAmountChange= (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value.replace(/\D/g, '');
    setPay({ ...pay, amount: value });
  };
  return (
    <div className="form-donation">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="First Name"
              onChange={(ev) => setPay({...pay, firstName: ev.target.value})}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last Name"
              onChange={(ev) => setPay({...pay, lastName: ev.target.value})}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            {emailError && <div className="text-danger" style={{ fontSize: "14px", marginTop: "5px"}}>{emailError}</div>}
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Phone"
              value={pay.phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <select 
              name="" 
              id="" 
              className="form-select form-select-lg"
              onChange={(ev) => setPay({...pay, state: ev.target.value})}
            >
              {allStates.map((state)=> 
              <option key={state.value} value={state.value}>{state.name}</option>
              )}
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
              className="form-control form-control-lg"
              placeholder="Amount$"
              onChange={handleAmountChange}
            />
          </div>
        </div>
      </div>
      <div className="submit">
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default DonationForm;
