import React from 'react'
import About from './About'

const Events = () => {

    const clickFunc = () => {
        console.log("clicked")
    }

    return (
        <div className='body'>
            <button onClick={() => clickFunc()}>Click Me</button>
        </div>
    )
}

export default Events