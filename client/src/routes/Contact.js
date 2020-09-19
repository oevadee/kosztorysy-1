import React, { useState } from "react";
import "../styles/Contact.scss";

import { Formik, Field } from "formik";
import axios from "axios";

// Components
import Alert from "../components/Alert";
import Button from "../components/Button";

// Icons
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  const emailPattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [err, setErr] = useState(<></>);

  const handleSubmit = (values) => {
    if (values.firstName.length <= 2) {
      setErr(<Alert text="Imię jest za krótkie" />);
    } else if (values.lastName.length <= 2) {
      setErr(<Alert text="Nazwisko jest za krótkie" />);
    } else if (!values.email.toLowerCase().match(emailPattern)) {
      setErr(<Alert text="Email jest niepoprawny" />);
    } else if (values.message.length <= 10) {
      setErr(<Alert text="Wiadomość jest za krótka" />);
    } else {
      setErr(<Alert text="Wysłano!" />);
      setTimeout(() => {
        setErr(<></>);
      }, 3000);

      axios
        .post("/sendForm", values)
        .then((res) => console.log("success"))
        .catch((err) => console.log(err));
    }
  };

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
          <img
            src="/icons/facebook.svg"
            alt="facebook"
            className="contactContainer__socials__icon"
          />
          <img
            src="/icons/instagram.svg"
            alt="instagram"
            className="contactContainer__socials__icon"
          />
          <img
            src="/icons/twitter.svg"
            alt="twitter"
            className="contactContainer__socials__icon"
          />
        </div>
      </div>
      <div className="contactContainer-right">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          onSubmit={handleSubmit}
        >
          {(formProps) => (
            <form
              className="contactContainer__form"
              onSubmit={formProps.handleSubmit}
            >
              <label className="contactContainer__form__label">Imię</label>
              <Field
                className="contactContainer__form__input"
                name={"firstName"}
                type="text"
              />

              <label className="contactContainer__form__label">Nazwisko</label>
              <Field
                className="contactContainer__form__input"
                name={"lastName"}
                type="text"
              />

              <label className="contactContainer__form__label">
                Adres email
              </label>
              <Field
                className="contactContainer__form__input"
                name={"email"}
                type="text"
              />

              <label className="contactContainer__form__label">
                Numer telefonu
              </label>
              <Field
                className="contactContainer__form__input"
                name={"phone"}
                type="text"
              />

              <label className="contactContainer__form__label">Wiadomość</label>
              <Field
                className="contactContainer__form__input"
                name={"message"}
                type="text"
              />

              <Button
                text="Wyślij wiadomość"
                type="secondary-full"
                submit="submit"
              />
            </form>
          )}
        </Formik>
        {err}
      </div>
    </div>
  );
};

export default Contact;
