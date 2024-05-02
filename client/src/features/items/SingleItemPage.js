import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectItemById } from './itemsSlice'
import CommentsCard from '../comments/CommentsCard'
import EditItemForm from './EditItemForm'

function SingleItemPage () {
	const { itemId } = useParams()
	
	const item = useSelector(state => selectItemById(state, Number(itemId)))

	const item_card = item => {
		return (
			<div className='item_card'>
				<h3>{item.name}</h3>
				<ul>
					<li>
						Sold at:
						&nbsp;
						<b>{item.shop.name}</b>
					</li>
					<li>
						Added by:
						&nbsp;
						<b>{item.user.name}</b>
					</li>
				</ul>
			</div>
		)
	}

	return(
		<div className='single_item_page'>
			<h1>Item Page</h1>
			{item_card(item)}
			<CommentsCard comments={item.comments} />
			<EditItemForm item={item}/>
		</div>
	)
}

export default SingleItemPage