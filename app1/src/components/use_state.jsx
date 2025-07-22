import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UseState() {
    
      const [arr,setArr]=useState([]);
      const [count,setCount]=useState(0);
      const [current,setCurrent]=useState("");
      const navigate=useNavigate();
    return <div>
        <input onChange={(x) => {
            x.preventDefault();
            console.log(x.target);
            setCurrent(x.target.value);
        }} value={current} />
        <button onClick={(e) => {
            e.preventDefault();
            setArr((prev) => [...prev, current]);
            setCurrent("");
        }}>add</button>
        <div>Changed Text : {current}</div>
        {arr.toString()}

        <div>Count:{count}</div>
        <div style={{ display: "flex" }}>
            <button onClick={(e) => {
                e.preventDefault();
                navigate(`/profile_view/${count}`);
                setCount((prev) => prev + 1);
            }}>Increment & go to Profile view</button>
            <button onClick={(e) => {
                e.preventDefault();
                setCount((prev => {
                    if (prev === 0) {
                        return prev;
                    }
                    return prev - 1;
                }));
            }}>Decrement</button>
            <button onClick={(e) => {
                e.preventDefault();
                navigate(`/profile/${count}`);
                setCount(0);
            }}>Reset &go to Profile</button>
        </div>
    </div>;
}