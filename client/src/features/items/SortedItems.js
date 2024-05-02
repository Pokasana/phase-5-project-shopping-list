import React, { useState } from "react";
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux"

import { deleteItem, selectAllItems } from "./itemsSlice"
import { selectAllShops } from "../shops/shopsSlice"
import { selectAllUsers } from "../users/usersSlice"

function SortedItems ({ filterBy }) {

	const shopsList = useSelector(selectAllShops)
	const usersList = useSelector(selectAllUsers)
	const items = useSelector(selectAllItems)

	const dispatch = useDispatch()

	const sortCategoryList = filterBy === 'shop' ? shopsList : usersList

	const renderedItems = (items) => {
		return items.map(item => {
			const { id, name, favorite, comments } = item
			return (
				<li key={id}>
					<span style={{visibility: favorite? "visible" : "hidden"}}>
						★
						&nbsp;
					</span>
					{name}
					&nbsp;&nbsp;&nbsp;

					<button
						className="emoji_button"
						onClick={() => dispatch(deleteItem(id))}
					>
						✔️
					</button>
					<Link to={`/items/${id}`}>
						<button className="emoji_button">
							✏️
						</button>
					</Link>

					&nbsp;&nbsp;&nbsp;
					{comments.length !== 0 ? (<Link id="comment_flag" to={`/items/${id}`}>Comments</Link>) : null}
				</li>
			)
		})
	}

	return (
		<div>
			{
				sortCategoryList.map(label => {
					const sortedItems = items.filter(item => item[filterBy].name === label.name)
					return (
						<section key={label.id}>
							<h4>{label.name}</h4>
							<ul>
								{renderedItems(sortedItems)}
							</ul>
						</section>
					)
				})
			}
		</div>
	)

}

export default SortedItems