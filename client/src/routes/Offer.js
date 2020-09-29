import React from "react";
import "../styles/Offer.scss";

// Components
import CardSection from "../components/CardSection";
import Table from "../components/Table";
import Calculator from '../components/Calculator';

const Offer = () => {
  return (
    <div className="offerContainer">
      <h1 className="offerContainer__header">
        Na cenę koszturysu domu lub większego obiektu składają się następujące
        czynniki:
      </h1>
      <CardSection />
      <Table />
      <p className="offerContainer__priceInfo">*Podane ceny są cenami netto, do ceny należy doliczyć podatek VAT w wysokości 23 %</p>
      <h2 className="offerContainer__calcHeader">Oszacuj cenę naszej usługi</h2>
      <Calculator />
    </div>
  );
};

export default Offer;
