import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>2022 March 17.</div>
      <div className="expense-item__description">
        <h2> Biztosítás</h2>
        <div className="expense-item__price">80000 Ft</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
