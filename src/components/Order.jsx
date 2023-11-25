import React from 'react'
import { useContext } from 'react'
import OrderContext from './OrderContext'
import OrderItem from './OrderItem'

const Order = () => {
    const ctx= useContext(OrderContext)
  return (
    <div>
      {/* <h1>{ctx.order.length}</h1> */}
      <div className="all_orders">
     
      <div className="titles">
        <span>Image</span>
        <span>Items</span>
        <span>Total</span>
        <span>Status</span>
      </div>
     
      {ctx.order.map((e) => {
        return <OrderItem key={e.orderId} {...e} />;
      })}
    </div>
      
    </div>
  )
}

export default Order
