import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import BudgetTotals from "./components/BudgetTotals";
import SpendingTable from "./components/SpendingTable";
import AddForm from "./components/AddForm";
import SectionBreak from "./components/SectionBreak";
import SectionSpacing from "./components/SectionSpacing";
import Footer from "./components/Footer";

// ==============================================================================

// retrieve all previous expenses from local storage
const allExpenses = localStorage.getItem("stored-expenses")
  ? JSON.parse(localStorage.getItem("stored-expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(allExpenses);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // store expenses in LocalStorage
  useEffect(() => {
    localStorage.setItem("stored-expenses", JSON.stringify(expenses));
  }, [expenses]);

  // =================================

  // entered date value
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  // entered name (type of expense) value
  const handleName = (event) => {
    setName(event.target.value);
  };

  // entered amount (cost) value
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  // for "add expense" button
  const handleSubmitForm = (event) => {
    event.preventDefault();

    // make sure user has filled in all three fields
    if (date !== "" && name !== "" && amount > 0) {
      const expense = { date, name, amount };

      setExpenses([...expenses, expense]);

      // empty input field values
      setDate("");
      setName("");
      setAmount("");

    } else {
      // otherwise, console log message
      console.log("invalid input");
    }
  };

  // "clear expenses" button; empty out LocalStorage
  const handleClearExpenses = (event) => {
    event.preventDefault();
    setExpenses([]);
  };

  // =================================

  return (
    <div>
      <Header />
      <div className="container">
        <AddForm
          date={date}
          name={name}
          amount={amount}
          handleDate={handleDate}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
        />
        <SectionBreak />
        <BudgetTotals expenses={expenses} />
        <SectionBreak />
        <SpendingTable
          expenses={expenses}
          handleClearExpenses={handleClearExpenses}
        />
      </div>
      <SectionSpacing />
      <Footer />
    </div>
  );
}

// ==============================================================================

export default App;
