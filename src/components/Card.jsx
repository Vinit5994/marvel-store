import React, { useContext, useEffect, useState } from 'react'
import './css/card.css'
import image from './s4.jpg'
import md5 from 'md5'
import comicContext from './Comics-context'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
const ctx = useContext(comicContext)
const navigate = useNavigate()
const detail= ()=>{
  navigate(`/detail?id=${props.id}`)
}


  return (
    <div >
      <div className='card-main' onClick={detail}>
       
        <div className='cardmain'>
          <div className='img'>
            <img src={props.images.length>0 ? props.images[0].path+'/portrait_fantastic.jpg'  : ''} alt='image not found'/>
            <div className='price'>
            <p>{` ${props.prices[0].price} $ `} </p>
            </div>
          </div>
            <div className='title'>
            <p>{props.title}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
