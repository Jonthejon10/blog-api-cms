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

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch('http://localhost:2000/api/posts')
				const resJson = await res.json()
				setPosts(resJson.posts)
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [])

  return (
		<div className='container'>
			<BrowserRouter basename='/'>
				<Navbar />

				<Routes>
					<Route exact path='/blog-cms/' element={<Login />} />
				</Routes>

				<Routes>
					<Route
						exact
						path='/blog-cms/posts'
					  element={<Posts posts={ posts }/>}
					/>
			  	</Routes>

				<Routes>
					<Route
						exact
						path='/blog-cms/posts/:id'
					  element={<Fullpost/>}
					/>
			  	</Routes>

				<Routes>
					<Route
						exact
						path='/blog-cms/new-post'
						element={<Newpost/>}
					/>
			  	</Routes>

			  <Footer />
			</BrowserRouter>
		</div>
  )
}

export default App;
