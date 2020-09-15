import React from "react";
import "../styles/Gallery.scss";

//Components
import Button from "../components/Button";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <div className="galleryContainer__left">
        <h1 className="galleryContainer__header">Nasze projekty</h1>
        <Card
          title="Design"
          header="DOMY BLIŹNIAKI, TORUŃ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, augue a rutrum vestibulum, ligula turpis dignissim risus, in mollis libero ex ac sapien."
          imageHeight="320px"
          imageWidth="320px"
        />
        <Button text="zobacz więcej" type="secondary-full" />
      </div>
      <div className="galleryContainer__right">
        <Card
          title="Design"
          header="Wyliczenia"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, augue."
          imageHeight="220px"
          imageWidth="220px"
        />
        <Card
          title="Design"
          header="PLANY"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, augue."
          imageHeight="220px"
          imageWidth="220px"
        />
      </div>
    </div>
  );
};

export default Gallery;
