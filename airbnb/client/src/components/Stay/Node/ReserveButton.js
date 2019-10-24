import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Reservation from "../Reservation";

const Button = styled.button`
  position: absolute;
  width: ${props => props.theme.buttonWidth};
  height: ${props => props.theme.buttonHeight};
  font-size: ${props => props.theme.defaultFontSize};
  font-weight: bold;
  bottom: 0;
  right: 0;
  margin: 1em;
  color: white;
  background-color: ${props => props.theme.conceptColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  &:hover{
    cursor: pointer;
  }
`;

// TODO: Reservation 컴포넌트 구현해야 함
function ReserveButton(props) {
  const { stayId } = props;

  const openModal = () => {
    console.log(stayId);
  };

  return (
    <Button type="button" onClick={openModal}>예약</Button>
  );
}

ReserveButton.propTypes = {
  stayId: PropTypes.number.isRequired,
};

export default ReserveButton;
