import React from 'react'

function Home() {
  const [theme, setTheme] = React.useState('light')

  function handleOnClick(e) {
      e.preventDefault()
      setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>Welcome to Theme Switch using React Context API</h1>
      <button onClick={handleOnClick}>Click to switch theme</button>
    </div>
  )
}

export default Home;