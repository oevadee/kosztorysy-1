import React from "react";
import "../styles/Offer.scss";

// Components
import CardSection from "../components/CardSection";

const Offer = () => {
  return (
    <div className="offerContainer">
      <h1 className="offerContainer__header">
        Na cenę koszturysu domu lub większego obiektu składają się następujące
        czynniki:
      </h1>
      <CardSection />
      <div className="offerContainer__table">
        <div className="offerContainer__table__row">
          <div className="offerContainer__table__row__title">
            <h1>Rodzaj usługi</h1>
          </div>
          <div className="offerContainer__table__row__price">
            <h1>Cena za pozycję*</h1>
          </div>
        </div>
        <div className="offerContainer__table__row">
          <div className="offerContainer__table__row__title">
            Kosztorys na podstawie dostarczonego przedmiaru (obmiaru) w wersji
            edytowalnej (.ath, .kst, .zuz, .bem) z określonymi podstawami
            nakładów
          </div>
          <div className="offerContainer__table__row__price">
            3,00 – 8,00 PLN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
