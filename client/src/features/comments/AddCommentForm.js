import React from "react";
import { useFormik } from 'formik';
import * as yup from "yup";

import { useDispatch, useSelector } from 'react-redux'
import { addNewComment } from './commentsSlice'
import { selectLoggedInUser } from '../login/loginSlice'

function AddCommentForm({ item }) {

  const dispatch = useDispatch()
  const currentUser = useSelector(selectLoggedInUser)

  const formSchema = yup.object().shape({
    comment: yup.string(),
    item_id: yup.number(),
    user_id: yup.number()
  });

  const formik = useFormik({
    initialValues: {
      comment: "",
      item_id: item.id,
      user_id: currentUser.id
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
        id="comment"
        name="comment"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.comment}
        style={{width: "350px"}}
      />
      <button type="submit">+</button>

      <p style={{color: "red"}}>{formik.errors.comment}</p>
    </form>
  )
};

export default AddCommentForm;