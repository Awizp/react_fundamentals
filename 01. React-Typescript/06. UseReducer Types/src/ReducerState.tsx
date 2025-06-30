type InitialStateType={
    count: number;
}

const initialState: InitialStateType ={
    count: 0,
}

type StateType ={ count : number; }
type ActionType = {type: "INCREMENT"} | {type: "DECREMENT"}

const reducerHandle=(state: StateType, action: ActionType)=>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        default:
            return state
    }
}

export {reducerHandle, initialState}