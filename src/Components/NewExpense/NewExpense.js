import { useState } from 'react';
import AddNewExpense from './AddNewExpense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense=(props)=>{
    const NewExpenseHandler=(newExpense)=>{
        const newExpenseData = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onAddExpense(newExpenseData);
    }

    const [onAdd, setOnAdd] = useState(false);

    const addExpenseHandler=()=>{
        setOnAdd(true);
    }

    const onCancelExpense=()=>{
        setOnAdd(false);
    }

    const onAddExpense=()=>{
        setOnAdd(false);
    }

    let newExpenseContent;
    if(onAdd){
        newExpenseContent = <ExpenseForm
                                onSaveNewExpense={NewExpenseHandler}
                                onCancel={onCancelExpense}
                                onAddExpense={onAddExpense}></ExpenseForm>;
    }else{
        newExpenseContent = <AddNewExpense onClickAdd={addExpenseHandler}/>;
    }


    return (
        <div className='new-expense'>
            {newExpenseContent}
        </div>
    );
}

export default NewExpense;