import React from "react";
import "../styles/Offer.scss";

// Components
import CardSection from "../components/CardSection";
import Table from "../components/Table";

const Offer = () => {
  return (
    <div className="offerContainer">
      <h1 className="offerContainer__header">
        Na cenę koszturysu domu lub większego obiektu składają się następujące
        czynniki:
      </h1>
      <CardSection />
      <Table />
    </div>
  );
};

export default Offer;
