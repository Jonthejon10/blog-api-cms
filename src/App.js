import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Posts from './components/Posts'

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
						element={<Posts posts={posts} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App;
