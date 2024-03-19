import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"

function ItemInfo() {

	return (
		<div className="item-info">
			<h1>Item Info Page</h1>
			<ItemCard />
		</div>
	);

};

export default ItemInfo