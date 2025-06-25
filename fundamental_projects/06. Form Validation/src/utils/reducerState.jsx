const initialState = {
    id: Date.now(),
    userName: "",
    userColor: "",
    errUserName: "",
    email: "",
    emailColor: "",
    errEmail: "",
    password: "",
    passwordColor: "",
    errPassword: "",
    confirmPassword: "",
    confirmPasswordColor: "",
    errConfirmPassword: "",
}

const reducerFunc = (state, action) => {
    // Use State first always don't forget
    switch (action.type) {
        case "UPDATE_USERNAME":
            return { ...state, userName: action.payload.value }
        case "UPDATE_COLORUSERNAME":
            return { ...state, userColor: action.payload.value }
        case "UPDATE_ERRORUSERNAME":
            return { ...state, errUserName: action.payload.value }
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload.value }
        case "UPDATE_COLOREMAIL":
            return { ...state, emailColor: action.payload.value }
        case "UPDATE_ERROREMAIL":
            return { ...state, errEmail: action.payload.value }
        case "UPDATE_PASSWORD":
            return { ...state, password: action.payload.value }
        case "UPDATE_COLORPASSWORD":
            return { ...state, passwordColor: action.payload.value }
        case "UPDATE_ERRORPASSWORD":
            return { ...state, errPassword: action.payload.value }
        case "UPDATE_CONFIRMPASSWORD":
            return { ...state, confirmPassword: action.payload.value }
        case "UPDATE_COLORCONFIRMPASSWORD":
            return { ...state, confirmPasswordColor: action.payload.value }
        case "UPDATE_ERRORCONFIRMPASSWORD":
            return { ...state, errConfirmPassword: action.payload.value }
        default:
            return <p>No Mentioned case found</p>
    }
}

export { initialState, reducerFunc }