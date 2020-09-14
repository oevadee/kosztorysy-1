import React from "react";

import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="introContainer">
      <h1 className="introContainer__header">Intro text</h1>
      <p className="introContainer__description">Zatrudniamy i współpracujemy ze specjalistami <br /> z wieloletnim doświadczeniem.</p>
      <img className="introContainer__image" src="/img/intro.jpg" alt="" />
      <div className="introContainer__imageCover"></div>
      <button className="introContainer__button">Zobacz projekty</button>
    </div>
  );
};

export default Home;
