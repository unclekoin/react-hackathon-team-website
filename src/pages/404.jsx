import React from 'react'
import notFoundPict from '../assets/images/404_notfound.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<>
			<div className='page-wrapper'>
				<img
					style={{
						display: 'block',
						width: '60%',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
					src={notFoundPict}
					alt='Page not found'
				/>
			</div>
			<Link to='/'>Back to Home</Link>
		</>
	)
}

export default PageNotFound
