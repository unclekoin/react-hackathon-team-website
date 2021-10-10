import React from 'react'
import notFoundPict from '../assets/images/404_notfound.png'

const PageNotFound = () => {
	return (
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
	)
}

export default PageNotFound
