import React, {useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from './redux/token'
import '../styles/Login.css'

const Login = () => {
    const navigate = useNavigate()

	const dispatch = useDispatch()

    const [user, setUser] = useState({})

	const { token } = useSelector((state) => state.token)
	

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		})
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch('https://obscure-refuge-23971.herokuapp.com/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user.username,
				password: user.password,
			}),
		})
			.then((res) => res.json())
			.then((data) => dispatch(setToken(data)))
			.catch((err) => console.log(err))
    }
 	useEffect(() => {
		if (token.status === 'success') {
			navigate('/blog-cms/posts')
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token])
    
	return (
		<div className='content-container login-container'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='username'
					placeholder='Enter username'
					required={true}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Enter password'
					required={true}
					onChange={handleChange}
				/>
				<input type='submit' />
			</form>
		</div>
	)
}

export default Login