import React, {useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({})

	const [loginRes, setLoginRes] = useState({})

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		})
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:2000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
		}).then(res => res.json())
			.then(data => setLoginRes(data))
			.catch(err => console.log(err))
    }
	
	useEffect(() => {
		if (loginRes.success === true) {
			navigate('/blog-cms/posts')
		}
	}, [loginRes])

    return (
		<div className='login-container'>
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