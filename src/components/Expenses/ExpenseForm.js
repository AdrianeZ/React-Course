import React, {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = ({onExpenseSubmit}) => {

    const [formStatus, setFormStatus] = useState(
        {
            expenseText: "",
            expenseAmount: "",
            expenseDate: ""
        }
    );

    const handleForm = function (e) {
        e.preventDefault();
        const {expenseDate, expenseText, expenseAmount} = formStatus;
        if (expenseDate && expenseText && expenseAmount) {
            const newExpense = {
                id: Math.random().toString(),
                title: expenseText,
                amount: Math.round(Number(expenseAmount) * 100) / 100,
                date: new Date(expenseDate)
            }
            setFormStatus({
                expenseText: "",
                expenseAmount: "",
                expenseDate: ""
            });
            onExpenseSubmit(newExpense);
        }

    }
    const titleChange = function (e) {
        setFormStatus((prevState) => {
                return {
                    ...prevState,
                    expenseText: e.target.value
                }
            }
        );
    }
    const amountChange = function (e) {
        setFormStatus((prevState) => {
                return {
                    ...prevState,
                    expenseAmount: e.target.value
                }
            }
        );
    }
    const dateChange = function (e) {
        setFormStatus((prevState) => {
                return {
                    ...prevState,
                    expenseDate: e.target.value
                }
            }
        );
    }

    return (
        <form onSubmit={handleForm}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label htmlFor="expenseName">Title</label>
                    <input id="expenseName" name="expenseName" type="text" onChange={titleChange}
                           value={formStatus.expenseText}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expenseAmount">Amount</label>
                    <input id="expenseAmount" name="expenseAmount" type="number"
                           onChange={amountChange} step="0.01" min="0.01" value={formStatus.expenseAmount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="ExpenseDate">Date</label>
                    <input id="expenseDate" name="expenseDate" type="date" onChange={dateChange}
                           value={formStatus.expenseDate}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;