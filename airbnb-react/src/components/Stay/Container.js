import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberBar from './NumberBar';
import Node from './Node/Node';
import { OpacityConsumer } from '../Context/ContainerOpacity';

const StyledBackdrop = styled.div`
  opacity: ${props => (props.opacity)};
`;

const StyledContainer = styled.div`
  opacity: ${props => (props.opacity)};
`;

function Container(props) {
  const { stayObj, stayCountObj } = props;

  return (
    <>
      <OpacityConsumer>
        {
          ({ stayOpacity, actions }) => (
            <StyledBackdrop opacity={stayOpacity} onClick={actions.setOpacityClear}>
              <StyledContainer>
                <NumberBar stayCount={stayCountObj.stayCount} />
                {stayObj.stays.map((stay) => <Node key={stay.id} stay={stay} />)}
              </StyledContainer>
            </StyledBackdrop>
          )
        }
      </OpacityConsumer>
    </>
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
