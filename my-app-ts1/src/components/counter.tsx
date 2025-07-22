import { use, useContext, useState } from "react";
import { ThemeContext } from "../App";
import CounterContext from "../context/counter_context";

export default function Counter(){
    const themeContext=useContext(ThemeContext);
    const counterContext=useContext(CounterContext);
    if (themeContext==null){
        return null;
    }
    const {setMode}=themeContext;

    
    if (counterContext==null){
        return null;
    }
    const {setValue}=counterContext;
    return <div>
        <button onClick={(e)=>{
            e.preventDefault();
            setValue((prev)=>prev+1);
        }}>increment</button>
        <button onClick={(e)=>{
            e.preventDefault();
            setValue((prev)=>prev-1);
        }}>decrement</button>
        <input type="checkbox" onChange={(e)=>{
            setMode((prev)=>prev==='light'?'dark':'light');
        }} />  Toogle Mode
    </div>;
}