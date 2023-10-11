import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import { decrement, increment } from './features/counter';

function App() {

  const count=useSelector((state)=>{return state.counterSlice})

  const dispatch=useDispatch()

  return (
    <>
    <h4>counter</h4>
    <h5>count is {count}</h5>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>

    
    </>
  );
}

export default App;
