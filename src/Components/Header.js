import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  const cartItemValue = useSelector(state => state.cart)
  return (
    <header>
      <nav className='header'>
        <nav>
          <div className="nav-wrapper">
            <Link to='/cart' className="brand-logo right"><ShoppingCartIcon/>{cartItemValue.length}</Link>
            <ul id="nav-mobile" className="left ">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/cart'>Cart</Link></li>
            
            </ul>
          </div>
        </nav>

      </nav>
    </header>
  )
}

export default Header