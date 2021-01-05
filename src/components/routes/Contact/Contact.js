import React, { useState, useEffect } from "react";
import contactFormSchema from "./contactFormSchema";
import * as Yup from "yup";


const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    Yup.reach(contactFormSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    contactFormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const validate = (e) => {
    const { name, value } = e.target;
    setFormErrors(name, value);
  };

  const change = (e) => {
    const { name, value } = e.target;
    JSON.stringify(errors) !== JSON.stringify(initialFormErrors) && validate(e);
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    // post login info code here
  };

  return (
    <div className="form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            className={errors.name.length > 0 ? "error" : ""}
            onChange={change}
            onBlur={validate}
            required
          ></input>
            <p className='errors'>&nbsp;{errors.name}</p>
        </div>
        <div>
        <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formValues.email}
            className={errors.name.length > 0 ? "error" : ""}
            onChange={change}
            onBlur={validate}
            required
          ></input>
            <p className='errors'>&nbsp;{errors.email}</p>
        </div>
        <div>
        <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            value={formValues.message}
            className={errors.name.length > 0 ? "error" : ""}
            onChange={change}
            onBlur={validate}
            required
          ></textarea>
            <p className='errors'>&nbsp;{errors.message}</p>
        </div>
        <div className="login">
          <button type='submit' disabled={disabled}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
