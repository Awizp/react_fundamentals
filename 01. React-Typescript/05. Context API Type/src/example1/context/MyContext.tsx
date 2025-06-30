import { createContext, type ReactNode,type FC, useState } from "react";

type MyContextType={
    count: number;
    increment: ()=>void;
    decrement: ()=>void;
}

const MyContext = createContext<MyContextType | undefined>(undefined)

type MyContextProviderType={
    children: ReactNode;
}

export const MyContextProvider: FC<MyContextProviderType>=({children})=>{
    const[count, setCount]=useState<number>(0)

    const contextValue : MyContextType={
        count: count,
        increment: ()=>setCount(count +1),
        decrement: ()=>setCount(count-1),
    }

    return(
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    )
}

export default MyContext