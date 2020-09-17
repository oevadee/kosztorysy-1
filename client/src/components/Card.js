import React from "react";
import { Link } from 'react-router-dom';
import "./styles/Card.scss";

const Card = ({ title, header, description, imageHeight, imageWidth, descriptionWidth = '100%', src }) => {
  return (
    <div className="card">
      <Link to="/gallery/preview">
        <img
          src={src}
          alt=""
          className="card__img"
          style={{ height: imageHeight, width: imageWidth }}
        />
      </Link>
      <h3 className="card__title">{title}</h3>
      <Link to="gallery/preview">
        <h2 className="card__header">{header}</h2>
      </Link>
      <p className="card__description" style={{width: descriptionWidth}}>{description}</p>
    </div>
  );
};

export default Card;
