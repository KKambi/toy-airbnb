import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 0.5em 0.8em
  font-size: ${props => props.theme.defaultFontSize};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  margin-right: 0.7em;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.buttonHoverColor};
  }
`;

function FilterButton(props) {
  const { name } = props;

  return (
    <StyledButton>
      {name}
    </StyledButton>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterButton;
