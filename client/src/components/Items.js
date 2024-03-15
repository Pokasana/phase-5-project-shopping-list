import React from "react";
import AddItemForm from "./AddItemForm";

function Items({ shopsList, isLoaded, onAddItem, clickHandler}) {

  if (!isLoaded) return <h3>Loading...</h3>

	return (
		<div className="items">
			<h1>Shopping List</h1>
			{shopsList.map(shop => {
				const { id, name, items } = shop
				return (
					<div key={id}>
						<h4>{name}</h4>
						<ul>
							{items.map(item => {
								const { id, name, shop_id } = item
								return (
									<li key={id}>
										{name}
										&nbsp;&nbsp;&nbsp;
										<button onClick={() => {
											clickHandler(id, shop_id)
											}}>
											Got it!
										</button>
									</li>
									)
							})}
						</ul>
					</div>
				)
			})}
			<AddItemForm onAddItem={onAddItem}/>
		</div>
	)
};

export default Items;