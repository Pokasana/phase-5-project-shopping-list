import React, { useState } from "react";
import { Link } from 'react-router-dom'
import EditItemForm from "./EditItemForm";

function ItemList ({ items, filterBy, filterElement, clickHandler }) {
	const [onEditId, setOnEditId] = useState(null)

	function resetEditId() {
		setOnEditId(null)
	};

	return (
		<div id="item_list">
			{items.map(item => {
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
							onClick={() => {
								clickHandler(id)
							}}
						>
							✔️
						</button>

						{/* <button className="emoji_button" onClick={() => {setOnEditId(onEditId === null ? id : null) }} > */}
						<Link to={`/items/${id}`}>
						<button className="emoji_button" >
							✏️
						</button>
						</Link>

						&nbsp;&nbsp;&nbsp;

						{comments.length ? (<Link to={`/items/${id}`}>Comments</Link>) : null}

						{/* <EditItemForm item={item} filterBy={filterBy} filterElement={filterElement} onEditId={onEditId} resetEditId={resetEditId}/> */}
					</li>
				)
			})}
		</div>
	)

}

export default ItemList