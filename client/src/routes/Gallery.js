import React, { useEffect, useState } from "react";
import "../styles/Gallery.scss";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

//Components
import Button from "../components/Button";
import Card from "../components/Card";

// Images

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const { page } = useParams();

  useEffect(() => {
    Axios.get("/galleries")
      .then((res) => setGalleries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getLeftSection = () => {
    return galleries.reduce((acc, el, index) => {
      return index % 3 === 0 ? [...acc, el] : acc;
    }, []);
  };

  const getRightSection = () => {
    return galleries.reduce((acc, el, index) => {
      return index % 3 === 0 ? acc : [...acc, el];
    }, []);
  };

  const getNextButton = () => {
    console.log(getLeftSection().slice(parseInt(page) + 1, parseInt(page + 2)));
    if (
      getLeftSection().slice(parseInt(page) + 1, parseInt(page + 2)).length !==
      0
    ) {
      return (
        <Link to={`${parseInt(page) + 1}`}>
          <Button text="dalej" type="secondary" />
        </Link>
      );
    } else {
      return <></>;
    }
  };
  const getPreviousButton = (page) => {
    if (page !== 0) {
      return (
        <Link to={`${page - 1}`}>
          <Button text="wruć" type="secondary-full" />
        </Link>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="galleryContainer">
      <div className="gallerySection">
        <div className="gallerySection__left">
          <h1 className="gallerySection__header">Nasze projekty</h1>
          {getLeftSection()
            .slice(parseInt(page), parseInt(page) + 1)
            .map((el) => (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                header={el.header}
                description={el.description}
                imageHeight="320px"
                imageWidth="320px"
                src={el.thumbnail}
              />
            ))}
          {getNextButton()}
          {getPreviousButton(parseInt(page))}
        </div>
        <div className="gallerySection__right">
          {getRightSection()
            .slice(parseInt(page) * 2, (parseInt(page) + 1) * 2)
            .map((el) => (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                header={el.header}
                description={el.description}
                imageHeight="220px"
                imageWidth="220px"
                src={el.thumbnail}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
