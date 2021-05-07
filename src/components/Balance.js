import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function Balance() {
  const [state] = useContext(TransactionContext);

  const balance = () => {
    let income = 0;
    let expense = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i].amount > 0) {
        income += state[i].amount;
      } else {
        expense += state[i].amount;
      }
    }
    return income + expense;
  };

  return (
    <div className="Balance">
      <h3>Your Balance</h3>
      <h2>
        {balance() < 0 ? "-" : ""}${balance() > 0 ? balance() : -balance()}
      </h2>
      <hr></hr>
    </div>
  );
}
