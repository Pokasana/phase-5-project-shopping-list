import React from "react";
import { useFormik } from 'formik';
import * as yup from "yup";

import { useDispatch } from 'react-redux'
import { addNewComment } from './commentsSlice'

function AddCommentForm() {

  const dispatch = useDispatch()

  const formSchema = yup.object().shape({
    content: yup.string()
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) =>  {
      dispatch(addNewComment(values))
      resetForm();
    }
  })

  return (
    <form className="add_comment" onSubmit={formik.handleSubmit}>
      <h3>Add a comment</h3>
      <input
        id="content"
        name="content"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      <button type="submit">+</button>

      <p style={{color: "red"}}>{formik.errors.content}</p>
    </form>
  )
};

export default AddCommentForm;