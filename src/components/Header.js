import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export default function Header() {
  const [, , , messageDisplay, displayMessage] = useContext(TransactionContext);
  return (
    <>
      <header className="header">
        <h1>Expense Tracker - Calculate Your Expenses</h1>
      </header>
      {/* This an Error Message to display when user did not input all the fields correctly */}
      <div
        className="message message-Danger"
        style={{ display: messageDisplay ? "flex" : "none" }}
      >
        <p>Error: Please enter all the Fields Correctly!</p>
        <i className="fas fa-times" onClick={displayMessage}></i>
      </div>
    </>
  );
}
