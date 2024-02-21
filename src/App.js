import React, { useContext } from 'react'
import { ThemeProvider } from './Theme'
import Change from './Change'
import SearchBar from './SearchBar'
import ThemeContext from './Theme'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <ThemeProvider>
        <div>
          <h1>My App</h1>
          <h2>The app theme is: {theme === 'light' ? 'Light' : 'Dark'}</h2>
          <Change />
          <SearchBar />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
