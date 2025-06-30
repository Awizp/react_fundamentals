import { useContext } from "react"
import MyContext from "./context/MyContext"
import './App.css'

const App = () => {

  const contextValue=useContext(MyContext)

  if(!contextValue){
    console.log("MyContextProvider should be import at main.jsx")
  }

  return (
    <div>
      <h2>Count : {contextValue?.count}</h2>
      <button onClick={contextValue?.increment}>Increment</button>
      <button onClick={contextValue?.decrement}>Decrement</button>
    </div>
  )
}

export default App