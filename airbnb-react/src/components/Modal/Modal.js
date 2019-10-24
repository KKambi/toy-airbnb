import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

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
  z-index: 10;
  box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.1);
`;

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { display, children } = props;

  Modal.handleClickOutside = () => {
    setIsOpen(false);
    console.log(isOpen);
  };

  return (
    <StyledModal display={display}>
      {children}
    </StyledModal>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Modal.handleClickOutside,
};

Modal.propTypes = {
  display: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default onClickOutside(Modal, clickOutsideConfig);
