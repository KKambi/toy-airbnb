import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../style/theme';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FilterBar />
      <hr style={{margin: "1em 0 3em 0"}} />
      <StayContainer />
    </ThemeProvider>
  );
}

export default App;
