import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectItemById } from './itemsSlice'

function SingleItemPage () {
	const { itemId } = useParams()
	
	const item = useSelector(state => selectItemById(state, Number(itemId)))

	const item_card = item => {
		return (
			<div className='item_card'>
				<h3>{item.name}</h3>
				<ul>
					<li>Shop: <b>{item.shop.name}</b></li>
					<li>Added by: <b>{item.user.name}</b></li>
					<li></li>
				</ul>
			</div>
		)
	}

	return(
		<div className='single_item_page'>
			<h1>Item Page</h1>
			{item_card(item)}
		</div>
	)
}

export default SingleItemPage