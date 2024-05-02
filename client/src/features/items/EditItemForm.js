import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch } from 'react-redux'
import { editItem } from './itemsSlice'

function EditItemForm ({ item, filterBy, filterElement, onEditId, resetEditId }) {

	const dispatch = useDispatch()

	const formSchema = yup.object().shape({
		id: yup.number(),
		name: yup.string(),
		favorite: yup.bool(),
		user_name: yup.string(),
		shop_name: yup.string()
	});

	const formik = useFormik({
		initialValues: {
			id: item.id,
			name: item.name,
			favorite: item.favorite,
			user_name: filterBy === 'users' ? filterElement.name : item.user.name,
			shop_name: filterBy === 'shops' ? filterElement.name : item.shop.name
		},
		validationSchema: formSchema,
		onSubmit: async (values) => {
			await dispatch(editItem(values)).unwrap()
			resetEditId();
		}
	});

	return (
		<form className="edit_item_container" onSubmit={formik.handleSubmit} style={{display: onEditId === item.id ? "" : "none"}}>
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
			<input
				id="user_name"
				name="user_name"
				autoComplete="off"
				onChange={formik.handleChange}
				value={formik.values.user_name}
			/>
			<p style={{color: "red"}}>{formik.errors.user_name}</p>

			<label htmlFor="shop_name">Shop</label><br/>
			<input
				id="shop_name"
				name="shop_name"
				autoComplete="off"
				onChange={formik.handleChange}
				value={formik.values.shop_name}
			/>
			<p style={{color: "red"}}>{formik.errors.shop_name}</p>

			<button type="submit">Submit Change</button>
		</form>
	)
};

export default EditItemForm