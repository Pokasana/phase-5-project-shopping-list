import React from "react";
import { useHistory } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";

import { useSelector, useDispatch } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { selectAllShops } from '../shops/shopsSlice'
import { editItem } from './itemsSlice'

function EditItemForm ({ item }) {

	const dispatch = useDispatch()
	const history = useHistory()

  const users = useSelector(selectAllUsers)
  const shops = useSelector(selectAllShops)

	const formSchema = yup.object().shape({
		id: yup.number(),
		name: yup.string().required("Must enter an item name"),
		favorite: yup.bool(),
		user_name: yup.string().required("Please select a user"),
		shop_name: yup.string().required("Please select a shop")
	});

	const formik = useFormik({
		initialValues: {
			id: item.id,
			name: item.name,
			favorite: item.favorite,
			user_name: item.user.name,
			shop_name: item.shop.name
		},
		validationSchema: formSchema,
		onSubmit: async (values) => {
			await dispatch(editItem(values)).unwrap()
			history.push('/items')
		}
		
	});

	return (
		<form className="edit_item_container" onSubmit={formik.handleSubmit}>
			<h3>Edit Item</h3>

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
				checked={formik.values.favorite}
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
        <option value="" label="Select user" >{formik.values.user_name}</option>
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
        <option value="" label="Select shop" >{formik.values.shop_name}</option>
        {
          shops.map(shop => {
            return (
              <option key={shop.id} value={shop.name}>{shop.name}</option>
            )
          })
        }
      </select>
			<p style={{color: "red"}}>{formik.errors.shop_name}</p>

			<button type="submit">Submit Change</button>
		</form>
	)
};

export default EditItemForm