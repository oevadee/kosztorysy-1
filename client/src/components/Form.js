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
  const [file, setFile] = useState(undefined);

  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const refsArr = [firstName, lastName, email, message];

  const handleChange = (e) => {
    refsArr.forEach((ref) => {
      if (e.target.name === ref.current.htmlFor) {
        e.target.value !== ""
          ? (ref.current.className =
              "formContainer__form__row__field__label-active")
          : (ref.current.className = "formContainer__form__row__field__label");
      }
    });
  };

  const handleSubmit = (values) => {
    console.log(file);
    if (values.firstName.length <= 2) {
      setErr(<Alert text="Imię jest za krótkie" />)
    } else if (values.lastName.length <= 2) {
      setErr(<Alert text="Nazwisko jest za krótkie" />);
    } else if (!values.email.toLowerCase().match(emailPattern)) {
      setErr(<Alert text="Email jest niepoprawny" />);
    } else if (values.message.length <= 10) {
      setErr(<Alert text="Wiadomość jest za krótka" />);
    } else {
      setErr(<Alert text="Wysłano!" />);
      setTimeout(() => {
        setErr(<></>)
      }, 3000);
    }
    console.log(values);

    let formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("file", values.file);
    formData.append("message", values.message);

    axios
      .post("/sendForm", formData, {
        headers: new Headers({ Accept: 'application/json' })
      })
      .then((res) => console.log("success", res.data))
      .catch((err) => console.log(err));
    // }
  };

  return (
    <div className="formContainer">
      {err}
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
            encType="multipart/form-data"
            className="formContainer__form"
            onSubmit={formProps.handleSubmit}
          >
            <div className="formContainer__form__row">
              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name="firstName"
                  type="text"
                  value={formProps.values.name}
                  onKeyUp={handleChange}
                />
                <label
                  htmlFor="firstName"
                  ref={firstName}
                  className="formContainer__form__row__field__label"
                >
                  Imię
                </label>
              </div>

              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name="lastName"
                  type="text"
                  value={formProps.values.name}
                  onKeyUp={handleChange}
                />
                <label
                  htmlFor="lastName"
                  ref={lastName}
                  className="formContainer__form__row__field__label"
                >
                  Nazwisko
                </label>
              </div>
            </div>

            <div className="formContainer__form__row">
              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name="email"
                  type="text"
                  value={formProps.values.name}
                  onKeyUp={handleChange}
                />
                <label
                  htmlFor="email"
                  ref={email}
                  className="formContainer__form__row__field__label"
                >
                  Adres email
                </label>
              </div>

              <div className="formContainer__form__row__field">
                <label className={file ? "formContainer__form__row__field__fileLabel-full" : "formContainer__form__row__field__fileLabel"}>
                  <input
                    name="formFile"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      formProps.setFieldValue("file", e.target.files[0]);
                    }}
                  />
                  <p>{file ? 'Plik dodany' : 'Dodaj plik'}</p>
                </label>
              </div>
            </div>

            <div className="formContainer__form__row">
              <div className="formContainer__form__row__field">
                <Field
                  className="formContainer__form__row__field__input"
                  name="message"
                  type="text"
                  value={formProps.values.name}
                  onKeyUp={handleChange}
                />
                <label
                  htmlFor="message"
                  ref={message}
                  className="formContainer__form__row__field__label"
                >
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
    </div>
  );
};

export default Form;
