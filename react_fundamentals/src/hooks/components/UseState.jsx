import React, { useState } from 'react'

const UseState = () => {

    // const [count, setCount] = useState(0)

    // return (
    //     <div>
    //         <p>{count < 0 ? setCount(0) : count}</p>
    //         <button onClick={() => setCount(count + 1)}>Inc +</button>
    //         <button onClick={() => setCount(count - 1)}>Dec -</button>
    //     </div>
    // )

    // const [team7, setTeam7] = useState(['Naruto', 'Sasuke'])

    // const AddFriend = () => {
    //     setTeam7([...team7, "Sakura"])
    // }

    // return (
    //     <>
    //         <button onClick={AddFriend}>Add One friend</button>
    //         <ul>
    //             {team7.map((member) => (
    //                 <li>{member}</li>
    //             ))}
    //         </ul>
    //     </>
    // )

    // const [movies, setmovies] = useState([
    //     { id: 1, name: "Jhon Wick", ratings: 5 },
    //     { id: 2, name: "Mission Impossible", ratings: 4.5 },
    //     { id: 3, name: "Ben 10", ratings: 10 }
    // ])

    // const changeMovieName = () => {
    //     setmovies((prev) => (
    //         [
    //             ...prev,
    //             { id: 3, name: "Equalizer", ratings: 5 }
    //         ]
    //     ))
    // }

    // return (
    //     <>
    //         <button onClick={changeMovieName}>Add Movie</button>
    //         <h3>
    //             <ul>
    //                 {movies.map((movie) => (
    //                     <li key={Math.random()}>{movie.name}</li>
    //                 ))}
    //             </ul>
    //         </h3>
    //     </>
    // )

    // const [number, setNumber] = useState(() => {
    //     const initialValue = 10
    //     return initialValue
    // })

    // return (
    //     <>
    //         <h2>{number}</h2>
    //         <button onClick={() => setNumber(prev => prev + 1)}>Add value</button>
    //     </>
    // )

    //Todo mini app
    const [inputVal, setInputVal] = useState("")

    const [todos, setTodos] = useState([])

    const todoHandleFunc = () => {

        if (inputVal.trim() == "") return

        setTodos((prev) => (
            [
                ...prev,
                {
                    id: Date.now(),
                    name: inputVal
                }
            ]
        ))

        setInputVal("")
    }

    return (
        <>
            <div className="input-container">
                <label htmlFor='field' >Enter the Item :</label>
                <input className='input-value' name='field' onChange={(e) => setInputVal(e.target.value)} value={inputVal} />
                <button onClick={todoHandleFunc}>Add Todo</button>
            </div>

            <div className='todo-container'>
                <ul>
                    {todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
                </ul>
            </div>
        </>
    )
}

export default UseState