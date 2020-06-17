import React from "react";
import "./App.css";

import Header from "./components/Header";
import SectionBreak from "./components/SectionBreak";
import SectionSpacing from "./components/SectionSpacing";
import Footer from "./components/Footer";

import AddForm from "./components/AddForm";
import BudgetTotals from "./components/BudgetTotals";
import SpendingTable from "./components/SpendingTable";

// =================================================================

class App extends React.Component {
  state = {
    expenses: [],
    date: "",
    name: "",
    cost: "",
  };

  handleDateInput = (event) => {
    this.setState({ date: event.target.value });
  };

  handleNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCostInput = (event) => {
    this.setState({ cost: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const allExpenses = this.state.expenses;

    let singleExpense = {
      date: this.state.date,
      name: this.state.name,
      cost: this.state.cost,
    };

    allExpenses.push(singleExpense);

    console.log(allExpenses);

    this.setState({ expenses: allExpenses });

    this.setState({ date: "", name: "", cost: "" });
    };
  
  // =======================================

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddForm
            handleDateInput={this.handleDateInput}
            handleNameInput={this.handleNameInput}
            handleCostInput={this.handleCostInput}
            handleFormSubmit={this.handleFormSubmit}
            valueDate={this.state.date}
            valueName={this.state.name}
            valueCost={this.state.cost}
          />
          <SectionBreak />
          <BudgetTotals expenses={this.state.expenses} />
          <SectionBreak />
          <SpendingTable expenses={this.state.expenses} />
        </div>
        <SectionSpacing />
        <Footer />
      </div>
    );
  }
}

// =================================================================

export default App;
