import React, { useState } from "react";
import { Formik, Field } from "formik";
import axios from "axios";

// Components
import Alert from "../components/Alert";

const Contact = () => {

  const emailPattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const [err, setErr] = useState((<></>))

  const handleSubmit = (values) => {
    if (values.firstName.length <= 2) {
      setErr((<Alert text="Imię jest za krótkie" />))
    } else if (values.lastName.length <= 2) {
      setErr((<Alert text="Nazwisko jest za krótkie" />))
    } else if (!values.email.toLowerCase().match(emailPattern)) {
      setErr((<Alert text="Email jest niepoprawny" />))
    } else if (values.message.length <= 10) {
      setErr((<Alert text="Wiadomość jest za krótka" />))
    } else {
      setErr((<Alert text="Wysłano!" />))
      setTimeout(() => {
        setErr((<></>))
      }, 3000);

      axios.post("/sendForm", values)
        .then(res => console.log("success"))
        .catch(err => console.log(err))
        
    };
  };

  return (

    <div style={{marginTop: '200px'}}>
    <h1>Kontakt</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      }}
      onSubmit={handleSubmit}>
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit} >
            <label>Imię</label>
            <Field name={"firstName"} type="text" />

            <label>Nazwisko</label>
            <Field name={"lastName"} type="text" />

            <label>Adres email</label>
            <Field name={"email"} type="text" />

            <label>Numer telefonu</label>
            <Field name={"phone"} type="text" />

            <label>Wiadomość</label>
            <Field name={"message"} type="text" />

            <button type="submit">Wyślij</button>
          </form>
        )}
    </Formik>
          <br />
          <br />
          {err}
    </div>

  );
};

export default Contact;
