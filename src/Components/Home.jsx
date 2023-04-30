import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import Nav from "./Nav";
import { IoAdd } from "react-icons/io5";
import Table from "./Table";
import Add from "./Add";

export default function Home() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  function getData() {
    setLoading(true);
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className={showAdd ? "home home-hide" : "home"}>
        <Nav />
        <button className="btn" onClick={() => setShowAdd(true)}>
          <IoAdd className="btn-icon" />
          Add
        </button>
        {loading ? (
          <div className="message">Loading data please wait...</div>
        ) : (
          <>
            {data.length === 0 ? (
              <div className="message">No data to show</div>
            ) : (
              <Table data={data} getData={getData} />
            )}
          </>
        )}
      </div>
      {showAdd && <Add setShowAdd={setShowAdd} getData={getData} />}
    </>
  );
}
