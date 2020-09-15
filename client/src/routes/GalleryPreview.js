import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/GalleryPreview.scss";

import { gallery1 } from "../context/imageProvider";

// Icons
import ArrowForward from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBack from "@material-ui/icons/ArrowBackIosOutlined";
import Close from "@material-ui/icons/CloseOutlined";

const GalleryPreview = ({ src }) => {
  const [translationX, setTranslationX] = useState(0);

  const goLeft = () => {
    setTranslationX(translationX + 100);
    if (translationX === 0)
      setTranslationX(translationX - (gallery1.images.length - 1) * 100);
    console.log(translationX);
  };

  const goRight = () => {
    setTranslationX(translationX - 100);
    if (translationX === -((gallery1.images.length - 1) * 100)) setTranslationX(0);
    console.log(translationX);
  };

  return (
    <div className="previewContainer">
      <div className="previewContainer__slider">
        {gallery1.images.map((src) => (
          <img
            src={src}
            className="previewContainer__slider__img"
            style={{ transform: `translateX(${translationX}%)` }}
          />
        ))}
        <button className="previewContainer__skipPanel skipPanel-left" onClick={goLeft}>
          <ArrowBack className="previewContainer__skipPanel__icon" />
        </button>
        <button
          className="previewContainer__skipPanel skipPanel-right"
          onClick={goRight}
        >
          <ArrowForward className="previewContainer__skipPanel__icon" />
        </button>
      </div>
      <div className="previewContainer__miniatures">
        {gallery1.images.map((src) => (
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
