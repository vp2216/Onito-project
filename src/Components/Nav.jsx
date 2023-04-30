import React from "react";
import "../Styles/Nav.css";
import { BiSearch } from "react-icons/bi";

export default function Nav() {
  return (
    <div className="nav">
      <span className="nav-search">
        <input type="text" placeholder="Search..." />
        <BiSearch className="search-icon" />
      </span>
      <span className="nav-show">
        <span>Show:</span>
        <select className="nav-select">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </span>
    </div>
  );
}
