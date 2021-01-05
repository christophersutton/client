import React from "react";

export default function Register(props) {
  const { formValues, update, submit } = props;
  const onChange = (evt) => {
    const { name, value } = evt.target;

    update(name, value);
  };
  return (
    <div>
      Welcome Register Here!
      <form onSubmit={submit}>
        <label htmlFor="username">
          Name
          <input
            type="text"
            name="username"
            placeholder="type a username"
            maxLength="30"
          />
        </label>
        <div>
          <label htmlFor="password">
            password
            <input
              type="text"
              name="password"
              value={formValues.password}
              onChange={onChange}
              placeholder="type your password"
              maxLength="30"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phonenumber">
            Phone Number
            <input
              type="phone number"
              name="isPhone"
              value={formValues.phonenumber}
              onChange={onChange}
              placeholder="xxx-xxx-xxxx"
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
