import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = ({title, amount, date}) => {

    const [tit, setTit] = useState(title);

    const changeTitle = () => {
        setTit("clicked");
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2 onClick={changeTitle}>{tit}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;