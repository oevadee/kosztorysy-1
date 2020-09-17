import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/GalleryPreview.scss";

import { gallery1 } from "../context/imageProvider";

// Icons
import ArrowForward from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBack from "@material-ui/icons/ArrowBackIosOutlined";
import Close from "@material-ui/icons/CloseOutlined";

const GalleryPreview = () => {
  const [translationX, setTranslationX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);

  const miniatures = useRef(null);

  const goLeft = () => {
    if (translationX === 0) {
      setTranslationX(translationX - (gallery1.images.length - 1) * 100);
      setPreviousIndex(activeIndex)
      setActiveIndex(gallery1.images.length - 1);
    } else {
      setTranslationX(translationX + 100);
      setPreviousIndex(activeIndex)
      setActiveIndex(activeIndex - 1);
    }
  };

  const goRight = () => {
    if (translationX === -((gallery1.images.length - 1) * 100)) {
      setTranslationX(0);
      setPreviousIndex(activeIndex)
      setActiveIndex(0);
    } else {
      setTranslationX(translationX - 100);
      setPreviousIndex(activeIndex)
      setActiveIndex(activeIndex + 1);
    }
  };

  const goMiniature = (index) => {
    setTranslationX(-(index * 100));
    setPreviousIndex(activeIndex)
    setActiveIndex(index);
  };

  useEffect(() => {
    console.log(activeIndex, miniatures.current.children[activeIndex]);
    miniatures.current.children[activeIndex].style.opacity = 1
    if (previousIndex === null) return
    else miniatures.current.children[previousIndex].style.opacity = 0.3
  }, [activeIndex]);

  return (
    <div className="previewContainer">
      <div className="previewContainer__slider">
        {gallery1.images.map(({ index, src }) => (
          <img
            key={index}
            src={src}
            alt=""
            className="previewContainer__slider__img"
            style={{ transform: `translateX(${translationX}%)` }}
          />
        ))}
        <button
          className="previewContainer__skipPanel skipPanel-left"
          onClick={goLeft}
        >
          <ArrowBack className="previewContainer__skipPanel__icon" />
        </button>
        <button
          className="previewContainer__skipPanel skipPanel-right"
          onClick={goRight}
        >
          <ArrowForward className="previewContainer__skipPanel__icon" />
        </button>
      </div>
      <div className="previewContainer__miniatures" ref={miniatures}>
        {gallery1.images.map(({ index, src }) => (
          <img
            key={index}
            src={src}
            alt=""
            className="previewContainer__miniatures__miniature"
            onClick={() => goMiniature(index)}
          />
        ))}
      </div>
      <Link to="/gallery">
        <Close className="previewContainer__close__icon" />
      </Link>
    </div>
  );
};

export default GalleryPreview;
