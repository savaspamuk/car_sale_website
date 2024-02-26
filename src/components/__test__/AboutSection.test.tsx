import React from "react";
import { render, screen } from "@testing-library/react";
import AboutSection from "../UI/AboutSection/AboutSection";
import "@testing-library/jest-dom/extend-expect";

describe("AboutSection Component Tests", () => {
  test("test_AboutSection_renders_without_crashing", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Welcome to car buy service/i)).toBeInTheDocument();
  });

  test("test_AboutSection_contains_correct_static_text", () => {
    render(<AboutSection />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome to car buy service/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Our narrative revolves around its commitment to revolutionizing the online car purchasing experience./i
      )
    ).toBeInTheDocument();
  });
});
