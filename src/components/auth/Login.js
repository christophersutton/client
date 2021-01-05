import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import loginFormSchema from "./validation/loginFormSchema";

const initialFormValues = {
  username: "",
  password: ""
};

const initialFormErrors = {
  username: "",
  password: ""
};


export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    Yup.reach(loginFormSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    loginFormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const validate = (e) => {
    const { name, value } = e.target;
    setFormErrors(name, value);
  };

  const change = (e) => {
    const { name, value } = e.target;
    JSON.stringify(errors) !== JSON.stringify(initialFormErrors) && validate(e)
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    // post login info code here
  };

  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='username'>Username</label>
          <div>
            <input
              id='username'
              name='username'
              type='text'
              autoComplete='username'
              value={formValues.username}
              className={errors.username.length > 0 ? "error" : ""}
              onChange={change}
              onBlur={validate}
              required
            ></input>
          </div>
          <p className='errors'>&nbsp;{errors.username}</p>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <div>
            <input
              id='password'
              name='password'
              type='text'
              autoComplete='password'
              value={formValues.password}
              onChange={change}
              onBlur={validate}
              required 
              className={errors.password.length > 0 ? "error" : ""}
            ></input>
          </div>
          <p className='errors'>&nbsp;{errors.password}</p>
          
          
        </div>
        
        <div className="login">
          <button type='submit' disabled={disabled}>
            Sign In
          </button>
          <Link className="forgotpw" to='/resetpassword'>Forgot Password?</Link>
        </div>
        
      </form>
    </div>
  );
}
