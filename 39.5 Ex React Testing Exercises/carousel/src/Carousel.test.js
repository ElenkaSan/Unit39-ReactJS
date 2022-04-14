import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// smoke test
it("renders without crashing", function() {
  render(<Carousel />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it('ckecking if scrolling is working', function() {
	const { getByTestId } = render(<Carousel />);
	const cardTitle = getByTestId('title');
	//moving the carousel both directions 
	fireEvent.click(getByTestId('right-arrow'));
	const leftArrow = getByTestId('left-arrow');
  //and checking if the correct image is displayed
	fireEvent.click(leftArrow);
	expect(cardTitle).toContainHTML('Photo by Josh Post on Unsplash');
});

it('checking if the appropriate arrows are present', () => {
	const { queryByTestId } = render(<Carousel />);
	const leftArrow = queryByTestId('left-arrow');
	const rightArrow = queryByTestId('right-arrow');
  // expect the left arrow to be missing
  expect(leftArrow).not.toBeInTheDocument();
  //moves the carousel back twice and expects the right arrow to be missing
	fireEvent.click(rightArrow);
	fireEvent.click(rightArrow);
	expect(rightArrow).not.toBeInTheDocument();
});
