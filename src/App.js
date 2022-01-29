import './App.css';
import {Expenses} from "./components/expenses/Expenses";
import {NewExpense} from "./components/newExpense/NewExpense";
import {useState} from "react";

function App() {
    const [expenses, setExpenses] = useState([])
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
