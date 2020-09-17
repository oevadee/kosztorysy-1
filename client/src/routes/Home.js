import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.scss";

// Components
import Button from "../components/Button";
import IconSection from "../components/IconSection";
import CheckCalc from '../components/CheckCalc';

const Home = () => {
  return (
    <>
      <div className="introContainer">
        <h1 className="introContainer__header">Intro text</h1>
        <p className="introContainer__description">
          Zatrudniamy i współpracujemy ze specjalistami <br /> z wieloletnim
          doświadczeniem.
        </p>
        <img className="introContainer__image" src="/img/intro.jpg" alt="" />
        <div className="introContainer__imageCover"></div>
        <Link to="/gallery">
          <Button text="Zobacz projekty" type="primary" />
        </Link>
      </div>
      <div className="secondContainer">
        <div className="secondContainer_section">
          <IconSection iconSectionTitle="Opis sekcji 1" />
        </div>
        <div className="secondContainer__section">
          <IconSection iconSectionTitle="Opis sekcji 2" />
        </div>
      </div>
      <div className="parallaxImageContainer">
        <img
          src="/img/home-calc.jpg"
          alt="parallaxImage"
          className="parallaxImageContainer__img"
        />
        <div className="parallaxImageContainer__cover" />
      </div>
      <div className="thirdContainer">
        <CheckCalc />
      </div>
    </>
  );
};

export default Home;
