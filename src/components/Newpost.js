import React, { useState } from 'react'
import '../styles/Newpost.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Newpost = ({ posts, setPosts }) => {
	const navigate = useNavigate()

	const [post, setPost] = useState({
		comments: [],
	})

	// Getting login token from redux
	const { token } = useSelector((state) => state.token)

	const handleChange = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		})
	}

	// Submitting new post to backend
	const handleSubmit = async (event) => {
		event.preventDefault()

		fetch('https://obscure-refuge-23971.herokuapp.com/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token.token,
			},
			body: JSON.stringify({
				author: 'Jonthejon10',
				title: post.title,
				text: post.text,
			}),
		}).catch((err) => console.log(err))

		setPosts([...posts, post])
		setPost({ comments: [] })
		navigate('/blog-cms/posts')
	}

	return (
		<div className='content-container newpost-container'>
			{token.status === 'success' && (
				<form onSubmit={handleSubmit}>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						required={true}
						onChange={handleChange}
					/>

					<label htmlFor='text'>Text</label>
					<textarea
						id='text'
						name='text'
						required={true}
						rows='5'
						cols='30'
						onChange={handleChange}
					/>

					<input type='submit' />
				</form>
			)}
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

export default Newpost