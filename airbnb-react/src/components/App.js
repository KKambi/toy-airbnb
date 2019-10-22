import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
    box-style: content-box;
  }

  button {
    padding: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FilterBar />
      <StayContainer />
    </ThemeProvider>
  );
}

export default App;
