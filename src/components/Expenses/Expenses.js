import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
                {props.items.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))}
            </Card>
        </div>

);
}

export default Expenses;
