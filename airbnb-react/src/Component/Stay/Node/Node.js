import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Options from './Options';
import ReserveButton from './ReserveButton';
import Name from './Name';

function Node(props) {
  const { stay } = props;
  const { name, price, guest, type, image, beds, bedrooms, bathrooms, host_id } = stay;
  const options = [beds, bedrooms, bathrooms];

  return (
    <div>
      <Image value={image} />
      <Name value={name} />
      <Options value={options} />
      <ReserveButton />
    </div>
  );
}

Node.propTypes = {
  stay: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    guest: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    host_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Node;
