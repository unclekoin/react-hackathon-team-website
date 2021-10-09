import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../footer/logo'
import './navbar.css'

const Hamburger = (props) => (
  <button
    onClick={props.toggleCollapse}
    className='navbar-toggler'
    type='button'
    data-bs-toggle='collapse'
    data-bs-target='#navbarHeader'
    aria-controls='navbarHeader'
    aria-expanded='false'
    aria-label='Toggle navigation'
  >
    <span className='navbar-toggler-icon'></span>
  </button>
)

const MenuItem = ({ children, to }) => (
  <Link to={to} className='d-flex align-items-left me-auto ms-3'>
    {children}
  </Link>
)

const NavBar = (props) => (
  <div className='shadow-sm navbar navbar-dark header'>
    <div className='container'>
      <div className='wrapper-menu'>
        <MenuItem to={'/'}>
          <span className='me-2'>
            <Logo size={'48px'} />
          </span>
        </MenuItem>
        <MenuItem to={'/favourites'}>Favourites</MenuItem>
        <MenuItem to={'/about'}>About</MenuItem>
        <MenuItem to={'/сontacts'}>Contacts</MenuItem>
      </div>
      <Hamburger toggleCollapse={props.toggleCollapse}></Hamburger>{' '}
    </div>
  </div>
)

const NavBarTop = (props) => (
  <div
    className={(props.collapse ? 'collapse ' : '') + 'header-top'}
    id='navbarHeader'
  >
    <div className='container'>
      <div className='row'>
        <div className='py-4 col-sm-8 col-md-7'>
          <h4>About Us</h4>
          <p className='text-muted-header'>
            <q>
              We are a small but dynamic developing team of front-end
              developers. Javascript, React, Node.js - this is about us!
            </q>
          </p>
        </div>
        <div className='py-4 col-sm-4 offset-md-1'>
          <h4>Contact</h4>
          <ul className='list-unstyled'>
            <li>
              <Link to='#' className=''>
                Follow on Twitter
              </Link>
            </li>
            <li>
              <a href='facebook.com' target='_blank' className=''>
                Like on Facebook
              </a>
            </li>
            <li>
              <a href='mail@mail.com' className=''>
                Email me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const Navbar = () => {
  const [collapse, setCollapse] = useState(true)

  const toggleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <header>
      <NavBarTop collapse={collapse}></NavBarTop>{' '}
      <NavBar toggleCollapse={toggleCollapse}></NavBar>{' '}
    </header>
  )
}

export default Navbar
