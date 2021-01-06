import React from "react";
import passwordResetSchema from "./validation/passwordResetSchema";
import FormBuilder from "../utils/FormBuilder";

export default function ResetPassword() {
  const fields = [{ id: "email", type: "text" }];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  const submit = (e) => {
    e.preventDefault();
    // post reset password code here
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={submit}>
        <FormBuilder
          fields={fields}
          init={init}
          submitText="Email Recovery Link"
          validationSchema={passwordResetSchema}
        />
      </form>
    </div>
  );
}
