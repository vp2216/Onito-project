import React from "react";

export default function Contacts({ register }) {
  return (
    <div className="form-data-main">
      <span className="form-name">Contact Details</span>
      <div className="form-data">
        <div className="form-input">
          <label htmlFor="gdetails">Guardian</label>
          <select {...register("relation")}>
            <option value="">Relation</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="other">Other</option>
          </select>
          <input
            id="gdetails"
            type="text"
            placeholder="Name"
            {...register("guardianName")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="emergency">Emergency mobile</label>
          <input
            id="emergency"
            type="number"
            placeholder="Enter number"
            {...register("emergencyContact")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            {...register("email")}
          />
        </div>
      </div>
    </div>
  );
}
