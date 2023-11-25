import React from 'react'
import { useContext } from 'react';
import { useNavigate} from "react-router-dom";
import Anchor from './Anchor'
import Button from './Button'
import Card from './Card'
import CartContext from './CartContext';
import './css/Navbar.css'


const Navbar = () => {
  const ctx=useContext(CartContext);
  // const length =;
  const navigate = useNavigate();
  return (
    <>
      <div className='nav'>
        <div className='logo'>
       {/* <i class="fa-solid fa-book"></i> */}
        </div>
        <div className='tag'>
        <Anchor link='/home' value='Home'/>
        <Anchor link='/about' value='About'/>
        <Anchor link='/order' value='Order item'/>
        <Anchor link='/news' value='News and Update'/>
        </div>
        <div className='cart'>
        <i onClick={()=>navigate('/cart')} class="fa-solid fa-cart-shopping"></i>
        {/* <p>{' ' + ctx.cart.length}</p> */}
        <Button value='Log in'/>
        </div>
      </div>
      {/* <Card/> */}
    </>
  )
}

export default Navbar
