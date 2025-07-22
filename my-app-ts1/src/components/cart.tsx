import { useContext, useRef } from "react";
import CartContext from "../context/cart_context";

export default function Cart(){
    const cartContext=useContext(CartContext);
    const nameRef=useRef<HTMLInputElement|null>(null);
    const quantityRef=useRef<HTMLInputElement|null>(null);
    if (cartContext==null){
        return null;
    }

    return <div>
        <div>
            <input  ref={nameRef} type='text' placeholder="Name" />
            <input ref={quantityRef} type="number" placeholder="Quantity"/>
            <button onClick={(e)=>{
                e.preventDefault();
                if (nameRef.current!==null && quantityRef.current!==null){
                    const x=nameRef.current.value;
                    const quantity=Number(quantityRef.current.value);
                    cartContext.setCart((prev)=>([
                        ...prev,
                        {
                            name:x,
                            quantity
                        }
                    ]));
                    nameRef.current.value="";
                    quantityRef.current.value="";
                }
                
            }}>ADD</button>
        </div>
        {cartContext.cart.map((x,i)=><div key={i} style={{display:"flex",gap:"20px"}}>
            <div>{x.name}</div>
            <div>{x.quantity}</div>
            <button onClick={(e)=>{
                e.preventDefault();
                cartContext.setCart((prev)=>prev.filter((_,cur)=>cur!==i));
            }}> DELETE</button>
        </div>)}
    </div>;
}