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

	function clickHandler(e) {
		console.log(e.target.id)

		const id = e.target.id

		fetch(`http://127.0.0.1:5555/shops/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then(shop => console.log(`${shop} is deleted`))
	};

	return (
		<div className="shops">
			<h1>Shops</h1>
			<ul>
				{shops.map(shop => {
					const {id, name} = shop
					return (
							<li key={id}>
								{name}
								&nbsp;&nbsp;&nbsp;
								<button id={id} onClick={clickHandler}>Delete</button>
							</li>
					)
				})}
			</ul>

			<AddShopForm onAddShop={onAddShop} />

		</div>
	)
}

export default Shops