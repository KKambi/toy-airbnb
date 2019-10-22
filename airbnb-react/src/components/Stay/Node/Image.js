import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 50rem;
  min-width: 50rem;
  max-height: 40rem;
  min-heigth: 40rem;
  border-radius: ${props => props.theme.borderRadius};
`;

function Image(props) {
  const { value } = props;

  return (
    <Img src={value} alt="stay" />
  );
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Image;
