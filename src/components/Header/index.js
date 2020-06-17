import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="jumbotron-text">Expense Tracker <i className="fas fa-comment-dollar"></i></h1>
        <p>here to help you quickly calculate how much you just spent on your latest shopping spree</p>
      </div>
    </div>
  );
}

export default Header;