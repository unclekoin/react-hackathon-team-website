import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<ul className='nav'>
				<li className='nav-item'>
					<Link className='nav-link active' aria-current='page' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/members'>
						Members
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/favourites'>
						Favourites
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
