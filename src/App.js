import React from 'react';

import { ThemeProvider } from './provider/ThemeProvider';
import TestComponent from './TestComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>Sibling React Provider Test</header>
      <div className="test-component-1">
        <ThemeProvider>
          <TestComponent name={'Test component 1'}/>
        </ThemeProvider>
      </div>
      <div className="test-component-2">
        <ThemeProvider>
        <TestComponent name={'Test component 2'}/>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
