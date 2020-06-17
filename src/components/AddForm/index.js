import React from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./style.css";

// ==============================================================================

function AddForm(props) {
  return (
    <Container onSubmit={props.handleFormSubmit}>
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
              value={props.valueDate}
              onChange={props.handleDateInput}
            ></input>
          </Col>
          <Col size="3">
            <input
              className="form-control"
              type="text"
              placeholder="expense name"
              name="name"
              id="expenseName"
              value={props.valueName}
              onChange={props.handleNameInput}
            ></input>
          </Col>
          <Col size="3">
            <input
              className="form-control"
              type="text"
              placeholder="cost (US$)"
              name="cost"
              id="expenseCost"
              value={props.valueCost}
              onChange={props.handleCostInput}
            ></input>
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
