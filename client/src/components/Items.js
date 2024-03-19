import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddItemForm from "./AddItemForm";

function Items({ shopsList, isLoaded, clickHandler, refresh}) {
	const [onEdit, setOnEdit] = useState(false)
	const [onAdd, setOnAdd] = useState(false)

  if (!isLoaded) return <h3>Loading...</h3>

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
										<Link to={`items/${id}`}>{name}</Link>
										&nbsp;&nbsp;&nbsp;
										<button id="bought" onClick={() => {
											clickHandler(id)
											}}>
											&#10003;
										</button>
										<button id="edit_item" onClick={() => setOnEdit(!onEdit)} style={{fontSize: "90%"}}>
											&#x270f;
										</button>
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