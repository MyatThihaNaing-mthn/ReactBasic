const AddNewExpense=(props)=>{
    const addExpenseHandler=()=>{
        props.onClickAdd();
    }
    return(
        <div className="newExpense">
            <button onClick={addExpenseHandler}>Add New Expense</button>
        </div>
    );
}

export default AddNewExpense;