import React from 'react';
import { Link } from 'react-router-dom';
import storage from '../../db/storage';
import getAge from '../../utils/get-age';

const Card = ({ _id, firstName, lastName, dateOfBirth, photo, about, onFavorite }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={photo} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>
            {firstName} {lastName}
          </h5>
          <p className="card-text">{getAge(dateOfBirth)}</p>
          <p className="card-text">{about}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/${_id}`}
                className="btn btn-sm btn-outline-secondary"
                role="button"
              >
                View
              </Link>
              <button
                type="button"
                className={`btn btn-sm btn-outline-${storage[_id] ? 'danger' : 'secondary'}`}
                onClick={() => onFavorite(_id)}
              >
                {storage[_id] ? 'Delete' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
