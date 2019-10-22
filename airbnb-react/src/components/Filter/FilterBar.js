import React, { useState } from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';

const StyledBar = styled.div`
  display: flex;
`;

function FilterBar() {
  const [filterList, setFilterList] = useState(['날짜', '인원', '숙소 유형', '가격', '필터 추가하기']);

  return (
    <StyledBar>
      {filterList.map(filterName => <FilterButton name={filterName} />)}
    </StyledBar>
  );
}

export default FilterBar;
