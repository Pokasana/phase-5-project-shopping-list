import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList"

function Items({ shopsList, isLoaded, refresh}) {
	const [onAdd, setOnAdd] = useState(false)

  if (!isLoaded) return <h3>Loading...</h3>

	function onItemDelete(id) {
		fetch(`http://127.0.0.1:5555/items/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then((res) => {
      if (res.delete_successful === true) {
        refresh()
      }
		});
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
							<ItemList items={items} shop={shop} refresh={refresh} clickHandler={onItemDelete} />
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