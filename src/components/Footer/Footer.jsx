import React from 'react'
import { useDispatch } from 'react-redux';
// import { subtractTimer } from '../../redux/counter/countSlice';

function Footer() {
    const dispatch = useDispatch();
  return (
    <div>
      
            {/* <button onClick={() => dispatch(subtractTimer())}>Subtract Timer</button> */}
    </div>
  )
}

export default Footer
