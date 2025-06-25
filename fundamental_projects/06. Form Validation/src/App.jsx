import { useReducer } from "react"
import { initialState, reducerFunc } from "./utils/reducerState"

const App = () => {

  const [state, dispatch] = useReducer(reducerFunc, initialState)

  const validate = (e) => {
    e.preventDefault()

    if (state.userName.length > 8) {
      dispatch({ type: "UPDATE_ERRORUSERNAME", payload: { value: "" } })
      dispatch({ type: "UPDATE_COLORUSERNAME", payload: { value: "green" } })
    } else {
      dispatch({ type: "UPDATE_ERRORUSERNAME", payload: { value: "Username must be 8 letters long." } })
      dispatch({ type: "UPDATE_COLORUSERNAME", payload: { value: "red" } })
    }

    if (state.email.includes("@gmail")) {
      dispatch({ type: "UPDATE_ERROREMAIL", payload: { value: "" } })
      dispatch({ type: "UPDATE_COLOREMAIL", payload: { value: "green" } })
    } else {
      dispatch({ type: "UPDATE_ERROREMAIL", payload: { value: "Email should have @gmail.com" } })
      dispatch({ type: "UPDATE_COLOREMAIL", payload: { value: "red" } })
    }

    if (state.password.length > 8) {
      dispatch({ type: "UPDATE_ERRORPASSWORD", payload: { value: "" } })
      dispatch({ type: "UPDATE_COLORPASSWORD", payload: { value: "green" } })
    } else {
      dispatch({ type: "UPDATE_ERRORPASSWORD", payload: { value: "Password should be 8 letters long." } })
      dispatch({ type: "UPDATE_COLORPASSWORD", payload: { value: "red" } })
    }

    if (state.password != "" && state.password == state.confirmPassword) {
      dispatch({ type: "UPDATE_ERRORCONFIRMPASSWORD", payload: { value: "" } })
      dispatch({ type: "UPDATE_COLORCONFIRMPASSWORD", payload: { value: "green" } })
    } else {
      dispatch({ type: "UPDATE_ERRORCONFIRMPASSWORD", payload: { value: "Passwords didn't match." } })
      dispatch({ type: "UPDATE_COLORCONFIRMPASSWORD", payload: { value: "red" } })
    }
  }

  console.log(state.userName, state.email, state.password, state.confirmPassword)

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: state.userColor }}
            value={state.userName}
            onChange={(e) => dispatch({ type: "UPDATE_USERNAME", payload: { value: e.target.value } })}
          />

          <p className="error">{state.errUserName}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: state.emailColor }}
            value={state.email}
            onChange={(e) => dispatch({ type: "UPDATE_EMAIL", payload: { value: e.target.value } })}
          />
          <p className="error">{state.errEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: state.passwordColor }}
            value={state.password}
            onChange={(e) => dispatch({ type: "UPDATE_PASSWORD", payload: { value: e.target.value } })}
          />
          <p className="error">{state.errPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderColor: state.confirmPasswordColor }}
            value={state.confirmPassword}
            onChange={(e) => dispatch({ type: "UPDATE_CONFIRMPASSWORD", payload: { value: e.target.value } })}
          />
          <p className="error">{state.errConfirmPassword}</p>

          <button className="submit-btn" onClick={(e) => validate(e)}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default App