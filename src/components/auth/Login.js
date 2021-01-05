import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import loginFormSchema from "./validation/loginFormSchema";


const initialFormValues = {
    username:"",
    password:"",
    isPhone:false
}

const initialFormErrors = {
    username:"",
    password:"",
    isPhone:""
}

const regex = /[a-zA-Z]/g;

export default function Login() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);
    const [isPhone,setIsPhone] = useState(true);
  
    const setFormErrors = (name, value) => {

        

        Yup.reach( loginFormSchema, name, isPhone)
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
        name === 'username' && value.match(regex) ? setIsPhone(false) : setIsPhone(true);
        setFormErrors(name, value);
      };
    
      const change = (e) => {
        const { name, value } = e.target;
        name === 'username' && value.match(regex) ? setIsPhone(false) : setIsPhone(true);
        errors !== initialFormErrors && validate(e);
        setFormValues({ ...formValues, [name]: value });
      };

      const submit = (e) => {
        e.preventDefault();
        // post login info code here
      }


    return (
        <div>
            <h1>Welcome Back</h1>
            <form onSubmit={submit}>
            <div>
              <label
                htmlFor="username"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={formValues.username}
                  onChange={change}
                  onBlur={validate}
                  required
                ></input>
              </div>
              {errors.username.length > 0 && (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="password"
                  value={formValues.password}
                  onChange={change}
                  onBlur={validate}
                  required

                ></input>
              </div>
              {errors.password.length > 0 && (
                <p className="text-red-600">{errors.password}</p>
              )}
              <Link to="/resetpassword">Forgot Password</Link>
            </div>
            <div>
            
            </div>
            <div>
              <button
                type="submit"
                disabled={disabled}
              >
                Sign In
              </button>
            </div>
            </form>
        </div>
    )
}