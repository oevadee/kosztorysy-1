import React from "react";
import "./Card.scss";

const Card = ({ title, header, description, imageHeight, imageWidth }) => {
  return (
    <div className="card">
      <img
        src="/img/gallery1.jpg"
        alt="image"
        className="card__img"
        style={{ height: imageHeight, width: imageWidth }}
      />
      <h3 className="card__title">{title}</h3>
      <h2 className="card__header">{header}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
