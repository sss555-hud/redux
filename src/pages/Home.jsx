  import React, {useState} from 'react';
  import './Home.css'
  import { useDispatch, useSelector } from 'react-redux';
  import { addTimer, subtractTimer, setText } from '../redux/counter/countSlice';
  import { addColor } from '../redux/blue/blue';
  import Red from '../redux/Red/Red';
  import Blue from '../redux/blue/blue';
  import Yellow from '../redux/Yellow/Yellow';

  function Home() {
    const dispatch = useDispatch();
    // const { timer } = useSelector((state) => state.count);
    const [box, setBox] = useState('');
    // const {text} = useSelector((color) => color.count)
    



    return (
      <div>
        {/* {timer} */}
        <button onClick={() => dispatch(addTimer())}>Add Timer</button>
        {/* <button onClick={() => dispatch(subtractTimer())}>Subtract Timer</button> */}
        <input type="text"  placeholder='text'  onChange={(e) => addColor(e.target.value)}/>
        <button onClick={() => dispatch(setText(box))}>Send</button>
      </div>
    );
  }

  export default Home;
