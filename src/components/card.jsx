import React from 'react';

const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
      <img src="http://placehold.it/400x300" className="card-img-top" alt="" />
        <div className="card-body">
          <h5>Pavel Koryakin</h5>
          <p className="card-text">55 years old</p>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum id
            totam rem facere nam, voluptate excepturi eaque perferendis vel
            necessitatibus.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Favourites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
