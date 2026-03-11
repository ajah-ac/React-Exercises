import { useReducer, useState } from 'react'

import './App.css'

  function reducer(state,action){
    switch(action.type){
      case 'Increment':
        return {count:state.count +1}
         case 'Decrement':
        return {count:state.count -1}
        default:
          return state;
    }}
function App() {
const [state,dispatch]=useReducer(reducer,{count:0})
function increment(){
  dispatch({type:'Increment'})
}function decrement(){
  dispatch({type:'Decrement'})
}
  return (
    <>

    <button onClick={increment}>+</button>
    <span>{state.count}</span>
        <button onClick={decrement}>-</button>

    </>
  )
}

export default App
