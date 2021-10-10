import React from 'react'
import notFoundPict from '../assets/images/404_notfound.png'
import { useHistory } from 'react-router'
import Button from '../components/button/btn'

const PageNotFound = () => {
	const history = useHistory()

	const goHome = () => {
		history.replace('/')
	}
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
			<Button onClick={goHome} cls='btn btn-outline-primary btn-lg'>
				Back to Home
			</Button>
		</>
	)
}

export default PageNotFound
