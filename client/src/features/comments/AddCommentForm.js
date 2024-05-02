import React from "react";
import { useFormik } from 'formik';
import * as yup from "yup";

import { useDispatch } from 'react-redux'
import { addNewUser } from './usersSlice'

function AddCommentForm() {

  const dispatch = useDispatch()

  const formSchema = yup.object().shape({
    user: yup.string().required("Must enter an user name")
  });

  const formik = useFormik({
    initialValues: {
      user: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) =>  {
      dispatch(addNewUser(values))
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
      <button type="submit">+</button>

      <p style={{color: "red"}}>{formik.errors.user}</p>
    </form>
  )
};

export default AddCommentForm;