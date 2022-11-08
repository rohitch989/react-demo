import React, { useEffect, useState } from "react";
import RemixInput from "./RemixInput";

function Form({ searchUser, error, addUser, formError, success, setPend }) {
  const [formInput, setFormInput] = useState({
    firstName: '', maidenName: '', lastName: '',
    username: '',
    email: '', age: '',
    gender: '', phone: '',
  });

  const [pendingUI, setPendingUI] = useState({ add: false, search: false })

  const handleChange = (e) => {
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    switch (e.target.name) {
      case "search":
        setPendingUI(prev => ({ ...prev, search: true }))
        setPend(true);
        searchUser(formInput);
        break;
      case "add":
        setPendingUI(prev => ({ ...prev, add: true }))
        addUser(formInput)
        break;
      default:
        break;

    }
    setFormInput({
      firstName: '', maidenName: '', lastName: '',
      username: '',
      email: '', age: '',
      gender: '', phone: '',
    })
  };
  useEffect(() => {
    if (error || formError || success)
      setPendingUI({ add: false, search: false })
  }, [error, formError, success])
  return (
    <form className="form">
      <div className="form-group">



        <RemixInput
          id="firstName"
          name="firstName"
          type="text"
          value={formInput.firstName}
          onChange={handleChange}
          error={formError?.firstName}
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
          error={formError?.lastName}
        />
        <RemixInput
          id="username"
          name="username"
          type="text"
          value={formInput.username}
          onChange={handleChange}
          error={formError?.username}

        />
        <RemixInput
          id="age"
          name="age"
          type="text"
          value={formInput.age}
          onChange={handleChange}
          error={formError?.age}

        />
        <RemixInput id="gender" name="gender" type="dropdown" value={['', 'male', 'female']} onChange={handleChange}
          error={formError?.gender}
        />
        <RemixInput
          id="email"
          name="email"
          type="email"
          value={formInput.email}
          onChange={handleChange}
          error={formError?.email}

        />
        <RemixInput
          id="phone"
          name="phone"
          type="text"
          value={formInput.phone}
          onChange={handleChange}
          error={formError?.phone}

        />

      </div>
      <div className="btns">
        <div>
          {error ? (
            <em className="text-red-600">{error}</em>
          ) : null}
        </div>
        <div>
          <button
            name="search"
            className="btn btn-secondary"
            value="search"
            type="submit"
            onClick={handleSubmit}
          >
            {pendingUI.search ? "Searching" : "Search"}
          </button>
          <button
            name="add"
            className="btn btn-sucess"
            value="add"
            type="submit"
            onClick={handleSubmit}
          >{pendingUI.add ? "Adding" : "Add"}
          </button>
          <div />
        </div>
      </div>
    </form>
  );
}

export default Form;
