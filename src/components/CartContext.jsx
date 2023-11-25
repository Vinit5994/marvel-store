import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import Cart from "../model/cart";
import comicContext from "./Comics-context";

const CartContext = createContext({
    cart: [],
    total: 0,
    // addToCart: (product) => { },
    // removeFromCart: (product) => { },
    // deleteCart: () => { },
});

const CartContextProvider = (p) => {
    const ctx = useContext(comicContext)
    const [cart, setCart] = useState([]);
    

    const addToCart = (id) => {
console.log(cart)
        const item = ctx.result.filter(e => e.id == id);
        console.log(item)
        if (cart.length == 0) {
            setCart([new Cart(1, id, item[0].prices[0].price,item[0].title,item[0].images[0].path +'/portrait_medium.jpg')])

        } else if(cart.length > 0) {
                const isExist = cart.filter(e => e.id == id)
                if (isExist.length > 0) {
                    let dcart = cart;
                    var productIndex = cart.findIndex(object => {
                        return object.id === id;
                    })
                    dcart[productIndex].incrementquantity();
                    console.log(dcart)
                    setCart(dcart)
                    
                } else {
                    setCart((e)=>[...e, new Cart(1, id, item[0].prices[0].price,item[0].title,item[0].images[0].path +'/portrait_medium.jpg')])
                }

            }
          
    

    }
    const RemoveCart=()=>{
        setCart([]);
    }
    return (
        <CartContext.Provider
            value={{
                cart: cart,
                addToCart: addToCart,
                RemoveCart,
                // total
            }}
        >
            {p.children}
        </CartContext.Provider>
    );
}

export default CartContext;
export { CartContextProvider };