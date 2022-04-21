import React from "react";
import { render} from "@testing-library/react";
import Todo from "./Todo";

// smoke test
it("Todo renders without crashing", function () {
    render(<Todo />);
});

// snapshot test
it("Todo matches snapshot", function () {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});