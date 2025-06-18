import { createPortal } from 'react-dom'

//If i want to render my component other than in [index.html] #root div means i can use this method to run other specified div
//I created #hello-world id div in index.html

const Portal = () => {

    const handleStyle = {
        position: "absolute",
        bottom: "3rem"
    }

    return createPortal(
        <div style={handleStyle}>
            <p>Hello world</p>
        </div>,
        document.querySelector("#hello-world")
    )
}

export default Portal