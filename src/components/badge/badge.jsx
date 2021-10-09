import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ color, textColor, children }) => {
  return (
    <span
      class={`badge rounded-pill bg-${color} ${
        !!textColor && 'text-dark'
      } position-absolute top-0 start-100 translate-middle p-2`}
    >
      {children}
    </span>
  );
};

Badge.defaultProps = {
  textColor: false,
};

Badge.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.bool,
};

export default Badge;
