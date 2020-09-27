import React from "react";
import "../styles/Contact.scss";

// Components
import Form from "../components/Form";

// Icons
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactContainer-left">
        <div className="contactContainer__texts">
          <h1 className="contactContainer__texts__header">Kontakt</h1>
          <p className="contactContainer__texts__description">
            Wypełnij formularz a skontaktujemy się z Tobą w ciągu 24 godzin
          </p>
        </div>
        <div className="contactContainer__contacts">
          <div className="contactContainer__contacts__section">
            <CallIcon className="contactContainer-icon" />
            <p className="contactContainer__contacts__section__text">
              123-222-420
            </p>
          </div>
          <div className="contactContainer__contacts__section">
            <MailIcon className="contactContainer-icon" />
            <p className="contactContainer__contacts__section__text">
              jacek.szwarc@gmail.com
            </p>
          </div>
        </div>
        <div className="contactContainer__socials">
          <a href="https://www.facebook.com/">
            <img
              src="/icons/facebook.svg"
              alt="facebook"
              className="contactContainer__socials__icon"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="/icons/instagram.svg"
              alt="instagram"
              className="contactContainer__socials__icon"
            />
          </a>
          <a href="https://twitter.com/">
            <img
              src="/icons/twitter.svg"
              alt="twitter"
              className="contactContainer__socials__icon"
            />
          </a>
        </div>
      </div>
      <div className="contactContainer-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
