import React from 'react'
import '../styles/Navbar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()

    const { token } = useSelector((state) => state.token)

	return (
		<nav>
			<ul>
				{token.status === 'success' && (
					<li onClick={() => navigate('/blog-cms/posts')}>Home</li>
				)}

				{token.status !== 'success' && (
					<li onClick={() => navigate('/blog-cms/')}>Login</li>
				)}

				<li onClick={() => navigate('/blog-cms/new-post')}>New post</li>
			</ul>
		</nav>
	)
}

export default Navbar