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

	function clickHandler(id) {

		fetch(`http://127.0.0.1:5555/shops/${id}`, {
			method: "DELETE",
		})
		.then(r => r.json())
		.then(() => {
			setShops(shops => {
				return shops.filter(shop =>  shop.id !== id)
			})
		})
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
								<button onClick={() => {
									clickHandler(id);
									setShops(shopArr => {
										return  shopArr.filter(item => item.id !== id)
									})
								}}>Delete</button>
							</li>
					)
				})}
			</ul>

			<AddShopForm onAddShop={onAddShop} />

		</div>
	)
}

export default Shops