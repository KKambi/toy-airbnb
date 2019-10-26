import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { OpacityContext } from '../Context/OpacityContext';

const StyledButton = styled.button`
  padding: 0.5em 0.8em
  font-size: ${props => props.theme.defaultFontSize};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  margin-right: 0.7em;
  color: ${({ active }) => (active === true ? '#FFFFFF' : '#000000')};
  background-color: ${({ active, theme }) => (active === true ? theme.buttonClickColor : '#FFFFFF')};
  cursor: pointer;
  ${({ active, theme }) => !active && `
    &:hover {
      background-color: ${theme.buttonHoverColor};
    }
  `}
`;

const ModalContainer = styled.div`
  display: ${props => props.modalDisplay};
  position: relative;
`;

function FilterContainer(props) {
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState('none');
  const {
    id,
    name,
    activeFilterMethod,
    children,
  } = props;
  const { stayOpacityHandler } = useContext(OpacityContext);
  const { setOpacityCloudy, setOpacityClear } = stayOpacityHandler;

  const toggleButton = () => {
    setActive(!active);
    activeFilterMethod(id);
  };

  const toggleModal = () => {
    const newDisplay = (display === 'none' ? 'block' : 'none');
    setDisplay(newDisplay);
  };

  return (
    <div>
      <StyledButton
        active={active}
        onClick={() => {
          toggleButton();
          toggleModal();
          setOpacityCloudy();
          setOpacityClear();
        }}
      >
        {name}
      </StyledButton>
      <ModalContainer modalDisplay={display}>
        {children}
      </ModalContainer>
    </div>
  );
}

FilterContainer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  activeFilterMethod: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterContainer;
