import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { OpacityConsumer } from '../Context/ContainerOpacity';

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

function FilterContainer(props) {
  const [modalDisplay, setModalDisplay] = useState('none');
  const [active, setActive] = useState(false);
  const { name, children } = props;

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
        ({ actions }) => (
          <div>
            <StyledButton
              active={active}
              onClick={() => {
                toggleButton();
                toggleModal();
                actions.toggleOpacity();
              }}
            >
              {name}
            </StyledButton>
            <div style={{ position: "relative" }}>
              { children }
            </div>
          </div>
        )
      }
    </OpacityConsumer>
  );
}

FilterContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterContainer;
