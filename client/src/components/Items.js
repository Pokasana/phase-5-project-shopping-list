import React from "react";
import AddItemForm from "./AddItemForm";

function Items({ shopsList, isLoaded, clickHandler, currentUser, refresh}) {

  if (!isLoaded) return <h3>Loading...</h3>

	return (
		<div className="items">
			<h1>Shopping List</h1>
			<h5>Hi {currentUser} !</h5>
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
											clickHandler(id)
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
			<AddItemForm refresh={refresh}/>
		</div>
	)
};

export default Items;