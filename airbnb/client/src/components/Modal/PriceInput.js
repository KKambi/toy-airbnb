import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input.attrs((props) => ({
  value: props.price,
}))`
  width: 7rem;
  height: 4rem;
  font-size: 1.5rem;
  text-align: center;
`;

function PriceInput(props) {
  const { price, priceHandler } = props;

  const changePrice = (event) => {
    priceHandler(event.target.value);
  };

  return (
    <StyledInput price={price} onChange={changePrice} />
  );
}

PriceInput.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PriceInput;
