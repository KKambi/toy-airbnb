import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberBar from './NumberBar';
import Node from './Node/Node';
import utilFetch from '../../utils/utilFetch';

const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: ${props => (props.isLoaded ? 'block' : 'none')};
`;

function Container() {
  const [stays, setStays] = useState([]);
  const [stayCount, setStayCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // isLoading의 상태에 따라 렌더링을 할지 말지 결정합니다.
  useEffect(() => {
    async function fetchData() {
      const res = await utilFetch.getData('/api/stays/all');
      setIsLoaded(true);
      setStays(res.data.rows);
      setStayCount(res.data.count);
    }
    fetchData();

    return function cleanUp() {
      setIsLoaded(false);
    };
  }, isLoaded);

  return (
    <StyledContainer isLoaded={isLoaded}>
      <NumberBar stayCount={stayCount} />
      {stays.map((stay) => <Node key={stay.id} stay={stay} />)}
    </StyledContainer>
  );
}

export default Container;
