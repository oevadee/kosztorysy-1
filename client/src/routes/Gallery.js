import React from "react";
import "../styles/Gallery.scss";

//Components
import Button from "../components/Button";
import Card from "../components/Card";

// Images
import { gallery1 } from '../context/imageProvider';

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <div className="gallerySection">
        <div className="gallerySection__left">
          <h1 className="gallerySection__header">Nasze projekty</h1>
          <Card
            title="Design"
            header="DOMY BLIŹNIAKI, TORUŃ"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, augue a rutrum vestibulum, ligula turpis dignissim risus, in mollis libero ex ac sapien."
            imageHeight="320px"
            imageWidth="320px"
            src={gallery1.intro}
          />
          <Button text="zobacz więcej" type="secondary-full" />
        </div>
        <div className="gallerySection__right">
          <Card
            title="Design"
            header="Wyliczenia"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, augue."
            imageHeight="220px"
            imageWidth="220px"
            descriptionWidth="75%"
            src="/img/gallery2.jpg"
          />
          <Card
            title="Design"
            header="PLANY"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, augue."
            imageHeight="220px"
            imageWidth="220px"
            descriptionWidth="75%"
            src="/img/gallery3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
