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

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expenseContent = <p>No content!</p>;
    if (filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
                {expenseContent}
            </Card>
        </div>

);
}

export default Expenses;
