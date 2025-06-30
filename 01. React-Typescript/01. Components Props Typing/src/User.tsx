// const User = (props:{name:string; age:number;isNinja: boolean}) => {
//   return (
//     <div>
//         <p>{props.name}</p>
//         <p>{props.age}</p>
//         <p>{props.isNinja}</p>
//     </div>
//   )
// }

import { type ReactNode } from "react"

// Or like this,

// type userType={name: string; age: number; isNinja: boolean}

// const User=({name,age,isNinja}: userType)=>{
//     // Here I destructured the props value so i won't use props.value anymore
//     return(
//         <div>
//          {isNinja && (
//             <>
//                 <p>{name}</p>
//                 <p>{age}</p>
//             </>
//          )}
//      </div>
//     )
// }

// If we want to use children in react js use like this,
interface userType{
    children: ReactNode
}

const User=({children}: userType)=>{
    return(
        <div>
            <div>{children}</div>
            {/* Here children could be any type so, we give ReactNode type value to this to annotate as any type of value in react */}
        </div>
    )
}

export default User