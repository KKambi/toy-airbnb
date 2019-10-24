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
      modalDisplay: 'none',
    },
    {
      id: 1,
      name: '인원',
      modal: <GuestModal />,
      modalDisplay: 'none',
    },
    {
      id: 2,
      name: '숙소 유형',
      modalDisplay: 'none',
    },
    {
      id: 3,
      name: '가격',
      modalDisplay: 'none',
    },
    {
      id: 4,
      name: '필터 추가하기',
      modalDisplay: 'none',
    },
  ]);

  const setActiveFilterIdx = (id) => {
    const newFilterList = Object.assign(filterList);
    newFilterList[id].modalDisplay = 'block';
    setFilterList(newFilterList);
  };

  return (
    <StyledBar>
      {filterList.map((filter) => (
        <FilterContainer
          key={filter.id}
          id={filter.id}
          name={filter.name}
          modalDisplay={filter.modalDisplay}
          activeFilterMethod={setActiveFilterIdx}
        >
          {filter.modal}
        </FilterContainer>
      ))}
    </StyledBar>
  );
}

export default FilterBar;
