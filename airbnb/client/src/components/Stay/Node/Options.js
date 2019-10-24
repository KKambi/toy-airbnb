import React from 'react';
import PropTypes from 'prop-types';

function Options(props) {
  const { value } = props;
  const [guest, beds, bedrooms, bathrooms] = value;

  return (
    <div>
      인원 {guest}명 · 침대 {beds}개 · 침실 {bedrooms}개 · 욕실 {bathrooms}개
    </div>
  );
}

Options.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Options;
