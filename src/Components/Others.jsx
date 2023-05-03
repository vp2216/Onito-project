import React from "react";

export default function Others({ register }) {
  return (
    <div className="form-data-main">
      <span className="form-name">Other Details</span>
      <div className="form-data">
        <div className="form-input">
          <label htmlFor="occupation">Occupation</label>
          <input
            id="occupation"
            type="text"
            placeholder="Occupation"
            {...register("occupation")}
          />
        </div>
        <div className="form-input">
          <label htmlFor="nationality">Nationality</label>
          <input
            id="nationality"
            type="text"
            placeholder="Nationality"
            {...register("nationality")}
          />
        </div>
      </div>
    </div>
  );
}
