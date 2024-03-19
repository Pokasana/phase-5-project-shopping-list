import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function AddShopForm({ refresh }) {

  const formSchema = yup.object().shape({
    shop: yup.string().required("Must enter a shop name")
  });

  const formik = useFormik({
    initialValues: {
      shop: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      fetch("http://127.0.0.1:5555/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values.shop)
      })
      .then(r => {
        if (r.status === 201) {
          refresh()
        }
      })
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
      <button type="submit">Add</button>

      <p style={{color: "red"}}>{formik.errors.shop}</p>
    </form>
  )
};

export default AddShopForm;