import React, { useState } from "react";
import EditItemForm from "./EditItemForm";

function ItemList ({ items, filterBy, filterElement, refresh, clickHandler }) {
	const [onEditId, setOnEditId] = useState(null)

	function resetEditId () {
		setOnEditId(null)
	};

	return (
		<div id="item_list">
			{items.map(item => {
				const { id, name } = item
				return (
					<li key={id}>
						{name}
						&nbsp;&nbsp;&nbsp;

						<button id="bought" onClick={() => {
							clickHandler(id)
							}}>
							✔️
						</button>

						<button id="edit_item" onClick={() => {setOnEditId(onEditId === null ? id : null) }} >
							✏️
						</button>

						<EditItemForm item={item} filterBy={filterBy} filterElement={filterElement} refresh={refresh} onEditId={onEditId} resetEditId={resetEditId}/>
					</li>
				)
			})}
		</div>
	)

}

export default ItemList