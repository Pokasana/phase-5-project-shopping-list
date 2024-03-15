import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function AddItemForm({ onAddItem }) {

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter an item name"),
    favorite: yup.bool().default(() => false),
    user_id: yup.number(),
    shop_id: yup.number()
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      favorite: false,
      user_id: "",
      shop_id: ""
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      fetch("http://127.0.0.1:5555/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      .then(r => r.json())
      .then(newItem => {
        onAddItem(newItem);
      })
      resetForm()
    }
  })

  return (
    <form className="add_item" onSubmit={formik.handleSubmit}>
      <h3>Add a new Item</h3>

      <label htmlFor="name">Item Name</label><br/>
      <input
        id="name"
        name="name"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <p style={{color: "red"}}>{formik.errors.name}</p>

      <label htmlFor="favorite">Favorite Item?</label><br/>
      <input
        id="favorite"
        name="favorite"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.favorite}
      />
      <p style={{color: "red"}}>{formik.errors.favorite}</p>

      <label htmlFor="user_id">User</label><br/>
      <input
        id="user_id"
        name="user_id"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.user_id}
      />
      <p style={{color: "red"}}>{formik.errors.user_id}</p>

      <label htmlFor="shop_id">Shop</label><br/>
      <input
        id="shop_id"
        name="shop_id"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.shop_id}
      />
      <p style={{color: "red"}}>{formik.errors.shop_id}</p>

      <button type="submit">Add</button>
    </form>
  )
};

export default AddItemForm;