import {useSelector, useDispatch} from "react-redux";
import { decrement, increment, incrementByAmount } from "./counter";
import './App.css';
import { useState } from "react";


function App() {
  const count = useSelector((state)=>state.counter.value);
  const [userInput, setUserInput] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(Number(userInput)));
    setUserInput(0)
  };



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

    <form className ="Form" onClick={handleSubmit}>
    <label>
    Value:
    <input 
      type = "text"
      name = "value"
      onChange={(e)=> setUserInput(e.target.value)}
      value={userInput}
    />
    </label>
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
