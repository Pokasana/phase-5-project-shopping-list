import React from 'react'

function CommentsCard({ comments }) {

	return (
		<div className='comments_container'>
			<h4>Comments</h4>
			<ul>
				{comments.map(comment => {
					const {id, content, user} = comment
					return (
						<>
							<li key={id} className='comment_card'>
								{content}<br/>
								- {user.name}
							</li>
							<br/>
						</>
					)
				})}
			</ul>
		</div>
	)
}

export default CommentsCard;