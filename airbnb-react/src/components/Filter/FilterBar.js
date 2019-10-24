import React, { useState } from 'react';
import styled from 'styled-components';
import FilterContainer from './FilterContainer';
import GuestModal from '../Modal/GuestModal';

const StyledBar = styled.div`
  display: flex;
`;

function FilterBar() {
  const [filterList, setFilterList] = useState([
    {
      id: 0,
      name: '날짜',
    },
    {
      id: 1,
      name: '인원',
      modal: <GuestModal />,
    },
    {
      id: 2,
      name: '숙소 유형',
    },
    {
      id: 3,
      name: '가격',
    },
    {
      id: 4,
      name: '필터 추가하기',
    },
  ]);

  return (
    <StyledBar>
      {filterList.map((filter) => (
        <FilterContainer key={filter.id} name={filter.name}>
          {filter.modal}
        </FilterContainer>
      ))}
    </StyledBar>
  );
}

export default FilterBar;
