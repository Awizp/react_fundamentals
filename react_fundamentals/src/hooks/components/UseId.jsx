import { useId } from 'react'

const UseId = () => {

    // It is simple used to create unique ids in react
    const id = useId()

    return (
        <div>
            <label htmlFor={`${id}-email`}>Email :</label>
            <input id={`${id}-email`} type='email' />

            <br />

            <label htmlFor={`${id}-password`}>Password :</label>
            <input id={`${id}-password`} type='password' />

            {/* Here this useId create only the id unique per the component if we use in anohter one it will create another unique id for that component 
            so if we want to create exact unique id mmeans you need to enter the specific word for the component */}
        </div>
    )
}

export default UseId