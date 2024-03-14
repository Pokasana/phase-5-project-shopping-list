import React, { useState, useEffect } from "react";
import AddShopForm from "./AddShopForm"

function Shops() {
	const [shops, setShops] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
	fetch('http://127.0.0.1:5555/shops')
	.then(r => r.json())
	.then(data => {
		setShops(data);
		setIsLoaded(true);
	})
	}, [])

  if (!isLoaded) return <h3>Loading...</h3>

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
				return shops.filter(shop => shop.id !== id)
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