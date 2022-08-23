import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  function SaveExpensData(enteredExpensData) {
    const expenseData = {
      ...enteredExpensData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensData={SaveExpensData} />
    </div>
  );
};
export default NewExpense;
