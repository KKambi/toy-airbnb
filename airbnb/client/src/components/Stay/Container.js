import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberBar from './NumberBar';
import Node from './Node/Node';
import { OpacityContext } from '../Context/OpacityContext';
import { StayContext } from '../Context/StayContext';

const StyledBackdrop = styled.div`
  opacity: ${props => (props.opacity)};
`;

const StyledContainer = styled.div`
  opacity: ${props => (props.opacity)};
`;

function Container() {
  const { stays, stayCount } = useContext(StayContext);
  const { stayOpacity, stayOpacityHandler } = useContext(OpacityContext);
  const { setOpacityClear } = stayOpacityHandler;

  return (
    <StyledBackdrop opacity={stayOpacity} onClick={setOpacityClear}>
      <StyledContainer>
        <NumberBar stayCount={stayCount} />
        {stays.map((stay) => <Node key={stay.id} stay={stay} />)}
      </StyledContainer>
    </StyledBackdrop>
  );
}

Container.propTypes = {
  stayObj: PropTypes.shape({
    stays: PropTypes.array.isRequired,
    setStays: PropTypes.func.isRequired,
  }).isRequired,
  stayCountObj: PropTypes.shape({
    stayCount: PropTypes.number.isRequired,
    setStayCount: PropTypes.func.isRequired,
  }).isRequired,
};

export default Container;
