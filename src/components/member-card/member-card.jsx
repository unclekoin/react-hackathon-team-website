import React, { useState } from 'react'
import members from '../../db/api.members'
import storage from '../../db/storage'
import PropTypes from 'prop-types'
import Button from '../button/btn'
import Badge from '../badge/badge'
import Progress from '../progress/progress'

const MemberCard = ({ memberId, onFavorite }) => {
  const [member] = useState(members.find((item) => item._id === memberId))
  const {
    _id,
    firstName,
    lastName,
    photo,
    about,
    role,
    socialLinks,
    badge,
    technologies,
  } = member

  return (
    <div className='card mb-3 shadow p-3 page-wrapper'>
      <div className='row g-0 p-3'>
        <div className='col-md-6'>
          <picture class='member-item-img '>
            <img
              src={photo}
              className='img-fluid rounded-start'
              alt='...'
              loading='lazy'
            />
          </picture>
        </div>
        <div className='col-md-6 ps-4'>
          <div className='card-body lead text-muted'>
            <Badge color={badge.color} textColor={badge.textColor}>
              {badge.name}
            </Badge>
            <h3 className='card-title pt-4'>
              {firstName} {lastName}
            </h3>
            <p className='card-text'>{about}</p>
            {role.text}{' '}
            <ul className='card-text'>
              {role.componets.map((component, index) => (
                <li key={role.componets.length - index}>{component}</li>
              ))}
            </ul>
            <div className='pb-4'>
              {Object.keys(socialLinks).map((key, i) => (
                <a
                  key={Object.keys(socialLinks).length - i}
                  href={socialLinks[key]}
                  className='pe-2'
                >
                  <i className={`bi bi-${key}`}></i>
                </a>
              ))}
            </div>
            <div className='d-flex flex-wrap'>
              {Object.keys(technologies).map((key, i) => (
                <Progress
                  key={Object.keys(technologies).length - i}
                  title={technologies[key].name}
                  value={technologies[key].level}
                  color={technologies[key].color}
                />
              ))}
            </div>
            <Button
              onClick={() => onFavorite(_id)}
              cls={`btn btn-outline-${storage[_id] ? 'danger' : 'secondary'}`}
            >
              {storage[_id] ? 'Remove' : 'Add to Favorites'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

MemberCard.propTypes = {
  memberId: PropTypes.string.isRequired,
  onFavorite: PropTypes.func.isRequired,
}

export default MemberCard
