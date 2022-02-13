import React from 'react';
import "./ExpensesFilter.css"

const ExpensesFilter = ({filterYear, currentYear, filteredYear}) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select value={filteredYear} onChange={filterYear}>
                    <option value={currentYear - 2}>{currentYear - 2}</option>
                    <option value={currentYear - 1}>{currentYear - 1}</option>
                    <option value={currentYear}>{currentYear}</option>
                    <option value={currentYear + 1}>{currentYear + 1}</option>
                    <option value={currentYear + 2}>{currentYear + 2}</option>
                </select>
            </div>

        </div>
    );
};

export default ExpensesFilter;