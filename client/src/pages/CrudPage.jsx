import React from 'react'
import { Link } from 'react-router-dom'


const Page = () => {

    //Crud Operations :
  

  return (
    <div>
        <h1>CRUD Page</h1>
        <div>
          <label for="name">Enter your name</label>
          <input id="name" type='text'/>
        </div>
        <br/>
      <div>
          <label for="id">Enter your ID</label>
          <input id="id" type='text'/>
        </div>
        <br/>
      <button><Link to="/">Go to Home Page</Link></button>
    </div>
  )
}

export default Page