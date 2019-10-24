import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberBar from './NumberBar';
import Node from './Node/Node';
import utilFetch from '../../utils/utilFetch';
import { OpacityConsumer } from '../Context/ContainerOpacity';

const StyledBackdrop = styled.div`
  opacity: ${props => (props.opacity)};
`;

const StyledContainer = styled.div`
  opacity: ${props => (props.opacity)};
  display: ${props => (props.isLoaded ? 'block' : 'none')};
`;

function Container() {
  // const [stays, setStays] = useState([]);
  const [stayCount, setStayCount] = useState(0);

  // isLoading의 상태에 따라 렌더링을 할지 말지 결정합니다.
  useEffect(() => {
    async function fetchData() {
      const res = await utilFetch.getData('/api/stays/all');
      setStays(res.data.rows);
      setStayCount(res.data.count);
    }
    fetchData();
  }, []);

  return (
    <>
      <OpacityConsumer>
        {
          ({ stayOpacity, actions }) => (
            <StyledBackdrop opacity={stayOpacity} onClick={actions.setOpacityClear}>
              <StyledContainer>
                <NumberBar stayCount={stayCount} />
                {stays.map((stay) => <Node key={stay.id} stay={stay} />)}
              </StyledContainer>
            </StyledBackdrop>
          )
        }
      </OpacityConsumer>
    </>
  );
}

export default Container;
