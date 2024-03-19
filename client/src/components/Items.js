import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

function Items({ shopsList, isLoaded, clickHandler, refresh}) {
	const [onEditId, setOnEditId] = useState(null)
	const [onAdd, setOnAdd] = useState(false)

  if (!isLoaded) return <h3>Loading...</h3>

	function resetEditId () {
		setOnEditId(null)
	};

	return (
		<div className="items">
			<h1>Shopping List</h1>
			{shopsList.map(shop => {
				const { id, name, items } = shop
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							{items.map(item => {
								const { id, name } = item
								return (
									<li key={id} onClick={() => console.log('clicked')}>
										{name}
										&nbsp;&nbsp;&nbsp;

										<button id="bought" onClick={() => {
											clickHandler(id)
											}}>
											✔️
										</button>

										<button id="edit_item" onClick={() => {setOnEditId(onEditId === null ? id : null); console.log(id) }} >
											✏️
										</button>

										<EditItemForm item={item} shop={shop} refresh={refresh} onEditId={onEditId} resetEditId={resetEditId}/>
									</li>
									)
							})}
						</ul>
					</div>
				)
			})}
			<button id="add_item" onClick={() => setOnAdd(!onAdd)}>Add Item</button>
			<AddItemForm refresh={refresh} onAdd={onAdd} />
		</div>
	)
};

export default Items;