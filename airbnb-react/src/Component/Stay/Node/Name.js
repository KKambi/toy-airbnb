import React from 'react';
import PropTypes from 'prop-types';

function Name(props) {
  const { value } = props;

  return (
    <div>{value}</div>
  );
}

Name.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Name;
