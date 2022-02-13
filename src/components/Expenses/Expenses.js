import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "./NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import {expenses} from "../../data";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = () => {

    const [items, setItems] = useState(expenses);
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const addExpense = function (newExpense) {
        setItems([...items, newExpense]);
    }

    const filterYear = (event) => {
        setFilteredYear(Number(event.target.value));
    }
    const currentYear = new Date().getFullYear();

    const filteredExpenses = items.filter(expense => expense.date.getFullYear() === filteredYear);

    return (
        <Card className="expenses">
            <NewExpense addExpense={addExpense}/>
            <ExpensesChart filteredExpenses={filteredExpenses}/>
            <ExpensesFilter filterYear={filterYear} filteredYear={filteredYear} currentYear={currentYear}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;