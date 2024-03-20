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
				const { id, name, favorite } = item

				return (
					<li key={id}>
						<span style={{visibility: favorite? "visible" : "hidden"}}>
							★
							&nbsp;
						</span>
						{name}
						&nbsp;&nbsp;&nbsp;

						<button className="emoji_button" onClick={() => {
							clickHandler(id)
							}}>
							✔️
						</button>

						<button className="emoji_button" onClick={() => {setOnEditId(onEditId === null ? id : null) }} >
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