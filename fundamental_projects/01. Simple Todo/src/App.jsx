import './App.css'
import { useState } from 'react'

const App = () => {

  const [todos, setTodos] = useState([])

  const [inputVal, setInputVal] = useState('')

  const updateTodoHandle = () => {

    if (inputVal.trim() === "") return

    setTodos(todo => (
      // todo.concat({
      //   todoVal: inputVal,
      //   id: Date.now()
      // })
      // You can use above code to concate your new object into an array 
      [...todo, {
        todoVal: inputVal,
        id: Date.now()
      }]

    ))

    setInputVal('')
  }

  const removeTodoHandle = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className='container'>
        <input type="text" placeholder='Enter your todo' value={inputVal} onChange={e => setInputVal(e.target.value)} />
        <button onClick={updateTodoHandle}>Submit</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo'>{todo.todoVal}
            <button className='close' onClick={() => removeTodoHandle(todo.id)}>X</button>
          </li>))}
      </ul>
    </>
  )
}

export default App