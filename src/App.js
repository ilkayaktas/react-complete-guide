import React, {useState} from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
import LoginButton from "./components/Login/LoginButton";
import LogoutButton from "./components/Login/LogoutButton";
import Profile from "./components/Login/Profile";

const INITIAL_VALUE = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, addExpense] = useState(INITIAL_VALUE);

    const addExpenseHandler = (expense) => {
        addExpense(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items = {expenses}/>
        </div>
    );
}

export default App;
