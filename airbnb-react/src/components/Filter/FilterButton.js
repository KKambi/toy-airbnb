import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { OpacityConsumer } from '../ContainerOpacity';

const StyledButton = styled.button`
  position: relative;
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

function FilterButton(props) {
  const [modalDisplay, setModalDisplay] = useState('none');
  const [active, setActive] = useState(false);
  const { name } = props;

  const toggleButton = () => {
    setActive(!active);
  };

  const toggleModal = () => {
    const display = (modalDisplay === 'none' ? 'block' : 'none');
    setModalDisplay(display);
  };

  return (
    <OpacityConsumer>
      {
        ({ toggleOpacity }) => (
          <StyledButton active={active} onClick={() => { toggleButton(); toggleModal(); toggleOpacity(); }}>
            {name}
            <Modal display={modalDisplay} />
          </StyledButton>
        )
      }
    </OpacityConsumer>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterButton;
