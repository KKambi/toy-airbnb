import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input.attrs((props) => ({
  value: props.price,
}))`
  width: 8rem;
  padding-left: 1rem;
  height: 4rem;
  font-size: 1.5rem;
  text-align: center;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background-image: url('/money.jpg');
  background-size: 10rem 100%;
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
  priceHandler: PropTypes.func.isRequired,
};

export default PriceInput;
