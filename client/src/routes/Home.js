import React from "react";
import { Link } from 'react-router-dom';

import '../styles/Home.scss';

// Components
import Button from '../components/Button';
import IconSection from '../components/IconSection';

const Home = () => {
  return (
    <>
    <div className="introContainer">
      <h1 className="introContainer__header">Intro text</h1>
      <p className="introContainer__description">Zatrudniamy i współpracujemy ze specjalistami <br /> z wieloletnim doświadczeniem.</p>
      <img className="introContainer__image" src="/img/intro.jpg" alt="" />
      <div className="introContainer__imageCover"></div>
      <Link to='/gallery'>
        <Button text="Zobacz projekty" type="primary"/>
      </Link>
    </div>
    <IconSection />
    </>
  );
};

export default Home;
