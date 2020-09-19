import React, { useState, useRef } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import "./styles/Form.scss";

// Components
import Alert from "../components/Alert";
import Button from "../components/Button";

const Form = () => {
  const emailPattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [err, setErr] = useState(<></>);

  const label1 = useRef();

  const handleChange = (values) => {
    values.target.value !== ""
      ? (label1.current.className =
          "formContainer__form__row__field__label-active")
      : (label1.current.className = "formContainer__form__row__field__label");
  };

  const handleSubmit = (values) => {
    console.log(values);
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
    <div className="formContainer">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          file: "",
          message: "",
        }}
        onSubmit={handleSubmit}
      >
        {(formProps) => (
          <form
            className="formContainer__form"
            onSubmit={formProps.handleSubmit}
          >
            <div className="formContainer__form__row">
              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name={"firstName"}
                  type="text"
                  value={formProps.values.name}
                  onChange={handleChange}
                />
                <label
                  ref={label1}
                  className="formContainer__form__row__field__label"
                >
                  Imię
                </label>
              </div>

              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name={"lastName"}
                  type="text"
                />
                <label className="formContainer__form__row__field__label">
                  Nazwisko
                </label>
              </div>
            </div>

            <div className="formContainer__form__row">
              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name={"email"}
                  type="text"
                />
                <label className="formContainer__form__row__field__label">
                  Adres email
                </label>
              </div>

              <div className="formContainer__form__row__field">
                <label className="formContainer__form__row__field__fileLabel">
                  <input
                    onChange={(e) =>
                      formProps.setFieldValue("file", e.target.files[0])
                    }
                    name={"file"}
                    type="file"
                    style={{ display: "none" }}
                  />
                  <a>
                    Dodaj plik
                  </a>
                </label>
              </div>
            </div>

            <div className="formContainer__form__row">
              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name={"message"}
                  type="text"
                />
                <label className="formContainer__form__row__field__label">
                  Wiadomość
                </label>
              </div>
            </div>

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
  );
};

export default Form;
