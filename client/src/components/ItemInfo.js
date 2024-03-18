import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function ItemInfo() {
	const params = useParams();
	const [item, setItem] = useState();

	useEffect(() => {
		fetch(`http://127.0.0.1:5555/items/${params.itemId}`)
		.then(r => r.json())
		.then(item => {
			setItem(item)
		})
	}, []);

	return (
		<div className="item-info">
			<h1>Item Info Page</h1>
			<p>Product: {item.name}</p>
			<p>Favorite?: {item.favorite === true ? 'Yes' : 'No'}</p>
			<p>Shop: {item.shop.name}</p>
			<p>Added by: {item.user.name}</p>
		</div>
	);

};

export default ItemInfo