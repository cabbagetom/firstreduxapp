import {useSelector, useDispatch} from "react-redux";
import { charge, addition, deposit, withdraw } from "./counter";
import './App.css';
import { useState } from "react";


function App() {
  const count = useSelector((state)=>state.counter.value);
  const [userDeposit, setUserDeposit] = useState(0);
  const [userWithdrawal, setUserWithdrawal] = useState(0);
  
  const handleDeposit = (event) => {
    event.preventDefault();
    dispatch(deposit(Number(userDeposit)));
    setUserDeposit(0)
  };

  const handleWithdrawal = (event) => {
    event.preventDefault();
    dispatch(withdraw(Number(userWithdrawal)));
    setUserWithdrawal(0)
  };


  const dispatch = useDispatch();

  return (
    <div>

    <div className="App">
      <h1>{(count).toFixed(2)}</h1>
    </div>
    <div className = "Buttons">
      <button onClick={()=>dispatch(addition())}>5% Addition (Interest)</button>
      <button onClick={()=>dispatch(charge())}>15% Reduction (Charge)</button>
    </div>

    <form className ="Form" onClick={handleDeposit}>
    <label>
    Value:
    <input 
      type = "text"
      name = "value"
      onChange={(e)=> setUserDeposit(e.target.value)}
      value={userDeposit}
    />
    </label>
    <button className = "Buttons" type="submit">Deposit Amount</button>
    </form>

    <form className ="Form" onClick={handleWithdrawal}>
    <label>
    Value:
    <input 
      type = "text"
      name = "value"
      onChange={(e)=> setUserWithdrawal(e.target.value)}
      value={userWithdrawal}
    />
    </label>
    <button  className = "Buttons" type="submit">Withdrawal Amount</button>
    </form>

    </div>
  );
}

export default App;
