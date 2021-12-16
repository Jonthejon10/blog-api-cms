import React from 'react'
import { useNavigate } from 'react-router-dom'
import formatDistance from 'date-fns/formatDistance'
import { useSelector } from 'react-redux'
import '../styles/Posts.css'

const Posts = ({ posts, setPosts }) => {

	const navigate = useNavigate()

	// Getting login token from redux
	const { token } = useSelector((state) => state.token)

	// Change post visiblity
	const handleVisibility = (postId) => {
		const currPost = posts.find(x => x._id === postId)

		setPosts([...posts].map(obj => {
			if (obj._id === currPost._id) {
				return {
					...obj,
					visible: !currPost.visible,
				}
			} else {
				return obj
			}
		}))

		fetch(`https://obscure-refuge-23971.herokuapp.com/api/posts/${postId}/update`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token.token,
			},
			body: JSON.stringify({
				author: currPost.author,
				timestamp: currPost.timestamp,
				title: currPost.title,
				text: currPost.text,
				comments: currPost.comments,
				visible: !currPost.visible,
				refId: currPost._id,
			}),
		}).catch((err) => console.log(err))
	}

	// Delete post
	const handleDelete = (postId) => {
		fetch(
			`https://obscure-refuge-23971.herokuapp.com/api/posts/${postId}/delete`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token.token,
				},
				body: JSON.stringify({
					id: postId,
				}),
			}
		)
		const filteredArr = posts.filter(x => x._id !== postId)
		setPosts(filteredArr)
	}
	
	return (
		<div className='content-container posts-container'>
			{token.status === 'success' &&
				posts.map((item, index) => {
					return (
						<div key={index} className={`post-container ${item.visible ? 'visible' : 'hidden'}`}>
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

							<div className='edit-buttons-container'>

								<button
									className='post-admin-btn visible-post-btn'
									onClick={() => handleVisibility(item._id)}
								/>
								<button
									className='post-admin-btn delete-post-btn'
									onClick={() => handleDelete(item._id)}
								/>
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