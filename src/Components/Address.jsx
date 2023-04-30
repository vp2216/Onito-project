import React from "react";

export default function Address() {
  return (
    <div className="form-data-main">
      <span className="form-name">Address Details</span>
      <div className="form-data">
        <div className="form-input">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" placeholder="Your address" />
        </div>
        <div className="form-input">
          <label htmlFor="city">City</label>
          <input id="city" type="text" placeholder="Your city" />
        </div>
        <div className="form-input">
          <label htmlFor="state">State</label>
          <input id="state" type="text" placeholder="Your state" />
        </div>
        <div className="form-input">
          <label htmlFor="country">Country</label>
          <input id="country" type="text" placeholder="India" />
        </div>
        <div className="form-input">
          <label htmlFor="pincode">Pincode</label>
          <input id="pincode" type="number" placeholder="Your pincode" />
        </div>
      </div>
    </div>
  );
}
