import React, { useState, useEffect } from "react";

function Shops() {
	const [shops, setShops] = useState([])

	useEffect(() => {
	fetch('http://127.0.0.1:5555/shops')
	.then(r => r.json())
	.then(data => setShops(data))
	}, [])

	return (
		<div className="shops">
			<h1>Shops</h1>
			<ul>
				{shops.map(shop => {
					return (
						<li key={shop.id} >{shop.name}</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Shops