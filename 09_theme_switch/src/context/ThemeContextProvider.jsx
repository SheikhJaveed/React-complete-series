import React from 'react'
import ThemeContext from './ThemeContext'

function ThemeContextProvider({children}) {
    const [theme,setTheme] = React.useState('light')
  return (
  <ThemeContextProvider value={{theme,setTheme}}>
    {children}
  </ThemeContextProvider>
  )
}
 
export default ThemeContextProvider
