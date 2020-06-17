import React from "react";
import "./style.css";

// ==============================================================================

function SpendingTable({ expenses, handleClearExpenses }) {
  // if there are expenses in storage...
  if (expenses.length > 0) {
    // render all of the expenses
    return (
      <div>
        <h3 className="recent-spending-header">Recent Purchases:</h3>
        <ul className="list">
          {expenses.map((expense) => (
            <li className="expense-item" key={expense.name}>
              <span>{expense.date}</span> <span>{expense.name}</span>{" "}
              <span>${expense.amount}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleClearExpenses}
          className="btn btn-danger clear-button"
        >
          Clear Expenses <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    );
    // otherwise, if there are no expenses...
  } else {
    return (
      <div>
        <h3 className="recent-spending-header">Recent Purchases:</h3>
        <p>no recent purchases</p>
      </div>
    );
  }
}

// ==============================================================================

export default SpendingTable;
