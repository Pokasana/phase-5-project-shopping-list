import React from "react"
import ItemList from "../items/ItemList"

import { useSelector } from 'react-redux'
import { selectAllShops } from './shopsSlice'

function ListByShops ({ filterBy, clickHandler }) {
	const shops = useSelector(selectAllShops)

	return (
		<div>
			{shops.map(shop => {
				const { id, name, items } = shop
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							<ItemList items={items} filterBy={filterBy} filterElement={shop} clickHandler={clickHandler} />
						</ul>
					</div>
				)
			})}
		</div>
	)

};

export default ListByShops