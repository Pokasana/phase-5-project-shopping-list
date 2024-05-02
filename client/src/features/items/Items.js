import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ListByShops from "../shops/ListByShops";
import ListByUsers from "../users/ListByUsers";
import SortedItems from "./SortedItems"

function Items({ refresh }) {
	const [onAddItem, setOnAddItem] = useState(false)
	const [filterBy, setFilterBy] = useState('shop')

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

			<div className="sort_container">
				<h4>Sort by:</h4>

				<div className="custom-select" style={{width: "200px"}}>
					<select name="filter" id="filter" onChange={(e) => setFilterBy(e.target.value)}>
						<option value="shop">Shops</option>
						<option value="user">Users</option>
					</select>
				</div>
			</div>

			<div className="item_list_container">
				{/* {
					filterBy === "shop"
					? <ListByShops filterBy={filterBy} clickHandler={onItemDelete} />
					: <ListByUsers filterBy={filterBy} clickHandler={onItemDelete} />
				} */}

				<SortedItems filterBy={filterBy} clickHandler={onItemDelete}/>

			</div>
 
			<button id="add_item" onClick={() => setOnAddItem(!onAddItem)} style={{display: onAddItem ? "none" : ""}}>
				Add Item
			</button>
			<AddItemForm refresh={refresh} onAddItem={onAddItem} resetOnAddItem={resetOnAddItem} />
		</div>
	)
};

export default Items;