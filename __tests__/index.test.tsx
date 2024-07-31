import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/Home";
import Counter from "app/counter";
describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

describe("Counter Component", () => {
  test("renders initial count", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  test("increments count on button click", () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "+" });
    fireEvent.click(buttonElement);
    const countElement = screen.getByText("1");
    expect(countElement).toBeInTheDocument();
  });
});
