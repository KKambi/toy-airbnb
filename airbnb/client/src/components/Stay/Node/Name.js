import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledName = styled.div`
  color: black;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

function Name(props) {
  const { value } = props;

  return (
    <StyledName>
      {value}
    </StyledName>
  );
}

Name.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Name;
