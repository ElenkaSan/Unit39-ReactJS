import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo and delete", function () {
    const { queryByText, getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('todo');
    const btn = queryByText("Add Todo!");
    expect(input).toBeEmpty; 
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(btn);
    expect(queryByText(`New Todo`)).toBeInTheDocument;

    const removeBtn = queryByText('X');
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
    expect(input).toBeEmpty; 
})
