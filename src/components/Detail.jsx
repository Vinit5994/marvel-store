import react, { useContext, useState } from 'react'
import comicContext from './Comics-context'
import Navbar from './Navbar'
import './css/Detail.css'
import { useLocation, useParams } from 'react-router-dom'
import Button from './Button'
import { useEffect } from 'react'
import Cart from '../model/cart'
import CartContext from './CartContext'



const Detail = () => {
  const ctx2 = useContext(CartContext);
  const ctx = useContext(comicContext)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = + queryParams.get("id");

  let item = { id };

  // console.log(item);

  const index = ctx.result && ctx.result.findIndex(object => {
    return object.id === id;
  })

  return (
    <>
      <Navbar />
      {/* {console.log(id)} */}
      <div className='container'>
        <div className="detail-img">
          <img src={ctx.result[index].images[0] ? ctx.result[index].images[0].path + '/portrait_uncanny.jpg' : "No image found"} />
        </div>
        <div className='all-detail'>
          <div className='title'>
            <h2>{ctx.result[index].title}</h2>
          </div>
          <div className='published'>
            <h4>Published:</h4>
            <p>{ctx.result[index].dates[0].date}</p>
          </div>
          <div className='writer'>
          
            <div className='first'>
              {ctx.result[index].creators.items[0] && <>
              <h4>{ctx.result[index].creators.items[0].role}:</h4>
              <p> {ctx.result[index].creators.items[0].name} </p></>}

            </div>
            <div className='second'>
              {ctx.result[index].creators.items[1] && <>
                <h4>{ctx.result[index].creators.items[1].role}:  </h4>
                <p>{ctx.result[index].creators.items[1].name}</p></>}

            </div>


          </div>

          <div className='description'>
            <p>{ctx.result[index].description}</p>
          </div>
          <div className='price-detail'>
            <h4>Price:</h4>
            <p>{ctx.result[index].prices[0].price + ` $`}</p>
            {/* <span><img src={icon}></img></span> */}
          </div>
          <Button value="Add to cart" onClick={() => ctx2.addToCart(id)} />
        </div>
      </div>
    </>
  )
}

export default Detail
