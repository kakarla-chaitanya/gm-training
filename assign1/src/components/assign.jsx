import { useState } from "react";
import Card from "./card";

export default function Assign(){
    const [selected,setSelected]=useState({
        name:"none",
        url:"",
    });
    return (
    <div className="assign-flex">
      <div><Card name={selected.name} url={selected.url}/></div>
      <div className="assign-buttons">
        <button onClick={(e)=>{
            e.preventDefault();
            setSelected({
                name:"Male",
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdiBJUETd2hckKrpYTTa89ffeu0aA-BY1ig&s"
            });
        }} className="assign-button-male">Male</button>
        <button onClick={(e)=>{
            e.preventDefault();
            setSelected({
                name:"Female",
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsF5r8DBCWN2fqVL15PX0k0CAuM07tM15Qw&s"
            });
        }} className="assign-button-female">Female</button>
      </div>
    </div>
    );
}