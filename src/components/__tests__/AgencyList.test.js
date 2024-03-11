import React from "react";
import { render, screen } from "@testing-library/react";
import { AgencyItem } from "../UI/AgencyList/AgencyList";
import agencyData from "../../assets/data/agencyData";
import "@testing-library/jest-dom/extend-expect";

describe("AgencyItem Component", () => {
  const item = agencyData[0];

  test("AgencyItem displays item details", () => {
    render(<AgencyItem item={item} />);
    expect(screen.getByText(item.title)).toHaveTextContent("Göteborg South");
    expect(screen.getByText(item.address)).toHaveTextContent(
      "Mölndal, Göteborg"
    );
    expect(screen.getByText(item.desc)).toHaveTextContent(
      "Located in Mölndal, south of Göteborg, this agency provides a temporary yet serene atmosphere. With its proximity to the sea, it offers a dual experience of tranquility and vibrant car choices. Discover your ideal car with trusted dealers in this scenic setting."
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", item.location);
  });

  test("AgencyItem location link opens in new tab", () => {
    render(<AgencyItem item={item} />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });
});
