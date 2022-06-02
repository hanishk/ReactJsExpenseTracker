import React,{useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

// Component Function
function ExpenseItems(props) {
// useState is one of react hooks every hook start with use and
// only work under react component function
// cannot call outside function or nested function
// they must be called directly inside such component function
// there 1 exception

const [title,setTitle]  = useState(props.title);
// setTitle is StateUpdate Function 
// which call component function again
  // useState need initial value


// function clickHandler() {}

// end with Handler personal choice basically means Event Handler
  const clickHandler = () => { 
setTitle('Updated');
  console.log(title);
  
}

  return (
    <Card className="expense-item">
    <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {
      /* just give point ref to onClick if we pass clickHandler() then it will start
       calling at the time of build */}
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
}

export default ExpenseItems;
