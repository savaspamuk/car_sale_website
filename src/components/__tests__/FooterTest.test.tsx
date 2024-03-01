import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";
import "@testing-library/jest-dom";

test("renders Footer without crashing", () => {
  render(<Footer />);
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement).toBeInTheDocument();
});

test("renders correct number of quick links", () => {
  render(<Footer />);
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(11);
});

test("displays correct office information", () => {
  render(<Footer />);
  const officeInfo = screen.getAllByTestId("office-info");
  expect(officeInfo).toHaveLength(5);
  expect(officeInfo[0]).toHaveTextContent("123, Göteborg, Sweden");
  expect(officeInfo[1]).toHaveTextContent("+46 123 456 78 90");
  expect(officeInfo[2]).toHaveTextContent("abc@abc.com");
});

test("should render the company logo and tagline correctly", () => {
  render(<Footer />);
  const logo = screen.getByAltText("Left-Logo");
  const tagline = screen.getByText("_A Car");
  expect(logo).toBeInTheDocument();
  expect(tagline).toBeInTheDocument();
});
