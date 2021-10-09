import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import Logo from './logo'

const Footer = () => {
  return (
    <div className='p-3 footer'>
      <footer className='container pt-4 my-md-5 pt-md-5'>
        <div className='row'>
          <div className='col-12 col-md d-flex flex-column align-items-center'>
            <Link to='/' className='footer-copyrigth'>
              <Logo size={'60px'} />
              <small className='mb-3 text-muted footer-copyrigth'>
                <span>&copy; 2021</span>
                <span>Copyright</span>
                <span>Group 8 inc.</span>
              </small>
            </Link>
          </div>
          <div className='col-6 col-md'>
            <h5>About Us</h5>
            <ul className='list-unstyled text-small'>
              <li className='mb-1'>
                <a className=' text-decoration-none' href='/'>
                  Our team
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='/'>
                  Team for your project
                </a>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5>Favorites</h5>
            <ul className='list-unstyled text-small'>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='/'>
                  The best developers
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='/'>
                  Your preferences
                </a>
              </li>
            </ul>
          </div>
          <div className='col-6 col-md'>
            <h5>Contacts</h5>
            <ul className='list-unstyled text-small'>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='/'>
                  Contact Us
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='/'>
                  Clients Portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
