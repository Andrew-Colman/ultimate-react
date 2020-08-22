import React from 'react';
import { ContextProvider } from './components/Context';
import Routes from './components/Routes';
import GlobalStyle from './GlobalStyle';

require('dotenv').config();

export default function App() {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Routes />
      </ContextProvider>
    </>
  );
}
