import ExpenseItem from "./Components/Expense/ExpenseItem";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, {useState} from "react";
function App() {


  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    setExpense((prevExpense) => {
      console.log("In main app")
      console.log(expenses);
      console.log(expenses[0].date.getFullYear());
      return [expense, ...prevExpense];
      
    }
    )
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
