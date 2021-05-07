import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function Form() {
  const [state, dispatch, , , displayMessage] = useContext(TransactionContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  // Function to send the transaction to Reducer from Context
  const addTransaction = (e) => {
    e.preventDefault();
    if (Number(amount) !== 0) {
      dispatch({
        type: "ADD_TRANSACTION",
        name: name,
        amount: Number(amount),
        id: state.length + 1,
      });
      setName("");
      setAmount("");
    } else {
      displayMessage();
      setTimeout(() => {
        hideMessage();
        console.log("Clae");
      }, 400);
    }
  };
  function hideMessage() {
    displayMessage();
  }
  return (
    <div className="mainform">
      <form id="transactionForm" onSubmit={addTransaction}>
        <label htmlFor="Title">Transaction Name:</label>
        <input
          type="text"
          name="transaction-name"
          id="Title"
          placeholder="Enter Transaction Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="Amount">Transaction Amount:</label>
        <input
          type="Number"
          name="transaction-amount"
          id="Amount"
          placeholder="Enter Transaction Amount"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn addtransactionbtn">Add Transaction</button>
      </form>
    </div>
  );
}
