import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2023');
    const onFilterHandler=(year)=>{
        setFilterYear(year);
    };

    const filteredExpenses = props.data.filter((expense) =>
       {
            return expense.date.getFullYear().toString() === filterYear;
       } 
    );
    console.log("filtered expnese");
    console.log(filteredExpenses);

    
    return(
        <div>
            <ExpensesFilter selectedYear={filterYear} onFilter={onFilterHandler}>

            </ExpensesFilter>
            <Card className='expenses'>
                <ExpensesList items={filteredExpenses}/>   
            </Card>
        </div>
        
    );
}

export default Expenses;



