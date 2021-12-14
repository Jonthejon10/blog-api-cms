import React, { useState, useEffect }from 'react'
import '../styles/Fullpost.css'
import { useParams, useNavigate } from 'react-router-dom'
import formatDistance from 'date-fns/formatDistance'

const Fullpost = () => {
    const navigate = useNavigate()

    const { id } = useParams()

    const [post, setPost] = useState({})

    const [comment, setComment] = useState({})

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(`http://localhost:2000/api/posts/${id}`)
				const resJson = await res.json()
				setPost(resJson.post)
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

	const handleChange = (e) => {
		setComment({
			...comment,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		fetch(`http://localhost:2000/api/posts/${id}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				author: comment.author,
                text: comment.text,
                reference: id,
			}),
		}).catch((err) => console.log(err))
    }
    console.log(post.comments)
    
    return (
		<div className='content-container fullpost-container'>
			<button onClick={() => navigate('/blog-cms/posts')}>Go back</button>

			<h1>{post.title}</h1>

			<h3>by {post.author}</h3>

			{post.timestamp && (
				<p>
					{formatDistance(new Date(post.timestamp), new Date())} ago
				</p>
			)}

			<p className='post-text'>{post.text}</p>

			<form onSubmit={handleSubmit}>
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
				<button type='submit'>Submit</button>
			</form>

			<div className='post-comments-container'>
				{post.comments &&
					post.comments.map((item, index) => {
						return (
							<div key={index} className='post-comment'>
								<p>{item.author}</p>
								<p>{item.timestamp}</p>
								<p>{item.text}</p>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Fullpost