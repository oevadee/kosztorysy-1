import React from "react";
import { Formik, Field } from "formik";

// Components
import Button from '../components/Button';

const Contact = () => {

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (<>
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
            <Field name={"email"} type="text" />

            <label>Wiadomość</label>
            <Field name={"message"} type="text" />
            
          </form>
        )}


    </Formik>
    </>
  );
};

export default Contact;
