import react, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  function SaveExpensData(enteredExpensData) {
    const expenseData = {
      ...enteredExpensData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHnadler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHnadler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpensData={SaveExpensData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
