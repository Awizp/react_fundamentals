import { useReducer } from 'react'

const UseReducer = () => {

    const initialState = { count: 0 }

    const reducerFunc = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1 }
            case "DECREMENT":
                return { ...state, count: state.count <= 0 ? 0 : state.count - 1 }
            case "UPDATE":
                return { ...state, count: action.payload.value }
            // I gave action.payload value bcoz i gave my value as payload object in input value, it's followed by many devs
            case "NEUTRAL":
                return { count: 0 }
            default:
                return <h1>No such cases found</h1>
        }
    }

    const [state, dispatch] = useReducer(reducerFunc, initialState)

    return (
        <div>
            <h1>{state.count}</h1>
            <input type={"number"} value={state.count} onChange={(e) => dispatch({ type: "UPDATE", payload: { value: e.target.value == "NaN" ? 0 : parseInt(e.target.value) } })} />
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "NEUTRAL" })}>Reset</button>
            {/* Dispatch function has two attributes which is type of the action and other one is we giving payload values */}
        </div>
    )
}

export default UseReducer