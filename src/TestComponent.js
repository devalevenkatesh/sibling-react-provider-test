import React from 'react';
import { useThemeContext} from './provider/ThemeProvider';

import './App.css';

function TestComponent(props) {
  const { name } = props;
  const { theme, setTheme } = useThemeContext();
  const div1Class = theme === 'yellow' ? 'yellow' : 'red';
  return (
    <div className="TestComponent">
      <div className={div1Class}>This is {name} with current color set to {theme}</div>
      <button onClick={() => setTheme('yellow')}>set yellow color for {name}</button>
      <button onClick={() => setTheme('red')}>set red color theme for {name}</button>
    </div>
  );
}

export default TestComponent;
