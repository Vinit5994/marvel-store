import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import CartContext from './CartContext';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const OrderContext = createContext({
order:[],
orderNow:()=>{}
});

const OrderContextProvider =(p)=>{
    const [order,setOrder] = useState([])
    const [total,setTotal]=useState(0)
  const navigate = useNavigate();
    const ctx = useContext(CartContext)

    const orderNow=()=>{
        // const sum = ctx.cart.reduce( (s, current) => {
        //     console.log('s=' + s + 'current= ' + current.price , current.quantity )
        //     return s + (current.price * current.quantity);
        // }, 0);
        // setTotal(sum);

        setOrder(ctx.cart)
        ctx.RemoveCart();
        console.log(ctx.cart)
       navigate('/order')
      }
    return(
<OrderContext.Provider
value={{
    order:order,
     orderNow:orderNow
    }}>
    {p.children}
</OrderContext.Provider>
    );
}

export default OrderContext
export {OrderContextProvider}
