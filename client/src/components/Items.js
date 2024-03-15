import React, { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm";

function Items() {
	const [shops, setShops] = useState([])

	useEffect(() => {
		fetch('/shops')
		.then(r => r.json())
		.then(data => {
			setShops(data)
		})
	},[])

	function clickHandler(id, shop_id) {

		fetch(`http://127.0.0.1:5555/items/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then(() => {
			const filteredItems = []

			shops.map(shop => {
				if (shop.id === shop_id) {
					shop.items = shop.items.filter(item => item.id !== id)
					filteredItems.push(shop)
				}
				else filteredItems.push(shop)
			});

			setShops(filteredItems)

		});
	};

	function onAddItem(newItem) {
		console.log(newItem)
	};

	return (
		<div className="items">
			<h1>Shopping List</h1>
			{shops.map(shop => {
				const { id, name, items } = shop
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							{items.map(item => {
								const { id, name, shop_id } = item
								return (
									<li key={id}>
										{name}
										&nbsp;&nbsp;&nbsp;
										<button onClick={() => {
											clickHandler(id, shop_id)
											}}>
											Got it!
										</button>
									</li>
									)
							})}
						</ul>
					</div>
				)
			})}
			<AddItemForm onAddItem={onAddItem}/>
		</div>
	)
};

export default Items;