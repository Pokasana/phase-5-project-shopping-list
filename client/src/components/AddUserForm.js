import React from "react";
import { useFormik } from 'formik';
import * as yup from "yup";

function AddUserForm({ refresh }) {

  const formSchema = yup.object().shape({
    user: yup.string().required("Must enter an user name")
  });

  const formik = useFormik({
    initialValues: {
      user: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) =>  {
      fetch("http://127.0.0.1:5555/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values.user, null, 2)
      })
      .then(r => {
        if (r.status == 201) {
          refresh();
        }
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
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.user}
      />
      <button type="submit">Add</button>

      <p style={{color: "red"}}>{formik.errors.user}</p>
    </form>
  )
};

export default AddUserForm;