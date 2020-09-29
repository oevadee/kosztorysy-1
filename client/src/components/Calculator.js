import React, { useState } from "react";
import "./styles/Calculator.scss";

// Data
import { tableData } from "../context/contextProvider";

const handleChange = (e) => {
  console.log(e.target.value);
  // setValue(target.value);
};

const Calculator = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="calcSection">
      <div className="calcSection__leftPanel">
        <div className="calcSection__leftPanel__measureSection">
          <p className="calcSection__leftPanel__measureSection__text">
            Wybierz usługę
          </p>
          <select
            className="calcSection__leftPanel__measureSection__range"
            onChange={handleChange}
          >
            {tableData.map(data => (
              <option key={data} value={data[1]}>{data[0]}</option>
            ))}
          </select>
        </div>
        <div className="calcSection__leftPanel__measureSection">
          <p className="calcSection__leftPanel__measureSection__text">
            Oblicz po dostępnych środkach
          </p>
          <input
            type="range"
            className="calcSection__leftPanel__measureSection__range"
            min="0"
            max="100"
            onChange={handleChange}
          />
        </div>
        <div className="calcSection__leftPanel__measureSection">
          <p className="calcSection__leftPanel__measureSection__text">
            Oblicz po ilości pozycji
          </p>
          <input
            type="range"
            className="calcSection__leftPanel__measureSection__range"
          />
        </div>
      </div>
      <div className="calcSection__rightPanel">
        <div className="calcSection__rightPanel__valueSection">
          <p className="calcSection__rightPanel__valueSection__header">Cena</p>
          <p className="calcSection__rightPanel__valueSection__value">0</p>
        </div>
        <div className="calcSection__rightPanel__valueSection">
          <p className="calcSection__rightPanel__valueSection__header">
            Pozycje
          </p>
          <p className="calcSection__rightPanel__valueSection__value">0</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
