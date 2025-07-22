import { createContext, ReactNode, useState } from "react";

type CartContextProps={
    cart:CartObject[],
    setCart: React.Dispatch<React.SetStateAction<CartObject[]>>,
}

type CartObject={
    name:string,
    quantity:number,
}
const CartContext=createContext<CartContextProps|null>(null);
export default CartContext;

function CartContextProvider({children}:{children:ReactNode}){
    const [cart,setCart]=useState<CartObject[]>([]);
    return <CartContext value={{
        cart:cart,
        setCart:setCart,
    }}>
        {children}
    </CartContext>
}

export {CartContextProvider};