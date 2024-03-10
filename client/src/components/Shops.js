import React, { useState, useEffect } from "react";
import AddShopForm from "./AddShopForm"

function Shops() {
	const [shops, setShops] = useState([])

	useEffect(() => {
	fetch('http://127.0.0.1:5555/shops')
	.then(r => r.json())
	.then(data => setShops(data))
	}, [])

  function onAddShop(newShop) {
    setShops([...shops, newShop])
  };

	return (
		<div className="shops">
			<h1>Shops</h1>
			<ul>
				{shops.map(shop => {
					const {id, name} = shop
					return (
						<div key={id}>
							<li>
								{name}
								&nbsp;&nbsp;&nbsp;
								<button>Delete</button>
							</li>
						</div>
					)
				})}
			</ul>

			<AddShopForm onAddShop={onAddShop} />

		</div>
	)
}

export default Shops