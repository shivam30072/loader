import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'


const Navbar = ({ fetchUser, setUser }) => {

  return (
    <nav className='navbar'>
        <div className='nav-left'>
        <Link to={'/'}><h1 onClick={() => setUser([])} className='FixNow'> FixNow</h1> </Link>
        </div>
        <div className='nav-mid'>
            <ul className='list'>
              <li>Products</li>
              <li>Company</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className='nav-right'>
        <Link to={'/user'}><button  onClick={fetchUser}>Get Users </button></Link>
        </div>
    </nav>
    
  )
}

export default Navbar