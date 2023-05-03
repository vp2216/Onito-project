import "../Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import Add from "./Add";
import { createContext, useEffect, useState } from "react";
import Message from "./Message";

export const dataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [message, setMessage] = useState("");
  const [messageShow, setMessageShow] = useState(false);
  const [add, setAdd] = useState(false);

  function getData() {
    setLoading(true);
    fetch("http://localhost:8049/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }

  useEffect(() => {
    if (message) {
      setMessageShow(true);
      setTimeout(() => {
        setMessageShow(false);
        setTimeout(() => {
          setMessage("");
          if (add === true) setAdd(false);
        }, 400);
      }, 3000);
    }
  }, [message]);

  const values = {
    data,
    loading,
    getData,
    searchData,
    setSearchData,
    message,
    setMessage,
    messageShow,
    add,
    setAdd,
  };

  return (
    <dataContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Message />
    </dataContext.Provider>
  );
}

export default App;
