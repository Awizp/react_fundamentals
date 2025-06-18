import { useEffect, useState } from 'react'

const UseEffect = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos')
            let data = await response.json()
            setTodos(data)
        }

        getData()
    }, []) //only render DOM component once when window loads or mount all the components for the first time

    return (
        <div>
            {todos.length > 0 ? (
                <ul>
                    {todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))}
                </ul>
            ) : <p>Loading...</p>}
        </div>
    )
}

export default UseEffect