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

	return (
		<div className="items">
			<h1>Shopping List</h1>
			<ul>
				{shops.map(shop => {
					const { id, name, items } = shop
					return (
						<div key={id}>
							<h4>{name}</h4>
							<ul>
								{items.map(item => {
									const { id, name } = item
									return <li key={id}>{name}</li>
								})}
							</ul>
						</div>
					)
				})}
			</ul>
		</div>
	)
};

export default Items;