import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense=(props)=>{
    const NewExpenseHandler=(newExpense)=>{
        const newExpenseData = {
            ...newExpense,
            id: Math.random.toString()
        }
        props.onSaveNewExpense(newExpenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveNewExpense={NewExpenseHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;