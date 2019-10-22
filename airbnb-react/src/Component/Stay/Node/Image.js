import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  const { value } = props;

  return (
    <img src={value} alt="stay" />
  );
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Image;
