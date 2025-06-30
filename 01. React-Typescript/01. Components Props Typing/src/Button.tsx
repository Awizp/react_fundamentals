type buttonTypeHandle={label: string; onClick: ()=>void; disabled: boolean;}
// import { FC } from "react";

const Button = ({label, onClick, disabled}:buttonTypeHandle) => {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  )
}

// const Button: FC<buttonTypeHandle>=({label,onClick,disabled})=>{
//     return(
//         <div>
//             <button onClick={onClick} disabled={disabled}>{label}</button>
//         </div>
//     )
// }
// This is the old way to use Functional component with annotation by TS

export default Button