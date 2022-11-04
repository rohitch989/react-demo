import React, { useState } from "react";
import RemixInput from "./RemixInput";

function Form({ searchUser }) {
  const [formInput, setFormInput] = useState({});

  const [message, setMessage] = useState({
    success: "",
    error: {
      firstName: "",
      lastName: "",
      username: "",
      age: "",
      email: "",
      phone: "",
      birthDate: "",
      form: "",
    },
  });
  const handleChange = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (message.error[e.target.name])
      setMessage((prev) => ({
        ...prev,
        error: { ...prev.error, [e.target.name]: "" },
      }));
    if (message.success) setMessage((prev) => ({ ...prev, success: "" }));
    if (message.error.form)
      setMessage((prev) => ({ ...prev, error: { ...prev.error, form: "" } }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "search":
        let key, value;
        const values = Object.values(formInput);
        const keys = Object.keys(formInput);
        for (let i = 0; i < values.length; i++) {
          if (values[i]) {
            key = keys[i];
            value = values[i];
            break;
          }
        }
        if (key && value) {
          searchUser({ key, value });
        }
        break;
      case "add":
        break;
      default:
        break;
    }
  };

  return (
    <form className="form">
      <div className="form-group">
        <RemixInput
          id="firstName"
          name="firstName"
          type="text"
          value={formInput.name}
          onChange={handleChange}
          errors={message?.error?.firstName ? message.error.firstName : null}
        />
        <RemixInput
          id="maidenName"
          name="maidenName"
          type="text"
          value={formInput.maidenName}
          onChange={handleChange}
        />
        <RemixInput
          id="lastName"
          name="lastName"
          type="text"
          value={formInput.lastName}
          onChange={handleChange}
          errors={message?.error?.lastName ? message.error.lastName : null}
        />
        <RemixInput
          id="username"
          name="username"
          type="text"
          value={formInput.username}
          onChange={handleChange}
          errors={message?.error?.username ? message.error.username : null}
        />
        <RemixInput
          id="age"
          name="age"
          type="text"
          value={formInput.age}
          onChange={handleChange}
          errors={message?.error?.age ? message.error.age : null}
        />
        <RemixInput
          id="email"
          name="email"
          type="email"
          value={formInput.email}
          onChange={handleChange}
          errors={message?.error?.email ? message.error.email : null}
        />
        <RemixInput
          id="phone"
          name="phone"
          type="text"
          value={formInput.phone}
          onChange={handleChange}
          errors={message?.error?.phone ? message.error.phone : null}
        />
        <RemixInput
          id="birthDate"
          name="birthDate"
          type="text"
          value={formInput.birthDate}
          onChange={handleChange}
          errors={message?.error?.birthDate ? message.error.birthDate : null}
        />
      </div>
      <div className="btns">
        <div></div>
        <div>
          <button
            name="search"
            className="btn btn-secondary"
            value="search"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
          <button
            name="add"
            className="btn btn-sucess"
            value="add"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
          <div />
        </div>
      </div>
      {message?.success ? (
        <h4 className="text-center text-success">{message.success}</h4>
      ) : null}
      {message?.error?.form ? (
        <h4 className="text-center text-red-600">{message.error.form}</h4>
      ) : null}
    </form>
  );
}

export default Form;
