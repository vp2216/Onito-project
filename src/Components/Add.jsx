import React from "react";
import "../Styles/Add.css";
import Personal from "./Personal";
import Contacts from "./Contacts";
import Address from "./Address";
import Others from "./Others";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

export default function Add({ setShowAdd }) {
  function formSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form-div">
      <span className="add-heading">Add Details</span>
      <form className="form" onSubmit={formSubmit}>
        <Personal />
        <Contacts />
        <Address />
        <Others />
        <div className="add-btns">
          <button className="btn" onClick={() => setShowAdd(false)}>
            <AiOutlineClose className="btn-icon" />
            Cancel
          </button>
          <button type="submit" className="btn">
            <AiOutlineCheck className="btn-icon" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
