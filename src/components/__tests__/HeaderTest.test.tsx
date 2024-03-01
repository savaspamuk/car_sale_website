import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header/Header";
import React from "react";

test("renders Header component without crashing", () => {
  render(<Header />);
});

test("renders all navigation links", () => {
  const { getByText } = render(<Header />);
  const navLinks = [
    { path: "/", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/cars", display: "Cars" },
    { path: "/blogs", display: "Blogs" },
    { path: "/contact", display: "Contact" },
  ];
  navLinks.forEach((item) => {
    expect(getByText(item.display)).toBeInTheDocument();
  });
});

test("toggles menu on click", () => {
  const { getByTestId } = render(<Header />);
  const menu = getByTestId("navigation");
  expect(menu).not.toHaveClass("menu__active");
  fireEvent.click(menu);
  expect(menu).toHaveClass("menu__active");
});
