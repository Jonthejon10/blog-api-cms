import React from 'react'
import { useNavigate } from 'react-router-dom'

const Posts = ({ posts }) => {
    const navigate = useNavigate()

    return (
		<div className='posts-container'>
			{posts.map((item, index) => {
				return (
					<div key={index} className='post-container'>
						<h2>{item.title}</h2>
						<h3> by {item.author}</h3>
{/* 						{item.timestamp && (
							<p>
								{formatDistance(
									new Date(item.timestamp),
									new Date()
								)}{' '}
								ago
							</p>
						)} */}

						<div className='comments-container'>
{/* 							<img
								src={require('../images/comments.svg').default}
								alt=''
							/>
							{item.comments.length}
							{' '} */}
						</div>

						<button
							onClick={() => navigate('/blog-api/' + item._id)}>
							Open post
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default Posts