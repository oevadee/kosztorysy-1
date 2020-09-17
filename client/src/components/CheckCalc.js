import React from "react";
import { Link } from 'react-router-dom';
import './styles/CheckCalc.scss';

// Components
import Button from './Button';

// Icons
import IsoOutlinedIcon from "@material-ui/icons/IsoOutlined";

const CheckCalc = () => {
  return (
    <div className="checkCalcSection">
      <IsoOutlinedIcon className="checkCalcSection__icon" />
      <div className="checkCalcSection__texts">
        <h2 className="checkCalcSection__texts__header">
          Dokonaj kalkulacji swoich kosztów
        </h2>
        <p className="checkCalcSection__texts__description">
          Kliknij w przycisk i sprawdź nasz kalkulator kosztów
        </p>
      </div>
      <Link to="/offer">
        <Button text="Oblicz już teraz" type="secondary" />
      </Link>
    </div>
  );
};

export default CheckCalc;
