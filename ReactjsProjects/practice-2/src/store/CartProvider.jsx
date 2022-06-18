import React from "react";
import CartContext from "./cart-context";

const CartProvider=()=>{
    return(
        <CartProvider.Provider value={"test"}>
            <CartContext/>
        </CartProvider.Provider>
    );
}

export default CartProvider;