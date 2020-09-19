import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/Home.scss";

// Components
import Button from "../components/Button";
import IconSection from "../components/IconSection";
import CheckCalc from "../components/CheckCalc";

const Home = () => {
  const [pageOffset, setPageOffset] = useState(0);

  const getPageOffset = () => {
    setPageOffset(window.pageYOffset - 1750);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPageOffset);
    return () => window.removeEventListener("scroll", getPageOffset);
  }, []);

  return (
    <>
      <div className="introContainer">
        <h1 className="introContainer__header">Intro text</h1>
        <p className="introContainer__description">
          Zatrudniamy i współpracujemy ze specjalistami <br /> z wieloletnim
          doświadczeniem.
        </p>
        <img className="introContainer__image" src="/img/gallery2/gallery2_1.jpg" alt="" />
        <div className="introContainer__imageCover"></div>
        <Link to="/gallery/page/0">
          <Button text="Zobacz projekty" type="primary" />
        </Link>
      </div>
      <div className="secondContainer">
        <div className="secondContainer_section">
          <IconSection iconType="book" iconSectionTitle="Opis sekcji 1" />
        </div>
        <div className="secondContainer__section">
          <IconSection iconSectionTitle="Opis sekcji 2" />
        </div>
      </div>
      <div className="parallaxImageContainer">
        <img
          src="/img/gallery3/home-calc.jpg"
          alt="parallaxImage"
          className="parallaxImageContainer__img"
          style={{transform: `translateY(${pageOffset * 0.6}px)`}}
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
