import React, { useContext } from "react";
import { ThemeContext } from "../App";
import CounterContext from "../context/counter_context";

interface GreetingProps{
    name:string;
    age?:number;
}

export default function Greeting({name,age}:GreetingProps){
    const counterContext=useContext(CounterContext);
    
    return <div>
        Hello {name}, You are {age} old
        <br></br>
        Counter Vlaue : {counterContext!=null && counterContext.value}
    </div>;
}

const X=(props:GreetingProps)=>{
    return <div>
        Hello {props.name}, You are {props.age} old
    </div>;
}
export {X};