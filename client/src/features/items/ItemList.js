import React, { useState } from "react";
import { Link } from 'react-router-dom'
import EditItemForm from "./EditItemForm";

function ItemList ({ items, filterBy, filterElement, refresh, clickHandler }) {
	const [onEditId, setOnEditId] = useState(null)

	function resetEditId() {
		setOnEditId(null)
	};

	return (
		<div id="item_list">
			{items.map(item => {
				const { id, name, favorite, comments } = item
				console.log(comments.length)

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

						<button className="emoji_button" onClick={() => {setOnEditId(onEditId === null ? id : null) }} >
							✏️
						</button>

						&nbsp;&nbsp;&nbsp;

						{comments.length ? (<Link to={`/items/${id}`}>Comments</Link>) : null}

						<EditItemForm item={item} filterBy={filterBy} filterElement={filterElement} refresh={refresh} onEditId={onEditId} resetEditId={resetEditId}/>
					</li>
				)
			})}
		</div>
	)

}

export default ItemList