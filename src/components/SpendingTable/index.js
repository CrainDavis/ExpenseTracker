import React from "react";
import "./style.css";

// ==============================================================================

function SpendingTable(props) {
  if (props.expenses.length > 0) {
    return (
      <div>
        <h3 className="recent-spending-header">Recent Purchases:</h3>
        <ul className="list">
          {props.expenses.map((expense) => (
            <li className="expense-item" key={expense.name}>
              <span>{expense.date}</span> <span>{expense.name}</span>{" "}
              <span>${expense.cost}</span>
            </li>
          ))}
        </ul>
      </div>
    );
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
