import {createContext,useContext } from 'react'

//1. creating the context
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Learn React",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
}); //createContext({}) takes an initial value as an object
//these all are functions that will be implemented in the context provider 

//2. Using the context
export const useTodo = () =>{
    return useContext(TodoContext)
}

//3.Context provider
export const TodoProvider = TodoContext.Provider