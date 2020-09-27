import React from "react";
import './styles/Table.scss';

const tableData = [
  [
    'Kosztorys na podstawie dostarczonego przedmiaru (obmiaru) w wersji edytowalnej (.ath, .kst, .zuz, .bem) z określonymi podstawami nakładów',
    '3,00 – 8,00 PLN'
  ],
  [
    'Kosztorys na podstawie dostarczonego przedmiaru w innych wersjach z określonymi podstawami nakładów',
    '4,00 – 9,00 PLN',
  ],
  [
    'Kosztorys na podstawie dostarczonego przedmiaru bez podstaw nakładów',
    '6,00 – 12,00 PLN',
  ],
  [
    'Przedmiar + kosztorys na podstawie dokumentacji projektowej',
    '10,00 – 15 PLN',
  ],
  [
    'Obmiar + kosztorys 20,00 – 25,00 PLN za pozycję + koszt dojazdu',
    '20,00 – 25,00 PLN'
  ]
];

const Table = () => {
  return (
    <div className="table">
      <div className="table__row">
        <div className="table__row__title">
          <h1>Rodzaj usługi</h1>
        </div>
        <div className="table__row__price">
          <h1>Cena za pozycję*</h1>
        </div>
      </div>
      {tableData.map((data) => (
        <div key={data} className="table__row">
          <div className="table__row__title">{data[0]}</div>
          <div className="table__row__price">{data[1]}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
