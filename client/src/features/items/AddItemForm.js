import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { selectAllShops } from '../shops/shopsSlice'
import { addNewItem } from './itemsSlice'
import { selectLoggedInUser } from '../login/loginSlice'

function AddItemForm({ onAddItem, resetOnAddItem }) {

  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)
  const shops = useSelector(selectAllShops)
  const currentUser = useSelector(selectLoggedInUser)

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
      user_name: currentUser.name,
      shop_name: ""
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
        dispatch(addNewItem(values))
        resetForm();
    }
  })

  return (
    <form className="add_item_container" id="additemform"  onSubmit={formik.handleSubmit} style={{display: onAddItem ? "" : "none"}}>
      <h3>Add a new Item</h3>

      <label htmlFor="name">Item Name</label><br/>
      <input
        id="name"
        name="name"
        autoComplete="off"
        placeholder="Enter item name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
      <select
        id="user_name"
        name="user_name"
        onChange={formik.handleChange}
        value={formik.values.user_name}
        onBlur={formik.handleBlur}
        style={{ display: "block"}}
      >
        <option value={currentUser.name} label={currentUser.name} >{currentUser.name}</option>
        {
          users.map(user => {
            return (
              <option key={user.id} value={user.name}>{user.name}</option>
            )
          })
        }
      </select>
      <p style={{color: "red"}}>{formik.errors.user_name}</p>

      <label htmlFor="shop_name">Shop</label><br/>
      <select
        id="shop_name"
        name="shop_name"
        onChange={formik.handleChange}
        value={formik.values.shop_name}
        onBlur={formik.handleBlur}
        style={{ display: "block"}}
      >
        <option value="" label="Select shop" >Select shop</option>
        {
          shops.map(shop => {
            return (
              <option key={shop.id} value={shop.name}>{shop.name}</option>
            )
          })
        }
      </select>
      <p style={{color: "red"}}>{formik.errors.shop_name}</p>

      <button type="submit">Submit</button>
      &nbsp;&nbsp;&nbsp;
      <button type="cancel" onClick={() => resetOnAddItem()}>Cancel</button>
    </form>
  )
};

export default AddItemForm;