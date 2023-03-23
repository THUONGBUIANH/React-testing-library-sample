import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Test render header component", () => {
  test("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });

  test("should not render when title empty", () => {
    render(<Header />);
    const h1Element = screen.getByTestId("header");
    expect(h1Element.innerHTML).not.toBeInTheDocument;
  });
});
