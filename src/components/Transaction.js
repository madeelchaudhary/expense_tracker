import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
export default function Transaction() {
  const [state, , deleteTransaction] = useContext(TransactionContext);

  return (
    <div className="tableMain">
      <table id="table">
        <caption>
          <h2>History</h2>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {state.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>
                  {transaction.amount < 0
                    ? transaction.amount
                    : "+" + transaction.amount}
                </td>
                <td>
                  <button
                    id="btnDelete"
                    className="btn"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
