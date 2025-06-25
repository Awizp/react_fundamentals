import { useState } from 'react'
import { testimonials } from './db.js'

const App = () => {

  const [arrIndex, setArrIndex] = useState(0)

  const handlePrevBtn = () => {
    setArrIndex((arrIndex + testimonials.length - 1) % testimonials.length)
    // It is used to show the current array index value in the document
  }

  const handleNextBtn = () => {
    setArrIndex((arrIndex + 1) % testimonials.length)
  }

  return (
    <div className='testimonials'>
      <div className='testimonials-quote'>
        {testimonials[arrIndex].quote}
      </div>

      <div className='testimonials-author'>
        {testimonials[arrIndex].author}
      </div>

      <div className='testimonials-nav'>
        <button onClick={handlePrevBtn}>Prev</button>
        <button onClick={handleNextBtn}>Next</button>
      </div>
    </div>
  )
}

export default App