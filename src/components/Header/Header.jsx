import React from 'react'
import './Header.css' 
import {Link} from "react-router-dom"
// import { useDispatch, useSelector } from 'react-redux';

function Header() {
  
  // const dispatch = useDispatch();
  // const { timer, text } = useSelector((state) => state.count);

  return (
    <div className='header'>
      {/* {timer}
      {text} */}
      <Link>Home</Link>
      <Link to="./service">Service</Link>
      <Link to="./about">About</Link>
      <Link to="./info">Info</Link>
      <Link to="./pro">Pro</Link>
    </div>
  )
}

export default Header   