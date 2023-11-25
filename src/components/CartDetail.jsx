import React , {useContext ,useState} from 'react'
import { useEffect } from 'react';
import Button from './Button';
import CartContext from './CartContext';
import comicContext from './Comics-context';
import OrderContext from './OrderContext';
import axios from 'axios'


const CartDetail = () => {
  const ctx = useContext(CartContext);
  const ctx2 = useContext(comicContext);
  const ctx3 =useContext(OrderContext)


  const [total, setTotal] = useState(0)
   
useEffect(()=>{
    
  const sum = ctx.cart.reduce( (s, current) => {
      console.log('s=' + s + 'current= ' + current.price , current.quantity )
      return s + (current.price * current.quantity);
  }, 0);
  setTotal(sum)

  console.log('hello')
},[total])

  useEffect(()=>{
    console.log(ctx.cart)
  },[]);

  // const [comic, setComic] = useState({
  //   id: '',
  //   quantity: 0,
  //   price: 0,
  //   picture: '',
  // });
  // console.log(ctx3.order[0].id);
  // COMIC = {
    //   id : ctx3.order[0].id,
    //   }
    const order = async(e)=>{
      // e.preventDefault()
      console.log("this is order now");
      
  // const { id, quantity, price, picture } = ctx3.order[0].id;
  const quantity = ctx3.order[0].quantity;
  const id =ctx3.order[0].id;
  const price = ctx3.order[0].price ;
  const picture = " done ";

 
  console.log(ctx3.order[0].id);

  const response = await axios.post('/api/comics', {
    id,
    quantity,
    price,
    picture,
  });
  
  // setComic({ ...comic, COMIC });
// console.log(setComic);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('/api/comics', comic);
  //     console.log('Comic added:', response.data);
  //   } catch (error) {
  //     console.error('Error adding comic:', error);
  //   }
  // };

 }
  return (
    <div>
     {ctx.cart.map((e)=><div><h3>quantity : {e.quantity}</h3>
     <h3>price : {e.price}</h3>
     <h3>id : {e.id}</h3>
     <h3>title : {e.title}</h3>
     </div>)
     }

     <h2>total : {total}</h2>
     <Button value='Order now' onClick={()=>ctx3.orderNow() & order() }/>
    </div>
  )
}

export default CartDetail
