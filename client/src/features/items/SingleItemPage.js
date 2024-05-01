import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function SingleItemPage () {
	const { itemId } = useParams()

	return(
		<>
			<h1>Item Page</h1>
			<p>Item No.{itemId}</p>
		</>
	)
}

export default SingleItemPage