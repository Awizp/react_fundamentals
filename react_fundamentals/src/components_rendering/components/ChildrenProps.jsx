import React from 'react'

const ChildrenProps = (props) => {
    return (
        // NewIndex value be like,
        //     return (
        //     <>
        //         <ChildrenProps>
        //             <h3>I am going to give values to children in this component</h3>
        //             <ul>
        //                 {names.map((name) => (<li>{name}</li>))}
        //             </ul>
        //         </ChildrenProps>
        //     </>
        // )

        <div>{props.children}</div>
    )
}

export default ChildrenProps