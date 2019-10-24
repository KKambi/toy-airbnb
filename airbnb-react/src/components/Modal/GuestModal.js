import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StayConsumer } from '../Context/StayContext';

const StyledModal = styled.div`
  width: 33rem;
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
`;

const LeftDiv = styled.div`
  margin-right: auto;
`;

const NumberDiv = styled.div`
  margin: 0 2rem;
`;

const Button = styled.button`
  background-color: #FFFFFF;
  font-size: 1.5rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.4
  }
`;

const PlusButton = styled(Button)`
  color: ${props => props.theme.buttonClickColor};
  border: 1px solid ${props => props.theme.buttonClickColor};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;

const MinusButton = styled(Button).attrs((props) => ({
  disabled: (props.number <= 0 || props.needAdult),
}))`
  color: ${props => props.theme.buttonClickColor};
  border: 1px solid ${props => props.theme.buttonClickColor};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
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

function GuestModal() {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [kid, setKid] = useState(0);

  const existNoAdult = () => (adult <= 0);

  const existChildAndKid = () => (child > 0 || kid > 0);

  // 어린이, 유아 validation
  useEffect(() => {
    if (existNoAdult() && existChildAndKid()) {
      setAdult(1);
    }
  }, [adult, child, kid]);

  const plusAdult = () => {
    setAdult(adult + 1);
  };

  const minusAdult = () => {
    setAdult(adult - 1);
  };

  const plusChild = () => {
    setChild(child + 1);
  };

  const minusChild = () => {
    setChild(child - 1);
  };

  const plusKid = () => {
    setKid(kid + 1);
  };

  const minusKid = () => {
    setKid(kid - 1);
  };

  return (
    <StayConsumer>
      {
        ({ filterStay }) => (
          <StyledModal>
            <FlexDiv>
              <LeftDiv>
                성인
              </LeftDiv>
              <MinusButton number={adult} onClick={minusAdult}>-</MinusButton>
              <NumberDiv>{adult}+</NumberDiv>
              <PlusButton onClick={plusAdult}>+</PlusButton>
            </FlexDiv>
            <FlexDiv>
              <LeftDiv>
                어린이<br />
                2~12세
              </LeftDiv>
              <MinusButton number={child} onClick={minusChild}>-</MinusButton>
              <NumberDiv>{child}+</NumberDiv>
              <PlusButton onClick={plusChild}>+</PlusButton>
            </FlexDiv>
            <FlexDiv>
              <LeftDiv>
                유아<br />
                2세 미만
              </LeftDiv>
              <MinusButton number={kid} onClick={minusKid}>-</MinusButton>
              <NumberDiv>{kid}+</NumberDiv>
              <PlusButton onClick={plusKid}>+</PlusButton>
            </FlexDiv>
            <FlexDiv>
              <LeftDiv>
                <CancelButton>삭제</CancelButton>
              </LeftDiv>
              <SaveButton onClick={() => { filterStay(adult + child); }}>저장</SaveButton>
            </FlexDiv>
          </StyledModal>
        )
      }
    </StayConsumer>
  );
}

export default GuestModal;
