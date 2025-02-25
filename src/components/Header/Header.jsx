import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import About from '../../pages/About';
import { Link } from 'react-router-dom';

function Header() {
  
  const dispatch = useDispatch();
  const { timer, text } = useSelector((state) => state.count);

  return (
    <div>
      {timer}
      {text}
    </div>
  )
}

export default Header   