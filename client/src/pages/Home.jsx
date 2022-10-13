import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button><Link to="/page">Go to Crud Page</Link></button>
      </div>
  )
}

export default Home