import React from "react";

const DonationForm = () => {
  return (
    <div className="form-donation">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <select name="" id="" className="form-select form-select-lg">
              <option value="">State</option>
              <option value="">State1</option>
              <option value="">State2</option>
            </select>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Amount$"
            />
          </div>
        </div>
      </div>
      <div className="submit">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default DonationForm;
