import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box and delete", function () {
  const { queryByText, getByTestId } = render(<BoxList />);
  const heightInput = getByTestId('height');
  expect(heightInput).toBeEmpty; 
  const btn = queryByText('Add Box');
  fireEvent.change(heightInput, { target: { value: "350px" } });
  fireEvent.click(btn);
  expect(queryByText(`height: '350px'`)).toBeInTheDocument;
  
  const removeBtn = queryByText('X');
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
  expect(heightInput).toBeEmpty; 
})
