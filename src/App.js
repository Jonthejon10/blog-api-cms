import React, { useState, useEffect }from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Posts from './components/Posts'
import Newpost from './components/Newpost'
import Fullpost from './components/Fullpost'
import './styles/App.css'

const App = () => {

	const [posts, setPosts] = useState([])

	// Getting posts from backend
	async function fetchData() {
		try {
			const res = await fetch(
				'https://obscure-refuge-23971.herokuapp.com/api/posts'
			)
			const resJson = await res.json()
			setPosts(resJson.posts)
		} catch (error) {
			console.error(error)
		}
	}
	
	useEffect(() => {
		fetchData()
	}, [posts.length])

  return (
		<div className='container'>
			<BrowserRouter>
				<Navbar />

			  <Routes>
				  
					<Route exact path='/blog-cms/' element={<Login />} />

					<Route
						exact
						path='/blog-cms/posts'
						element={
							<Posts posts={posts} setPosts={setPosts} />
						}
					/>

					<Route
						exact
						path='/blog-cms/posts/:id'
						element={<Fullpost posts={posts} setPosts={setPosts} />}
					/>

					<Route
						exact
						path='/blog-cms/new-post'
						element={<Newpost posts={posts} setPosts={setPosts} />}
					/>
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
  )
}

export default App;
