import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  top: 3em;
  left: 0;
  display: ${props => props.display};
  background-color: rgba(0, 0, 0);
  width: 100px;
  height: 100px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
`;

function Modal(props) {
  const { display } = props;

  return (
    <StyledModal display={display} />
  );
}

Modal.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Modal;
