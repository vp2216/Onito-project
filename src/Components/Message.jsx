import React, { useContext } from "react";
import "../Styles/Message.css";
import { dataContext } from "./App";

export default function Message() {
  const { message, messageShow, add } = useContext(dataContext);

  return (
    <div
      className={messageShow ? "popup show" : "popup hide"}
      style={add ? { background: "green" } : {}}
    >
      {message}
    </div>
  );
}
