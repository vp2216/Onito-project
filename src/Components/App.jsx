import "../Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import Add from "./Add";
import { createContext, useState } from "react";

export const dataContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  function getData() {
    setLoading(true);
    fetch("http://localhost:8049/")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data.data);
          setLoading(false);
        }, 500);
      });
  }

  const values = { data, loading, getData, searchData, setSearchData };

  return (
    <dataContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
