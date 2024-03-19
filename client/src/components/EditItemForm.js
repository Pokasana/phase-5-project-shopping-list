import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function EditItemForm ({ item, shop, refresh, onEditId }) {

	const formSchema = yup.object().shape({
		name: yup.string(),
		favorite: yup.bool(),
		user_name: yup.string(),
		shop_name: yup.string()
	});

	const formik = useFormik({
		initialValues: {
			name: item.name,
			favorite: item.favorite,
			user_name: item.user.name,
			shop_name: shop.name
		},
		validationSchema: formSchema,
		onSubmit: (values, { resetForm }) => {
			fetch(`http://127.0.0.1:5555/items/${item.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(values)
			})
			.then(r => {
				if (r.status === 200) {
					refresh()
				}
			})
			resetForm()
		}
	})

	return (
		<form className="edit_item" onSubmit={formik.handleSubmit} style={{display: onEditId === item.id ? "" : "none"}}>
			<h3>Edit Item</h3>

			<label htmlFor="name">Item Name</label><br/>
			<input
				id="name"
				name="name"
				autoComplete="off"
				// placeholder={item.name}
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
				// placeholder={item.user.name}
				onChange={formik.handleChange}
				value={formik.values.user_name}
			/>
			<p style={{color: "red"}}>{formik.errors.user_name}</p>

			<label htmlFor="shop_name">Shop</label><br/>
			<input
				id="shop_name"
				name="shop_name"
				autoComplete="off"
				// placeholder={item.shop.name}
				onChange={formik.handleChange}
				value={formik.values.shop_name}
			/>
			<p style={{color: "red"}}>{formik.errors.shop_name}</p>

			<button type="submit">Submit Change</button>
		</form>
	)
};

export default EditItemForm