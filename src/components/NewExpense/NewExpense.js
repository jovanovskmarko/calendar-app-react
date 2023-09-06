import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  }

  function startEditing() {
    setIsEditing(true);
  }

  function stopEditing() {
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button type='submit' onClick={startEditing}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
