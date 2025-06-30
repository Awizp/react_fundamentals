import { useContext } from 'react'
import './App.css'
import MyContext from './context/MyContext'

const App = () => {

    const contextValue = useContext(MyContext)

  return (
    <div>
        <input type="text" placeholder='Enter your name' 
        onChange={(e)=>contextValue?.setValue(e.target.value)} 
        value={contextValue?.value}
        />

        <p>Name : {contextValue?.value}</p>
    </div>
  )
}

export default App