import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const StyledButton = styled.button`
  background-color: #FFFFFF;
  color: ${props => props.theme.buttonClickColor};
  border: 1px solid ${props => props.theme.buttonClickColor};
  border-radius: 50%;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const SaveButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.buttonClickColor};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

function GuestModal() {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [kid, setKid] = useState(0);

  return (
    <StyledModal>
      <FlexDiv>
        <LeftDiv>
          성인
        </LeftDiv>
        <StyledButton>-</StyledButton>
        <NumberDiv>{adult}+</NumberDiv>
        <StyledButton>+</StyledButton>
      </FlexDiv>
      <FlexDiv>
        <LeftDiv>
          어린이<br />
          2~12세
        </LeftDiv>
        <StyledButton>-</StyledButton>
        <NumberDiv>{child}+</NumberDiv>
        <StyledButton>+</StyledButton>
      </FlexDiv>
      <FlexDiv>
        <LeftDiv>
          유아<br />
          2세 미만
        </LeftDiv>
        <StyledButton>-</StyledButton>
        <NumberDiv>{kid}+</NumberDiv>
        <StyledButton>+</StyledButton>
      </FlexDiv>
      <FlexDiv>
        <LeftDiv>
          <CancelButton>삭제</CancelButton>
        </LeftDiv>
        <SaveButton>저장</SaveButton>
      </FlexDiv>
    </StyledModal>
  );
}

export default GuestModal;
