import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <h2>Company</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Home</Link>
        </li>
        <li>
          <Link to="/header/">Header</Link>
        </li>
        <li>
          <Link to="/images/">Images</Link>
        </li>
        <li>
          <Link to="/tours/">Tours</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
