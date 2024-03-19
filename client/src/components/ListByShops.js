import React from "react"
import ItemList from "./ItemList"

function ListByShops ({ shopsList, refresh, clickHandler }) {

	return (
		<div>
			{shopsList.map(shop => {
				const { id, name, items } = shop
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							<ItemList items={items} shop={shop} refresh={refresh} clickHandler={clickHandler} />
						</ul>
					</div>
				)
			})}
		</div>
	)

};

export default ListByShops