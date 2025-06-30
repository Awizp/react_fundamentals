import { createContext,type ReactNode,type FC, useState } from "react";

type ContextValueType = {
    value: string;
    setValue:(newValue: string)=>void;
}

const MyContext = createContext<ContextValueType | undefined>(undefined)

type MyContextProviderType={
    children: ReactNode;
}

export const MyContextProvider: FC<MyContextProviderType> =({children})=>{

    const [value,setValue] = useState<string>("")

    const contextValue: ContextValueType={
        value,
        setValue, 
    }

    return(
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    )
}

export default MyContext