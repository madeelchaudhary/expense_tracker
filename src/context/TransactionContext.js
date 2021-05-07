import React, { createContext, useReducer, useState } from "react";
import TransactionReducer from "./TransactionReducer";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  // Initial Transactions Lists
  let transactions = [];
  // Using useReducer Hook to Update List
  let [state, dispatch] = useReducer(TransactionReducer, transactions);
  // This function is for displaying error message
  const [messageDisplay, setMessageDisplay] = useState(false);
  function displayMessage() {
    setMessageDisplay(!messageDisplay);
  }
  // Function to Delete Transtions from List
  function deleteTransaction(i) {
    state = state.filter((transaction) => transaction.id !== i);
    dispatch({ type: "DELETE_TRANSACTION", newState: state });
  }
  return (
    <TransactionContext.Provider
      value={[
        state,
        dispatch,
        deleteTransaction,
        messageDisplay,
        displayMessage,
      ]}
    >
      {children}
    </TransactionContext.Provider>
  );
}
