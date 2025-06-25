import { useState } from 'react'

const Accordian = ({ title, content, idx }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className='container' onClick={() => setIsActive(!isActive)}>
            <div className='accordian-data' key={idx}>
                <div className='header' onClick={() => setIsActive(!isActive)}>
                    <p className='accordian-title'>{title}</p>
                    <p className='icon'>{isActive ? "-" : "+"}</p>
                </div>

                <div className='content'>
                    {isActive && <p className='card-info'>{content}</p>}
                </div>
            </div>
        </div>
    )
}

export default Accordian