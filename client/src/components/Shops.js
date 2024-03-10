import React from "react";

function Shops() {

	fetch('http://127.0.0.1:5555/shops')
	.then(r => r.json())
	.then(data => console.log(data))

	return (
		<div className="shops">
			<h1>Shops</h1>
		</div>
	)
}

export default Shops