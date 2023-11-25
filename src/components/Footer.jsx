import React from 'react'
import Anchor from './Anchor'
import './css/footer.css'
import './css/Anchor.css'


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='email'>
        <p>email newsletter</p>
    <input type='email' placeholder='Email'/>
    <button>subscribe</button>
    </div>
    <div className='other'>
       <a href='#'>FAQ</a>
       <a href="#">contact us</a>
    </div>
    <div className='copy'>
    Copyright © 2023 Marvelcomic. All rights reserved.
    </div>
      
    </div>
    
    </>
  )
}

export default Footer
