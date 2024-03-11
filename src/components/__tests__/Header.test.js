import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header/Header";
import React from "react";

test("renders Header component without crashing", () => {
  render(<Header />);
});

test("renders all navigation links", () => {
  const { getAllByTestId } = render(<Header />);
  const navLinks = getAllByTestId("nav-link");

  expect(navLinks.length).toBeGreaterThanOrEqual(5);
  navLinks.forEach((link) => {
    expect(link).toBeInTheDocument();
  });
});

test("toggles menu on click", () => {
  const { getByTestId } = render(<Header />);
  const menu = getByTestId("navigation");
  expect(menu).not.toHaveClass("menu__active");
  fireEvent.click(menu);
  expect(menu).toHaveClass("menu__active");
});
