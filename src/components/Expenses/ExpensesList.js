import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({filteredExpenses}) => {

    console.log(filteredExpenses);
    if (!filteredExpenses.length) {
        return (
            <p className="expenses-list__fallback">No expenses found</p>
        );
    }

    const displayedExpenses = filteredExpenses.map((expense) =>
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
    )

    return (
        <ul className="expenses-list">
            {
                displayedExpenses
            }
        </ul>
    )

};

export default ExpensesList;