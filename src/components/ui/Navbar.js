import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <h1 className="logo">Wine<span>Series</span></h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
