import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('yellow');
  const value = {
    theme,
    setTheme
  };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}

export {
  ThemeProvider,
  useThemeContext
} ;
