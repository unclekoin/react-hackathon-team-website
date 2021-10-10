import React, { useState } from 'react';
import members from '../../db/api.members';
import storage from '../../db/storage';
import PropTypes from 'prop-types';
import Button from '../button/btn';
import Badge from '../badge/badge';
import Progress from '../progress/progress';

const MemberCard = ({ memberId, onFavorite }) => {
  const [member] = useState(members.find((item) => item._id === memberId));
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
  } = member;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={photo} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <Badge color={badge.color} textColor={badge.textColor}>
            {badge.name}
          </Badge>
          <div className="card-body lead text-muted">
            <h5 className="card-title">
              {firstName} {lastName}
            </h5>
            <p className="card-text">{about}</p>
            {role.text}{' '}
            <ul className="card-text">
              {role.componets.map((component, index) => (
                <li key={role.componets.length - index}>{component}</li>
              ))}
            </ul>
            <div>
              {Object.keys(socialLinks).map((key, i) => (
                <a
                  key={Object.keys(socialLinks).length - i}
                  href={socialLinks[key]}
                >
                  <i className={`bi bi-${key}`}></i>
                </a>
              ))}
            </div>
            <div className="d-flex">
              {Object.keys(technologies).map((key, i) => (
                <Progress
                  key={Object.keys(technologies).length - i}
                  title={technologies[key].name}
                  value={technologies[key].lavel}
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
  );
};

MemberCard.propTypes = {
  memberId: PropTypes.string.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default MemberCard;
