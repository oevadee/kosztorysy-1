import React from "react";
import "./styles/Table.scss";

// Data
import { tableData } from "../context/contextProvider";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <td className="table__row__title">
            <h1>Rodzaj usługi</h1>
          </td>
          <td className="table__row__price">
            <h1>Cena za pozycję*</h1>
          </td>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr key={data} className="table__row">
            <td className="table__row__title">{data[0]}</td>
            <td className="table__row__price">{data[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
