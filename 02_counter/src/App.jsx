import {useState} from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);
  //let counter = 15;
  
  // this will
  // const addValue = () => {
  //   counter++;
  //   console.log("Counter: ", counter);
  // }

  /** React way */
  const addValue = () => {
    /** Interview question */

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    //the counter will still be updated only once -> because react considers all the setCounter as one operation

    // use callback function to update the counter in muliples of 4 
    setCounter((prevCounter) => prevCounter + 1);    
    setCounter((prevCounter) => prevCounter + 1);    
    setCounter((prevCounter) => prevCounter + 1);    
    setCounter((prevCounter) => prevCounter + 1);    

  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
       <h1>React course</h1>
       <h2>Counter: {counter}</h2>
       <button onClick={addValue}>Add value</button> {" "} {/*{" "} is used to add space between the button and the text*/}
       <button onClick={decreaseValue}>Remove value</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
