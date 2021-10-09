import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const FooterColumn = ({ children, title, list, styles }) => (
  <div className='col-6 col-md'>
    <h5>{title}</h5>
    <ul className={`list-unstyled text-small ${styles}`}>
      {list.map((item) => (
        <li key={item.title} className='mb-1'>
          <Link className='link-secondary text-decoration-none' to={item.to}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  styles: PropTypes.string,
}

export default FooterColumn
