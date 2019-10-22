import React from 'react';
import PropTypes from 'prop-types';

function Options(props) {
  const { value } = props;
  const [ beds, bedrooms, bathrooms ] = value;

  return (
    <div>
      <div>침대: {beds}개</div>
      <div>침실: {bedrooms}개</div>
      <div>욕실: {bathrooms}개</div>
    </div>
  );
}

Options.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Options;
