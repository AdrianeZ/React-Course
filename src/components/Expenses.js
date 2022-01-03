import React from 'react';
import expenses from "../data";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = ({items}) => {
    return (
        <Card className="expenses">
            {
                items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount}
                                                     date={expense.date}/>)
            }
        </Card>
    );
};

export default Expenses;