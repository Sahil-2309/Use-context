import React, { useContext } from 'react'
import ThemeContext from './Theme'
const Change = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  )
}

export default Change
