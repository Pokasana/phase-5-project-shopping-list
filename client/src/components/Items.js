import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ListByShops from "./ListByShops";
import ListByUsers from "./ListByUsers";

function Items({ shopsList, usersList, isLoaded, refresh}) {
	const [onAddItem, setOnAddItem] = useState(false)
	const [filterBy, setFilterBy] = useState('shops')

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

	function resetOnAddItem() {
		setOnAddItem(false)
	}

	return (
		<div className="items">
			<h1>Shopping List</h1>

			<div id="sort_container">
				<h4>Sort by:</h4><br/>

				<select name="items" id="items" onChange={(e) => setFilterBy(e.target.value)}>
					<option value="shops">Shops</option>
					<option value="users">Users</option>
				</select>
			</div>

			<div className="item_list_container">
				{
					filterBy === "shops"
					? <ListByShops shopsList={shopsList} filterBy={filterBy} refresh={refresh} clickHandler={onItemDelete} />
					: <ListByUsers usersList={usersList} filterBy={filterBy} refresh={refresh} clickHandler={onItemDelete} />
				}

			</div>

			<button id="add_item" onClick={() => setOnAddItem(!onAddItem)} style={{display: onAddItem ? "none" : ""}}>
				Add Item
			</button>
			<AddItemForm refresh={refresh} onAddItem={onAddItem} resetOnAddItem={resetOnAddItem} />
		</div>
	)
};

export default Items;