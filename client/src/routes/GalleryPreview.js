import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/GalleryPreview.scss";

// Icons
import ArrowForward from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined';
import Close from '@material-ui/icons/CloseOutlined';

const GalleryPreview = ({ src }) => {
  const [translationX, setTranslationX] = useState(0);
  let images = [
    '/img/house1.jpg',  
    '/img/house2.jpg',  
    '/img/house3.jpg',  
    '/img/house4.jpg',  
    '/img/house5.jpg',  
  ];

  const goLeft = () => {
    setTranslationX(translationX + 100);
    if (translationX === 0) setTranslationX(translationX - ((images.length - 1) * 100))
    console.log(translationX);
  };

  const goRight = () => {
    setTranslationX(translationX - 100);
    if (translationX === -((images.length - 1) * 100)) setTranslationX(0)
    console.log(translationX);
  };

  return (
    <div className="previewContainer">
      <div className="previewContainer__slider">
        {images.map(src => (
          <img
            src={src}
            className="previewContainer__slider__img"
            style={{ transform: `translateX(${translationX}%)` }}
          />
        ))}
        <button className="previewContainer__arrow arrow-left" onClick={goLeft}>
          <ArrowBack className="previewContainer__arrow__icon" />
        </button>
        <button
          className="previewContainer__arrow arrow-right"
          onClick={goRight}
        >
          <ArrowForward className="previewContainer__arrow__icon" />
        </button>
      </div>
      <div className="previewContainer__miniatures">
        {images.map(src => (
          <img src={src} className="previewContainer__miniatures__miniature" />
        ))}
      </div>
      <Link to="/gallery">
        <Close className="previewContainer__close__icon" />
      </Link>
    </div>
  );
};

export default GalleryPreview;
