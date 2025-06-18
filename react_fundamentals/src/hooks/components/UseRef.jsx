import { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    // const inputElement = useRef(null)

    // const handleInputValue = () => {
    //     inputElement.current.focus()
    //     inputElement.current.value = "Vishnu"
    //     // useRef is a simple hook which can be assigned to any dom elements like input and we can manipulate the values of it
    // }

    // return (
    //     <div>
    //         <input type="text" placeholder='Enter your name' ref={inputElement} />
    //         <button onClick={handleInputValue}>Change Name</button>
    //     </div>
    // )

    const timerVal = useRef(null)

    const [second, setSecond] = useState(0)

    const startTimerHandle = () => {
        timerVal.current = setInterval(() => {
            setSecond(prevTime => prevTime + 1)
        }, 1000)
    }

    useEffect(() => {
        startTimerHandle()

        return () => {
            clearInterval(timerVal.current)
        }
    }, [second])

    return (
        <>
            <h1 ref={timerVal}>{second}</h1>
            <button onClick={() => startTimerHandle()}>Start time</button>
            {/* It has multiple clickable action bug if we click button more than one time the timer will accelerate we deal with it later */}
            <button onClick={() => clearInterval(timerVal.current)}>Stop time</button>
        </>
    )
}

export default UseRef