import { useReducer } from 'react'
import './App.css'
import { initialState, reducerHandle } from './ReducerState'

const App = () => {

  const [state, dispatch]=useReducer(reducerHandle, initialState)

  return (
    <div>
      <h2>Count : {state?.count}</h2>
      <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default App