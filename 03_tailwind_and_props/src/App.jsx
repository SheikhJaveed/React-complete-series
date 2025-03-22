
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind CSS</h1>
      <Card  username='guest' role='SDE' />
      <Card/>
      <Card username='admin'/>
    </>
  )
}

export default App
