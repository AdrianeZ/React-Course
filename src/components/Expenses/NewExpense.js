import React from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({addExpense}) => {

    const saveExpense = function (newExpense)
    {
        addExpense(newExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onExpenseSubmit={saveExpense}/>
        </div>
    );
};

export default NewExpense;