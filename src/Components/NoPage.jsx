import React from "react";
import "../Styles/NoPage.css";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function NoPage() {
  const navigate = useNavigate();
  return (
    <div className="nopage">
      <div className="message" style={{ color: "red" }}>
        404
      </div>
      <div className="message">Page not found</div>
      <button className="btn" onClick={() => navigate("/")}>
        <AiFillHome className="btn-icon" />
        Home
      </button>
    </div>
  );
}
