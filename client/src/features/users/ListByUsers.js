import React from "react"
import ItemList from "../items/ItemList"

import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'

function ListByUsers ({ filterBy, refresh, clickHandler }) {
	const users = useSelector(selectAllUsers)

	return (
		<div>
			{users.map(user => {
				const { id, name, items } = user
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							<ItemList items={items} filterBy={filterBy} filterElement={user} clickHandler={clickHandler} />
						</ul>
					</div>
				)
			})}
		</div>
	)

};

export default ListByUsers