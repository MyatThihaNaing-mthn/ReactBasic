import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
function App() {
  const expenses = [
    {id : 'e1', title: 'Toilet Paper', amount: 200, date: new Date(2023, 5, 10)},
    {id : 'e2', title: 'Car Insurance', amount: 200, date: new Date(2023, 5, 10)},
    {id : 'e3', title: 'Car Insurance', amount: 200, date: new Date(2023, 5, 10)},
    {id : 'e4', title: 'Car Insurance', amount: 200, date: new Date(2023, 5, 10)} 
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
