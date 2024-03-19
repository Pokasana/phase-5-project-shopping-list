import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function AddItemForm({ refresh, onAddItem }) {

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter an item name"),
    favorite: yup.bool().default(() => false),
    user_name: yup.string(),
    shop_name: yup.string()
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      favorite: false,
      user_name: "",
      shop_name: ""
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
      .then(r => {
        if (r.status === 201) {
          refresh()
        }
      })
      resetForm()
    }
  })

  return (
    <form className="add_item" onSubmit={formik.handleSubmit} style={{display: onAddItem ? "" : "none"}}>
      <h3>Add a new Item</h3>

      <label htmlFor="name">Item Name</label><br/>
      <input
        id="name"
        name="name"
        autoComplete="off"
        placeholder="Enter item name"
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

      <label htmlFor="user_name">User</label><br/>
      <input
        id="user_name"
        name="user_name"
        autoComplete="off"
        placeholder="Enter user name"
        onChange={formik.handleChange}
        value={formik.values.user_name}
      />
      <p style={{color: "red"}}>{formik.errors.user_name}</p>

      <label htmlFor="shop_name">Shop</label><br/>
      <input
        id="shop_name"
        name="shop_name"
        autoComplete="off"
        placeholder="Enter shop name"
        onChange={formik.handleChange}
        value={formik.values.shop_name}
      />
      <p style={{color: "red"}}>{formik.errors.shop_name}</p>

      <button type="submit">Add</button>
    </form>
  )
};

export default AddItemForm;