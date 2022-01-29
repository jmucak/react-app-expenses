import {Card} from "../common/Card";
import './Expenses.css';
import {ExpensesFilter} from "./ExpensesFilter";
import {useState} from "react";
import {ExpensesList} from "./ExpensesList";

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedFilter => {
        setFilteredYear(selectedFilter);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}