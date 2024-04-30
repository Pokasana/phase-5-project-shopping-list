import React from "react";
import AddShopForm from "./AddShopForm"

import { useSelector } from 'react-redux'
import { selectAllShops } from './shopsSlice'

function Shops({ clickHandler, isLoaded, refresh }) {

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
						clickHandler(id);
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

			<AddShopForm refresh={refresh} />

		</div>
	)
}

export default Shops