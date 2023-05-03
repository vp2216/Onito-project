import React, { useContext } from "react";
import "../Styles/Table.css";
import { dataContext } from "./App";
import { AiFillDelete } from "react-icons/ai";

export default function Table() {
  const { data, searchData, getData } = useContext(dataContext);

  function removeItem(id) {
    fetch(`http://localhost:8049/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        getData();
      });
  }

  function horizontalScroll(event) {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 150;
  }

  return (
    <div className="table" onWheel={horizontalScroll}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Govt ID</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {(searchData.length !== 0 ? searchData : data)?.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.name}</td>
                <td>
                  {data.age} /{" "}
                  {data.gender === "male"
                    ? "M"
                    : data.gender === "female"
                    ? "F"
                    : "O"}
                </td>
                <td>{data.mobile || "-"}</td>
                <td>
                  {data.address
                    ? data.address +
                      (data.city ? ", " + data.city : "") +
                      (data.state ? ", " + data.state : "") +
                      (data.country ? ", " + data.country : "") +
                      (data.pincode ? ", " + data.pincode : "")
                    : "-"}
                </td>
                <td>
                  {data?.govtidType?.toUpperCase() || "-"} /{" "}
                  {data.govtid.toUpperCase() || "-"}
                </td>
                <td>
                  {data.guardianName || "-"} / {data.emergencyContact || "-"}
                </td>
                <td>{data.nationality || "-"}</td>
                <td>
                  <AiFillDelete
                    className="btn-icon"
                    style={{ color: "red" }}
                    onClick={() => removeItem(data._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
