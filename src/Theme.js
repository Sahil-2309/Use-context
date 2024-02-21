// Theme.js
import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const styles = {
    app: {
      transition: 'background-color 0.5s, color 0.5s',
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      minHeight: '100vh',
      padding: '20px',
    },
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={styles.app}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeContext
