import React from 'react'

const MapMethod = () => {

    const users = ["Jin", "Venom", "Wolverine"]

    return (
        <div>
            <ul>
                {users.map((user) => (<li>{user}</li>))}
            </ul>
        </div>
    )
}

export default MapMethod