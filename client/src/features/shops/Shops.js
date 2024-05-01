import React from "react";
import AddShopForm from "./AddShopForm"

import { useDispatch, useSelector } from 'react-redux'
import { selectAllShops, deleteShop } from './shopsSlice'

function Shops() {
	const dispatch = useDispatch()

	const new_shops = useSelector(selectAllShops)

	const renderedShops = new_shops.map(shop => {
		const {id, name} = shop
		return (
			<li key={id}>
				{name}
				&nbsp;&nbsp;
				<button
					className="emoji_button"
					style={{fontSize: "10px"}}
					onClick={() => {
						dispatch(deleteShop(id));
					}}
				>
					X
				</button>
			</li>
		)
	})

	return (
		<div className="shops">
			<h1>Shop Page</h1>

			<h3>Shop List</h3>
			<ul>
				{renderedShops}
			</ul>

			<AddShopForm />

		</div>
	)
}

export default Shops