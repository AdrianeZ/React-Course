import React from 'react';
import Chart from "../Chart/Chart";
import {labels} from "../../data"

const ExpensesChart = ({filteredExpenses}) => {

    const initialDataPoints = [];

    for (let i = 0; i < 12; i++) {
        initialDataPoints.push({label: labels[i], value: 0})
    }

    for (const expense of filteredExpenses) {
        initialDataPoints[expense.date.getMonth()].value += expense.amount;
    }
    console.log(initialDataPoints);
    return (
        <Chart dataPoints={initialDataPoints}/>
    );
};

export default ExpensesChart;