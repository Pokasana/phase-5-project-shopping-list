import React from "react"
import ItemList from "../items/ItemList"

function ListByUsers ({ usersList, filterBy, refresh, clickHandler }) {

	return (
		<div>
			{usersList.map(user => {
				const { id, name, items } = user
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							<ItemList items={items} filterBy={filterBy} filterElement={user} refresh={refresh} clickHandler={clickHandler} />
						</ul>
					</div>
				)
			})}
		</div>
	)

};

export default ListByUsers