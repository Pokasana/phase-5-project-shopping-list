import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function ItemCard() {
	const params = useParams();
	const [item, setItem] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

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
						<h3>Product:</h3>
						<p>{item.name}</p>
						<h3>Favorite?:</h3>
						<p>{item.favorite === true ? 'Yes' : 'No'}</p>
						<h3>Shop:</h3>
						<p>{item.shop.name}</p>
						<h3>Added by:</h3>
						<p>{item.user.name}</p>
					</>
				: <div>Loading...</div>

			}
		</div>
	);    
};

export default ItemCard