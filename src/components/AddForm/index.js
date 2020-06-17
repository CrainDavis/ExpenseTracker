import React from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./style.css";

// ==============================================================================

function AddForm({ date, name, amount, handleDate, handleName, handleAmount, handleSubmitForm }) {
  return (
    <Container onSubmit={handleSubmitForm}>
      <h3 className="add-form-header">Add Expense:</h3>
      <form>
        <Row>
        <Col size="3">
            <input
              className="form-control"
              type="text"
              placeholder="date (mm/dd/yyyy)"
              name="date"
              id="expenseDate"
              value={date}
              onChange={handleDate}
            />
          </Col>
          <Col size="3">
            <input
              className="form-control"
              type="text"
              placeholder="expense name"
              name="name"
              id="expenseName"
              value={name}
              onChange={handleName}
            />
          </Col>
          <Col size="3">
            <input
              className="form-control"
              type="text"
              placeholder="cost (US$)"
              name="amount"
              id="expenseAmount"
              value={amount}
              onChange={handleAmount}
            />
          </Col>
          <Col size="3">
            <button className="btn btn-success" type="submit">
              Add <i className="fas fa-plus"></i>
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

// ==============================================================================

export default AddForm;
