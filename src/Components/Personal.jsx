import React from "react";

export default function Personal({ register }) {
  return (
    <div className="form-data-main">
      <span className="form-name">Personal Details</span>
      <div className="form-data">
        <div className="form-input">
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="age">
            Age<span className="required">*</span>
          </label>
          <input
            id="age"
            type="number"
            placeholder="Enter age"
            {...register("age")}
          />
          <label htmlFor="gender">
            Gender<span className="required">*</span>
          </label>
          <select id="gender" {...register("gender")}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            type="number"
            placeholder="Enter number"
            {...register("mobile")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="govtid">ID</label>
          <select {...register("govtidType")}>
            <option value="">Select</option>
            <option value="aadhar">Aadhar</option>
            <option value="pan">PAN</option>
          </select>
          <input
            id="govtid"
            type="text"
            placeholder="ID number"
            {...register("govtid")}
          />
        </div>
      </div>
    </div>
  );
}
