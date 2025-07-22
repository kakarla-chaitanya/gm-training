import exp from "constants";
import { createContext, ReactNode, useState } from "react";

type CounterContextprops={
    value:number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}
const CounterContext=createContext<CounterContextprops|null>(null);

export default CounterContext;

function CounterContextProvider({children}:{children:ReactNode}){
    const [value,setValue]=useState<number>(0);
    return (<CounterContext value={{
        value:value,
        setValue:setValue,
    }}>
        {children}
    </CounterContext>);
}

export {CounterContextProvider};