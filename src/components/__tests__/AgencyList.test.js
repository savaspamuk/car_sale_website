import React from "react";
import { render, screen } from "@testing-library/react";
import { AgencyItem } from "../UI/AgencyList/AgencyList";
import agencyData from "../../assets/data/agencyData";
import "@testing-library/jest-dom/extend-expect";

describe("AgencyItem Component", () => {
  const item = agencyData[0];

  test("AgencyItem displays item details", () => {
    render(<AgencyItem item={item} />);
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.address)).toBeInTheDocument();
    expect(screen.getByText(item.desc)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", item.location);
  });

  test("AgencyItem location link opens in new tab", () => {
    render(<AgencyItem item={item} />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });
});
