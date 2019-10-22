import React from 'react';
import StayNumberBar from './StayNumberBar';
import StayNode from './StayNode';

function StayContainer() {
  return (
    <div>
      <h1>StayContainer</h1>
      <StayNumberBar />
      {/* TODO: 모든 Stay정보를 불러와서 StayNode에 담아서 렌더링 */}
      <StayNode />
    </div>
  );
}

export default StayContainer;
