import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function ExpenseBalance() {
  const [state] = useContext(TransactionContext);
  // Function to Calculate Income
  const Income = () => {
    let income = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i].amount > 0) {
        income += state[i].amount;
      }
    }
    return income;
  };

  // Function to Calculate Expenses
  const Expense = () => {
    let expense = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i].amount < 0) {
        expense += state[i].amount;
      }
    }
    return expense;
  };
  return (
    <div className="ExpenseBalance">
      <h3>
        Income <br />
        <span>${Income().toFixed(2)}</span>
      </h3>
      <h3>
        Expense <br />{" "}
        <span>
          {Expense() === 0 ? "" : "-"}$
          {Expense() === 0 ? Expense().toFixed(2) : -Expense().toFixed(2)}
        </span>
      </h3>
    </div>
  );
}
