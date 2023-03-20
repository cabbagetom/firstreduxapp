import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from "./counter";
import './App.css';

function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
    <div className="App">
      <h1>{count}</h1>
    </div>
    <div className = "Buttons">
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </div>
  );
}

export default App;
