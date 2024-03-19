import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function ItemCard() {
	const params = useParams();
	const [item, setItem] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	console.log(params)
	console.log(params.itemId)

	useEffect(() => {
		fetch(`http://127.0.0.1:5555/items/${params.itemId}`)
		.then(r => r.json())
		.then(data => {
			setItem(data)
			setIsLoaded(true)
		})
	}, [params.itemId]);


	return (
		<div className="item_card">
			{ isLoaded
				? <>
						<p>Product: {item.name}</p>
						<p>Favorite?: {item.favorite === true ? 'Yes' : 'No'}</p>
						<p>Shop: {item.shop.name}</p>
						<p>Added by: {item.user.name}</p>
					</>
				: <div>Loading...</div>

			}
		</div>
	);    
};

export default ItemCard