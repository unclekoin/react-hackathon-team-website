import React from 'react';
import notFoundPict from '../assets/images/404_notfound.png';
import MenuItem from '../components/navbar/menuItem';

const PageNotFound = () => {
  return (
    <>
      <div className="page-wrapper-404">
        <img
          style={{
            display: 'block',
            width: '60%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          src={notFoundPict}
          alt="Page not found"
        />
        <div className="block-to-home">
          <MenuItem to="">go to home page :)</MenuItem>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
