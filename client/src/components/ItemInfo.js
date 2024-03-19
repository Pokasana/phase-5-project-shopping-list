import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"

function ItemInfo() {
	const [onEdit, setOnEdit] = useState(false)

	return (
		<div className="item-info">
			<h1>Item Info Page</h1>

			<ItemCard />

			<button onClick={() => setOnEdit(!onEdit)} style={{fontSize: "150%"}}>&#x270f;</button>

			<div className="item-edit">
				<form>
					{/* <label htmlFor="name">Item Name</label><br/>
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

					<button type="submit">Add</button> */}
				</form>

			</div>

			<p style={{display: onEdit ? "" : "none"}}>This is the edit form</p>

		</div>
	);

};

export default ItemInfo