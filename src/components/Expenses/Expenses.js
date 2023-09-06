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
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selected={year}
        ></ExpensesFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
