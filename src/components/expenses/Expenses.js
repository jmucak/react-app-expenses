import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../common/Card";
import './Expenses.css';
import {ExpensesFilter} from "./ExpensesFilter";
import {useState} from "react";

export const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedFilter => {
        setFilteredYear(selectedFilter);
    };

    console.log(filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            {props.items.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </Card>
    );
}