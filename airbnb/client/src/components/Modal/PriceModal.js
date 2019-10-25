import React, { useState } from 'react';
import styled from 'styled-components';
import { StayConsumer } from '../Context/StayContext';
import AirbnbSlider from '../Slider/AirbnbSlider';
import PriceInput from './PriceInput';

const StyledModal = styled.div`
  width: 40rem;
  height: 18rem;
  padding: 2rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1rem;
  left: 0;
  display: ${props => props.display};
  background-color: #FFFFFF;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  z-index: 10;
  box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-around;
`;

const LeftDiv = styled.div`
  margin-right: auto;
`;

const Button = styled.button`
  background-color: #FFFFFF;
  font-size: 1.5rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.4
  }
`;

const SaveButton = styled(Button)`
  color: ${props => props.theme.buttonClickColor};
  border: none;
  font-weight: bold;
`;

const CancelButton = styled(Button)`
  color: #000000;
  border: none;
  font-weight: bold;
`;

function PriceModal() {
  const [minPrice, setMinPrice] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(250000);

  const priceHandler = {
    setMinPrice,
    setMaxPrice,
  };

  return (
    <StayConsumer>
      {
        ({ addFilter }) => (
          <StyledModal>
            <FlexDiv>
              <AirbnbSlider priceHandler={priceHandler} minPrice={minPrice} maxPrice={maxPrice} />
            </FlexDiv>
            <FlexDiv>
              <PriceInput priceHandler={setMinPrice} price={minPrice} />
              <PriceInput priceHandler={setMaxPrice} price={maxPrice} />
            </FlexDiv>
            <FlexDiv>
              <LeftDiv>
                <CancelButton>삭제</CancelButton>
              </LeftDiv>
              <SaveButton onClick={() => { addFilter({ minPrice, maxPrice }); }}>저장</SaveButton>
            </FlexDiv>
          </StyledModal>
        )
      }
    </StayConsumer>
  );
}

export default PriceModal;
