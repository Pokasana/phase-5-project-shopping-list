import React from 'react'

function CommentsCard({ comments }) {

	return (
		<div className='comments_container'>
			<h4>Comments</h4>
			{
				comments.length !== 0?
				<ul>
					{comments.map(comment => {
						const {id, content, user} = comment
						return (
							<section key={id}>
								<li className='comment_card'>
									{content}<br/>
									- {user.name}
								</li>
								<br/>
							</section>
						)
					})}
				</ul>
				:
				<p>There are no comments</p>
			}
		</div>
	)
}

export default CommentsCard;