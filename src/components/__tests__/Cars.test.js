import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cars from "../UI/Cars/Cars";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("lodash/orderBy", () => jest.fn().mockReturnValue((data) => data));

test("Renders the Cars component with no data", () => {
  render(<Cars cars={[]} />);

  expect(screen.queryByText(/See details/i)).toBeNull();
});

test("Renders the Cars component with no data", () => {
  render(<Cars cars={[]} />);

  expect(screen.queryByText(/See details/i)).toBeNull();
});

test("Renders car items with details link", () => {
  const mockCars = [{ id: 1, year: 2023, make: "Toyota", model: "Camry" }];

  const { getByText } = render(
    <BrowserRouter>
      <Cars cars={mockCars} />
    </BrowserRouter>
  );
  expect(getByText(/See details/i)).toBeInTheDocument();
});
