import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectAllComments, deleteComment } from './commentsSlice'

function CommentsCard({ currentItem }) {
	const dispatch = useDispatch()

	const allComments = useSelector(selectAllComments)
	const selectedComments = allComments.filter(comment => comment.item.id === currentItem.id)

	return (
		<div className='comments_container'>
			<h4>Comments</h4>
			{
				selectedComments.length !== 0?
				<section className='comment_card'>
					{selectedComments.map(comment => {
						const {id, content, user} = comment

						return (
							<section key={id}>
								<p className='comment_card'>
									{content}
									&nbsp;&nbsp;
									- {user.name}
									&nbsp;&nbsp;
									<button style={{display: "inline"}} onClick={() => dispatch(deleteComment(id))}>x</button>
								</p>
							</section>
						)
					})}
				</section>
				:
				<p>There are no comments</p>
			}
		</div>
	)
}

export default CommentsCard;