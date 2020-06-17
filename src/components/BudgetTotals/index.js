import React from "react";
import "./style.css";

// ==============================================================================

function BudgetTotals(props) {
  const expenseCount = props.expenses.length;
  let expenseTotalCost = 0;

  for (var i = 0; i < props.expenses.length; i++) {
    var currentItemCost = props.expenses[i].cost;

    expenseTotalCost += parseFloat(currentItemCost);
  }

  var finalCost = expenseTotalCost.toFixed(2);

  if (props.expenses.length > 0) {
    return (
      <div>
        <h3 className="total-expenses-header">Total Spending:</h3>
        <div className="budget-totals-container">
          <div className="expense-total">
            <h6>Total # of Expenses:</h6>
            <h2 className="expense-number">{expenseCount}</h2>
          </div>
          <div className="cost-total">
            <h6>Total Cost:</h6>
            <h2 className="cost-number">${finalCost}</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="total-expenses-header">Total Spending:</h3>
        <p>no recent purchases</p>
      </div>
    );
  }
}

// ==============================================================================

export default BudgetTotals;
