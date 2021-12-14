import React, {useState, useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import formatDistance from 'date-fns/formatDistance'
import { useSelector } from 'react-redux'
import '../styles/Posts.css'

const Posts = ({posts}) => {
	const navigate = useNavigate()
	
	const { token } = useSelector((state) => state.token)


    return (
		<div className='content-container posts-container'>
			{token.status === 'success' &&
				posts.map((item, index) => {
					return (
						<div key={index} className='post-container'>
							<h2>{item.title}</h2>
							<h3> by {item.author}</h3>

							{item.timestamp && (
								<p>
									{formatDistance(
										new Date(item.timestamp),
										new Date()
									)}{' '}
									ago
								</p>
							)}

							<div className='comments-container'>
								<img
									src={
										require('../images/comments.svg')
											.default
									}
									alt=''
								/>
								<span>{item.comments.length}</span>
							</div>

							<div className='buttons-container'>
								<button
									className='post-button'
									onClick={() =>
										navigate('/blog-cms/posts/' + item._id)
									}>
									Open post
								</button>
							</div>
						</div>
					)
				})}
			{token.status !== 'success' && (
				<div className='failure-container'>
					<h2>
						Access forbidden, <a href='/blog-cms/'>log in</a> first
						!
					</h2>
				</div>
			)}
		</div>
	)
}

export default Posts