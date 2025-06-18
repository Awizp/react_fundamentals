import { createContext, useContext, useState } from "react"

const Data = createContext()

const UseContext = () => {

    const [nameVal, setNameVal] = useState("Renga")

    return (
        <div>
            <Data.Provider value={{ nameVal, setNameVal }}>
                <CommponentA />
            </Data.Provider>
        </div>
        // Provider attribute provide the value of the data to the parent component so we can recieve data from parent
    )
}

export default UseContext

const CommponentA = () => {
    return (<ComponentB />)
}

const ComponentB = () => {
    return (<ComponentC />)
}

const ComponentC = () => {

    const userDetails = useContext(Data)
    const { nameVal, setNameVal } = userDetails
    // We are getting Data value from ComponentA and get that value with useContext method

    return (
        // <Data.Consumer>
        //     {obj => { return <h1>Hello! Welcome {obj.nameVal}</h1> }}
        //     {/* we can use callback funtion to get nameVal otherwise use useContext method */}
        // </Data.Consumer>
        // Consumer attrubute used to consume the value of the data from the parent of ComponentA

        <>
            <input placeholder="Enter your name" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />

            <h1>Hello! Welcome {nameVal}</h1>
        </>
    )
}

export { CommponentA, ComponentB, ComponentC }