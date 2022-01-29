import {Card} from "../common/Card";
import {ExpenseDate} from "./ExpenseDate";
import {useState} from "react";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}