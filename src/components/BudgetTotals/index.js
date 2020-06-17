import React from "react";
import "./style.css";

// ==============================================================================

function BudgetTotals({ expenses }) {
  const expenseCount = expenses.length;

  let expenseTotalCost = 0;

  // convert all of the expense amounts (costs) from strings to numbers
  for (var i = 0; i < expenses.length; i++) {
    var cost = expenses[i].amount;
    // add them together; will be rounded later...
    expenseTotalCost += parseFloat(cost);
  };

  // round the cost to two decimal places (for some reason, this is necessary)
  var finalCost = expenseTotalCost.toFixed(2);

  if (expenses.length > 0) {
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
