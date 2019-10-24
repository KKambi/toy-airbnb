import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import utilFetch from '../utils/utilFetch';
import FilterBar from './Filter/FilterBar';
import StayContainer from './Stay/Container';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap');
  
  html {
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
  }

  #root {
    position: relative;
    top: 5em;
    width: 80%;
    margin: 0 auto;
  }

  button {
    padding: 0;
  }

  hr {
    color: #D2D0D0;
  }
`;

function ContentContainer() {
  const [stays, setStays] = useState([]);
  const [stayCount, setStayCount] = useState(0);

  const stayObj = {
    stays,
    setStays,
  };

  const stayCountObj = {
    stayCount,
    setStayCount,
  };

  useEffect(() => {
    async function fetchData() {
      const res = await utilFetch.getData('/api/stays/all');
      setStays(res.data.rows);
      setStayCount(res.data.count);
      console.log(res.data.count);
    }
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <FilterBar />
      <StayContainer stayObj={stayObj} stayCountObj={stayCountObj} />
    </>
  );
}

export default ContentContainer;
