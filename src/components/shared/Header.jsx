import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
          <ul className='header_title'>
          <li className='title'>
            <Link to='/'><i className="fa-brands fa-opencart a"></i>
              <strong>e-commerce</strong>
            </Link>
          </li>
          </ul>
            <ul className='menu'>
                <li className='nav_icon'><Link to='/login'><i className="fa-regular fa-user a"></i></Link></li>
                <li className='nav_icon'><Link to='/cart'><i className="fa-solid fa-cart-shopping a"></i></Link></li>
                <li className='nav_icon'><Link to='/purchases'><i className="fa-solid fa-bag-shopping a"></i></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header