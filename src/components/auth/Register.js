import React from "react";
import { Link } from "react-router-dom";
import registerFormSchema from "./validation/registerFormSchema";
import FormBuilder from "../utils/FormBuilder";

export default function Register() {
  const fields = [
    { id: "username", type: "text", label: "Username" },
    { id: "password", type: "text", label: "Password" },
    { id: "phone", type: "text", label: "Phone" },
  ];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  const submit = (e) => {
    e.preventDefault();
    // post login code here
  };

  return (
    <div className="form-container">
      <h2>Create Your Account</h2>
      <form onSubmit={submit}>
        <FormBuilder
          fields={fields}
          init={init}
          submitText="Sign Up"
          validationSchema={registerFormSchema}
        />
      </form>
    </div>
  );
}
