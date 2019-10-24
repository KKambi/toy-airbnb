import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNumberBar = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.defaultTitleSize};
  margin: 1rem 0;
`;

function NumberBar(props) {
  const { stayCount } = props;

  return (
    <StyledNumberBar>
      숙소 {stayCount}개
    </StyledNumberBar>
  );
}

NumberBar.propTypes = {
  stayCount: PropTypes.number.isRequired,
};

export default NumberBar;
