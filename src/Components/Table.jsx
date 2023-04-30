import React, { useEffect } from "react";
import "../Styles/Table.css";

export default function Table({ data, getData }) {
  useEffect = (() => {}, []);

  return (
    <div className="table">
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
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>
                  {data.age}/{data.sex}
                </td>
                <td>{data.mobile}</td>
                <td>{data.address}</td>
                <td>{data.govtid}</td>
                <td>{data.guardian}</td>
                <td>{data.nationality}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
