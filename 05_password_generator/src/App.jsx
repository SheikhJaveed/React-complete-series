import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null) //useRef is used to get the reference of the element

  // useCallback is used to memoize the function so that it is not created again and again on re-render
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    /**
     How it Works?
      Math.random() generates a decimal between 0 and 1 (exclusive).
      Math.random() * str.length scales this to 0 to (str.length - 1).
      Math.floor() rounds down to the nearest integer.
      The output is always between 0 and str.length - 1 (valid indices).

      For str = "ABCDE" (str.length = 5):

      Math.random() |	Math.random()*5 |	Math.floor() (Output)
       0.85	            4.25	                  4
     */
    for(let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length ) // random number between 1 and str.length
      pass += str.charAt(char) // get the character at that index
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed]) // dependencies

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password) //write the password to clipboard
    passwordRef.current?.select()
    
  }
  //React hooks -> React Hooks are functions that enable functional components to use React state and lifecycle features. They eliminate the need for class components, making code cleaner and easier to maintain.

  //most used react hook -> useEffect connects a component to an external system.
  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef} 
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
           />
           <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App