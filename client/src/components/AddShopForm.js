import React, { useState } from "react";
import { useFormik } from "formik";

function AddShopForm({ onAddShop }) {

  const formik = useFormik({
    initialValues: {
      shop: "",
    },
    onSubmit: (values, { resetForm }) => {
      fetch("http://127.0.0.1:5555/shops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values.shop)
      })
      .then(r => r.json())
      .then(newShop => {
        onAddShop(newShop);
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
        type="shop"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.shop}
      />
      <button type="submit">Add</button>
    </form>
  )
};

export default AddShopForm;