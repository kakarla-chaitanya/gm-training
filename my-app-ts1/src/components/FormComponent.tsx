import { useState } from "react";

export default function FormComponent(){
    const [formData,setFormData]=useState({
        name:"",
        password:"",
    });

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }));
    }
   
    return <div>
        <input name="name" placeholder="name" value={formData.name} onChange={handleChange}/>
        <input  name="password" placeholder="password" value={formData.password} onChange={handleChange}/>
        <p>{formData.name}</p>
        <p>{formData.password}</p>
    </div>;
}