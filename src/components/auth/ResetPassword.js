import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import passwordResetSchema from "./validation/passwordResetSchema";

const initialFormValues = {
  email: "",
};

const initialFormErrors = {
  email: "",
};

export default function ResetPassword() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    Yup.reach(passwordResetSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    passwordResetSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const validate = (e) => {
    const { name, value } = e.target;
    setFormErrors(name, value);
  };

  const change = (e) => {
    const { name, value } = e.target;
    errors !== initialFormErrors && validate(e);
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    // post reset password code here
  };

  return (
    <div>
      <h1>Please enter email</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='email'>email</label>
          <div className='mt-1'>
            <input
              id='email'
              name='email'
              type='text'
              autoComplete='email'
              value={formValues.email}
              onChange={change}
              onBlur={validate}
              required
            ></input>
          </div>
          {errors.email.length > 0 && (
            <p className='text-red-600'>{errors.email}</p>
          )}
        </div>
        <div>
          <button type='submit' disabled={disabled}>
            Email Recovery Link
          </button>
        </div>
      </form>
    </div>
  );
}
