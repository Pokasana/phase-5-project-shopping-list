import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch } from 'react-redux'
import { addNewShop } from './shopsSlice'

function AddShopForm({ refresh }) {

  const dispatch = useDispatch()

  const formSchema = yup.object().shape({
    shop: yup.string().required("Must enter a shop name")
  });

  const formik = useFormik({
    initialValues: {
      shop: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addNewShop(values))
      resetForm()
    }
  })

  return (
    <form className="add_shop" onSubmit={formik.handleSubmit}>
      <h3>Add a new shop</h3>
      <input
        id="shop"
        name="shop"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.shop}
      />
      <button type="submit">+</button>

      <p style={{color: "red"}}>{formik.errors.shop}</p>
    </form>
  )
};

export default AddShopForm;