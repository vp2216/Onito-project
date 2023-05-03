import React, { useContext, useEffect } from "react";
import "../Styles/Home.css";
import Nav from "./Nav";
import { IoAdd } from "react-icons/io5";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import { dataContext } from "./App";

export default function Home() {
  const navigate = useNavigate();

  const { getData, data, searchData, loading } = useContext(dataContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <Nav />
      <button className="btn" onClick={() => navigate("/add")}>
        <IoAdd className="btn-icon" />
        Add
      </button>
      {loading ? (
        <div className="message">Loading data please wait...</div>
      ) : (
        <>
          {searchData.length === 0 && data.length === 0 ? (
            <div className="message">No data to show</div>
          ) : (
            <Table />
          )}
        </>
      )}
    </div>
  );
}
