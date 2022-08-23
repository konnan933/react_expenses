import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 17);
  const expenseItem = "Biztosítás";
  const expenseAmount = 80000;
  return (
    <div className="expense-item">
      <div>{expenseDatetoISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">{expenseAmount}Ft</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
