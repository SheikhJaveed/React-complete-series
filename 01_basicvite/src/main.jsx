import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//this react element will not work because react does not understand the words like type, props and children
const ReactElement = {
  type: 'a',
  props : {
      href: 'https://www.google.com',
      target: '_blank'
  },
  children: 'Click here to visit google'
  //props and children can be named anything
}

function MyApp() {
  return(
      <div>
        <h1>My Custom React app</h1>
      </div>
  )
}

//this react element will work if we use it as a variable directly in the render function
/**
    createRoot(document.getElementById('root')).render(
      AnotherElement
    )
 */
const AnotherElement = (
  <a href="https://www.google.com" target="_blank">Click here to visit google</a>
);


//this is exaclty how the react element is rendered in the browser so we can use it directly in the render function
/**
      createRoot(document.getElementById('root')).render(
          aReactElement
      )
 */

const aReactElement = React.createElement(
    'a',
    {
      href: 'https://www.google.com',
      target: '_blank'
    },
    'Click here to visit google'
)
createRoot(document.getElementById('root')).render(
    aReactElement
)
