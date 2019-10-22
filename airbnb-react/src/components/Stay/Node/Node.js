import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import Name from './Name';
import Options from './Options';
import ReserveButton from './ReserveButton';

const StayContainer = styled.div`
  min-width: 120rem;
  padding: 0.5rem;
  margin: 0 0 5rem 0;
  display: flex;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
`;

const StayDataContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  font-size: ${props => props.theme.defaultFontSize};
  color: ${props => props.theme.defaultFontColor};
  position: relative;
`;


function Node(props) {
  const { stay } = props;
  const {
    id, name, price, guest, type, image, beds, bedrooms, bathrooms,
  } = stay;
  const options = [guest, beds, bedrooms, bathrooms];

  return (
    <StayContainer>
      <Image value={image} />
      <StayDataContainer>
        <Name value={name} />
        <Options value={options} />
        <ReserveButton stayId={id} />
      </StayDataContainer>
    </StayContainer>
  );
}

Node.propTypes = {
  stay: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
