import './ExpenseDate.css';
import {getMonth, getYear, getDay} from "../../app/helpers/DateHelper";

export const ExpenseDate = (props) => {
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{getMonth(props.date)}</div>
            <div className='expense-date__year'>{getYear(props.date)}</div>
            <div className='expense-date__day'>{getDay(props.date)}</div>
        </div>
    );
}