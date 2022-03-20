import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";

function ExpenseItem(props) {
    const clickedHandler = () => {
        console.log('Clicked!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickedHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;