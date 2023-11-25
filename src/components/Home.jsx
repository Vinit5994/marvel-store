import React, { useContext } from 'react'
import Card from './Card'
import comicContext from './Comics-context'
import Navbar from './Navbar'
import './css/card.css'
import '../App.css'
import Corousel from './Corousel'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'



const Home = () => {
  const ctx = useContext(comicContext)
  const navigate = useNavigate();
  return (
    <div className='home'>
     
      <div className='stick'>
      <Navbar/>
      </div>
      <div className='background'>
      <Corousel/>
      <div className="cards" >  
        {ctx.result && ctx.result.map((e)=>{
          if(e.images.length >=1)
        
        return <Card {...e}/>
       })
       } 
      </div>
   </div>
   <div className='space'></div>
   <Footer/>
   
    </div>
  )
}

export default Home
