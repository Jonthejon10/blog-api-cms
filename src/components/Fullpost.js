import React, { useState, useEffect }from 'react'
import '../styles/Fullpost.css'
import { useParams, useNavigate } from 'react-router-dom'
import formatDistance from 'date-fns/formatDistance'
import { useSelector } from 'react-redux'

const Fullpost = ({ posts, setPosts }) => {
	const navigate = useNavigate()

	// Post id for reference
	const { id } = useParams()

	const [post, setPost] = useState({})

	const [comment, setComment] = useState({})

	// Getting login token from redux
	const { token } = useSelector((state) => state.token)

	const [editPost, setEditPost] = useState(false)
	
	async function fetchPostData() {
		console.log('fetching')
		try {
			const res = await fetch(
				`https://obscure-refuge-23971.herokuapp.com/api/posts/${id}`
			)
			const resJson = await res.json()
			return setPost(resJson.post)
		} catch (error) {
			console.error(error)
		}
	}

	// Getting specific post data from db
	useEffect(() => {
		fetchPostData()
		
		const interval = setInterval(() => {
			fetchPostData()
		}, 10000)

		return () => clearInterval (interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	// Comment inputs
	const handleChange = (e) => {

		setComment({
			...comment,
			[e.target.name]: e.target.value,
		})
	}

	// New comment submit

	const handleSubmit = (event) => {

		event.preventDefault()
		
		fetch(
			`https://obscure-refuge-23971.herokuapp.com/api/posts/${id}/comments`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					author: comment.author,
					text: comment.text,
					reference: id,
				}),
			}
		).catch((err) => console.log(err))
 		const newArr = [...post.comments]
		newArr.push(comment)
		setPost({...post, comments:[...newArr]})
 		
		setComment({})
	}

	// Comment delete
	const handleDelete = (commentId) => {
		fetch(`https://obscure-refuge-23971.herokuapp.com/api/posts/${id}/comments/${commentId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token.token,
			},
			body: JSON.stringify({
				id: commentId,
				post_id: id,
			}),
		}).catch((err) => console.log(err))
		
		const newArr = post.comments.filter(x => x._id !== commentId)
		
		setPost({ ...post, comments:[...newArr] })
		
		setComment({})
	}

	// Post edit inputs
	const handleInputChange = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		})
	}
	
	// Post edit submit to backend
	const handlePostEdit = (e) => {
		e.preventDefault()
		setEditPost(false)
		fetch(`https://obscure-refuge-23971.herokuapp.com/api/posts/${id}/update`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token.token,
			},
			body: JSON.stringify({
				author: post.author,
				timestamp: post.timestamp,
				title: post.title,
				text: post.text,
				comments: post.comments,
				visible: post.visible,
				refId: id,
			}),
		}).catch((err) => console.log(err))
		setPosts([...posts, post])

		setPosts(
			[...posts].map((obj) => {
				if (obj._id === post._id) {
					return {
						...obj,
						title: post.title,
						text: post.text,
						author: post.author,
					}
				} else {
					return obj
				}
			})
		)
	}


	return (
		<div className='content-container fullpost-container'>
			<button
				className='styled-btn'
				onClick={() => navigate('/blog-cms/posts')}>
				Go back
			</button>

			<h1>{post.title}</h1>
			{editPost && (
				<form onSubmit={(e) => handlePostEdit(e)}>
					<input
						type='text'
						name='title'
						value={post.title}
						onChange={(e) => handleInputChange(e)}
					/>
					<button type='submit' className='styled-btn'>
						Submit
					</button>
				</form>
			)}
			<h3>by {post.author}</h3>

			{editPost && (
				<form onSubmit={handlePostEdit}>
					<input
						type='text'
						name='author'
						value={post.author}
						onChange={(e) => handleInputChange(e)}
					/>
					<button type='submit' className='styled-btn'>
						Submit
					</button>
				</form>
			)}

			{post.timestamp && (
				<p>
					{formatDistance(new Date(post.timestamp), new Date())} ago
				</p>
			)}

			<p className='post-text'>{post.text}</p>

			{editPost && (
				<form onSubmit={handlePostEdit}>
					<textarea
						type='text'
						name='text'
						value={post.text}
						onChange={(e) => handleInputChange(e)}
					/>
					<button type='submit' className='styled-btn'>
						Submit
					</button>
				</form>
			)}

			<button
				type='button'
				className='edit-post-btn'
				onClick={() => setEditPost(!editPost)}
			/>

			<form className='comments-form'onSubmit={handleSubmit}>
				<p>Got something to say ? </p>
				<input
					type='text'
					required={true}
					name='author'
					onChange={handleChange}
					placeholder='Enter your name'></input>
				<textarea
					type='text'
					required={true}
					name='text'
					onChange={handleChange}
					rows='6'
					placeholder='Enter your comment'></textarea>
				<button type='submit' className='styled-btn'>
					Submit
				</button>
			</form>

			<div className='post-comments-container'>
				{post.comments &&
					post.comments.map((item, index) => {
						return (
							<div key={index} className='post-comment'>
								<p>{item.text}</p>
								<p>by {item.author}</p>
								{item.timestamp &&
									<p>
										{formatDistance(
											new Date(item.timestamp),
											new Date()
											)}{' '}
										ago
									</p>
								}

								{token.status === 'success' && (
									<button
										type='button'
										className='comment-delete-btn'
										onClick={() => handleDelete(item._id)}
									/>
								)}
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Fullpost