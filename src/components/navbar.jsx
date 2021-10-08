import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
	const [collapse, setCollapse] = useState(true)

	const toggleCollapse = () => {
		setCollapse(!collapse)
	}

	return (
		<header>
			<div
				className={(collapse ? 'collapse ' : '') + 'bg-dark'}
				id='navbarHeader'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-8 col-md-7 py-4'>
							<h4 className='text-white'>About Us</h4>
							<p className='text-muted'>
								Add some information about the album below, the author, or any
								other background context. Make it a few sentences long so folks
								can pick up some informative tidbits. Then, link them off to
								some social networking sites or contact information.
							</p>
						</div>
						<div className='col-sm-4 offset-md-1 py-4'>
							<h4 className='text-white'>Contact</h4>
							<ul className='list-unstyled'>
								<li>
									<Link to='#' className='text-primary'>
										Follow on Twitter
									</Link>
								</li>
								<li>
									<a
										href='facebook.com'
										target='_blank'
										className='text-primary'
									>
										Like on Facebook
									</a>
								</li>
								<li>
									<a href='mail@mail.com' className='text-primary'>
										Email me
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='navbar navbar-dark bg-dark shadow-sm'>
				<div className='container'>
					<Link
						to='/'
						className='navbar-brand d-flex align-items-center text-primary'
					>
						<span className='me-2'>
							<img
								src='/static/media/logo.16972065.png'
								style={{ width: 50, height: 50 }}
								alt='logo'
							/>
						</span>
						<strong>Home</strong>
					</Link>
					<Link
						to='/favourites'
						className='navbar-brand d-flex align-items-left text-primary me-auto ms-3'
					>
						<strong>Favourites</strong>
					</Link>
					<button
						onClick={toggleCollapse}
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
				</div>
			</div>
		</header>
	)
}

export default Navbar
