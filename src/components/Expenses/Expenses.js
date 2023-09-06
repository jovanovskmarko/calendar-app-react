import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expenseContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selected={year}
        ></ExpensesFilter>
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
