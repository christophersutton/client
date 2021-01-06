import React from "react";
import { Link } from "react-router-dom";
import loginFormSchema from "./validation/loginFormSchema";
import FormBuilder from "../utils/FormBuilder";

export default function Login() {
  const fields = [
    { id: "username", type: "text", label: "Username" },
    { id: "password", type: "text", label: "Password" },
  ];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  const submit = (e) => {
    e.preventDefault();
    // post login code here
  };

  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      <form onSubmit={submit}>
        <FormBuilder
          fields={fields}
          init={init}
          submitText="Sign In"
          validationSchema={loginFormSchema}
        />
      </form>
      <Link className="forgotpw" to="/resetpassword">
        Forgot Password?
      </Link>
    </div>
  );
}
