import React, { useState } from "react";
import { useFormik } from 'formik';

function AddUserForm({ onAddUser }) {
  const [refreshPage, setRefreshPage] = useState(false);

  const formik = useFormik({
    initialValues: {
      user: "",
    },
    onSubmit: (values, { resetForm }) =>  {
      fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values.user, null, 2)
      })
      .then(r => r.json())
      .then(newUser => {
        console.log(newUser);
        onAddUser(newUser);
      })
      resetForm();
      }
  })

  return (
    <form className="add_user" onSubmit={formik.handleSubmit}>
      <h3>Add a new user</h3>
      <input
        id="user"
        name="user"
        type="user"
        autocomplete="off"
        onChange={formik.handleChange}
        value={formik.values.user}
      />
      <button type="submit">Add</button>
    </form>
  )
};

export default AddUserForm;