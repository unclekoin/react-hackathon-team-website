import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const NavBarTop = ({ collapse }) => {
  return (
    <div
      className={(collapse ? 'collapse ' : '') + 'header-top'}
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
}

NavBarTop.propTypes = {
  collapse: PropTypes.bool.isRequired,
}

export default NavBarTop
