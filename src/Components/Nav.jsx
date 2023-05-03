import React, { useContext } from "react";
import "../Styles/Nav.css";
import { BiSearch } from "react-icons/bi";
import { dataContext } from "./App";

export default function Nav() {
  const { data, setSearchData, setMessage } = useContext(dataContext);

  return (
    <div className="nav">
      <span className="nav-search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            const requiredData = data.filter((data) =>
              data.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            if (requiredData.length === 0) setMessage("No search data found");
            setSearchData(requiredData);
          }}
        />
        <BiSearch className="search-icon" />
      </span>
    </div>
  );
}
