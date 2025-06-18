import React from 'react'

const PropsHandling = ({ names }) => {
    return (

        // NewIndex value going to be like this 
        // return <PropsHandling names={names} />

        // I simplify "props.names" into array destructuring so we can use names only inour component
        <div>
            <ul>
                {names.map((name) => (
                    <li>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PropsHandling