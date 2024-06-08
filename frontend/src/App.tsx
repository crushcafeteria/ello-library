// import React from 'react';
import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from './components/AppBar';
import SearchBox from './components/SearchBox';
import '@fontsource/mulish/300.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/500.css';
import '@fontsource/mulish/700.css';


function App() {
  return (
    <Box>
      <CssBaseline />
      <AppBar />
      <SearchBox />
    </Box>
  );
}

export default App;
