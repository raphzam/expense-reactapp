import React, { Component } from "react";
import AppNav from "./AppNav";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Container, Form, Button, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Expenses extends Component {
  state = {
    date: new Date(),
    isLoading: true,
    expenses: [],
    categories: [],
  };

  async componentDidMount() {
    const response = await fetch("/api/categories");
    const body = await response.json();

    this.setState({ categories: body, isLoading: false });
  }

  handleChange;

  render() {
    const title = <h3>Add Expense</h3>;
    const { categories, isLoading } = this.state;

    if (isLoading) return <div>Loading...</div>;

    let optionList = categories.map((category) => (
      <option id={category.id}>{category.name}</option>
    ));

    return (
      <div>
        <AppNav />
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="category">Category</Label>
              <select>{optionList}</select>
            </FormGroup>

            <FormGroup>
              <Label for="date">Date</Label>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDateChange}
              />
            </FormGroup>

            <div className="row">
              <FormGroup className="col-md-4 mb-3">
                <Label for="location">Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </div>

            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
        <h2>Expenses</h2>
      </div>
    );
  }
}

export default Expenses;
