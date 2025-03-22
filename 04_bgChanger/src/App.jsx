import {useState} from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')

  const changeColor = (color) => {
    setColor(color);
  }
  return (
    <>
    {/* we cannot use changeColor('red') directly in onClick={} because it will imeediately execute it and also onClick requires a function not a return value so we use callback */}
     <div className="w-full min-h-screen duration-200 bg-black" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl">
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-black' onClick={()=>changeColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-black' onClick={()=>changeColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-black' onClick={()=>changeColor('green')}>Green</button>
          {/** we can directly use setColor('red') instead of creating a function */}
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-black' onClick={()=>setColor('yellow')}>Yellow</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default App
