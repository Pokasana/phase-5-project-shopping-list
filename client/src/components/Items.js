import React, { useState, useEffect } from "react";

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
		console.log(id)
		console.log(shop_id)

		// fetch(`http://127.0.0.1:5555/items/${id}`, {
		// 	method: "DELETE",
		// })
		// .then(r => r.json())
		// .then(() => {
		// 	setShops(items => {
		// 		return items.filter(item => item.id !== id)
		// 	})
		// })
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
										<button onClick={() => clickHandler(id, shop_id)}>
											Got it!
										</button>
									</li>
									)
							})}
						</ul>
					</div>
				)
			})}
		</div>
	)
};

export default Items;