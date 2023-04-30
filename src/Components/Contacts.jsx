import React from "react";

export default function Contacts() {
  return (
    <div className="form-data-main">
      <span className="form-name">Contact Details</span>
      <div className="form-data">
        <div className="form-input">
          <label htmlFor="gdetails">Guardian</label>
          <select>
            <option value="">Relation</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="other">Other</option>
          </select>
          <input id="gdetails" type="text" placeholder="Name" />
        </div>
        <div className="form-input">
          <label htmlFor="emergency">Emergency mobile</label>
          <input id="emergency" type="number" placeholder="Enter number" />
        </div>
      </div>
    </div>
  );
}
