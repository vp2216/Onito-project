import React from "react";

export default function Personal() {
  return (
    <div className="form-data-main">
      <span className="form-name">Personal Details</span>
      <div className="form-data">
        <div className="form-input">
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input id="name" type="text" placeholder="Name" />
        </div>
        <div className="form-input">
          <label htmlFor="age">
            Age<span className="required">*</span>
          </label>
          <input id="age" type="number" placeholder="Enter age" />
          <label htmlFor="gender">
            Gender<span className="required">*</span>
          </label>
          <select id="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="mobile">Mobile</label>
          <input id="mobile" type="number" placeholder="Enter number" />
        </div>
      </div>
    </div>
  );
}
