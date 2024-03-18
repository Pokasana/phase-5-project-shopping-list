import React from "react";
import { Link } from "react-router-dom";
import AddItemForm from "./AddItemForm";
import ItemInfo from "./ItemInfo";

function Items({ shopsList, isLoaded, clickHandler, refresh}) {

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
								const { id, name } = item
								return (
									<li key={id} onClick={() => console.log('clicked')}>
										<Link to={`items/${id}`}>{name}</Link>
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