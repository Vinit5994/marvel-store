import React from 'react'
import './css/Anchor.css'
import { NavLink } from 'react-router-dom'

const Anchor = (p) => {
  return (
    <div className='svg-wrapper'>
        {/* <rect class="shape" height="60" width="320" /> */}
      <NavLink className='text' to={p.link} >{p.value}</NavLink>
    </div>
  )
}

export default Anchor
