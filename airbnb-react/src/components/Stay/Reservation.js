import React from 'react';
import PropTypes from 'prop-types';

// TODO: 향후 모달로 구현하세요
function Reservation(props) {
  const { stayId } = props;

  return (
    <div>
      <h1>예약컴포넌트: {stayId}번방</h1>
    </div>
  );
}

Reservation.propTypes = {
  stayId: PropTypes.number.isRequired,
};

export default Reservation;
