import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

interface Props {
  numberOfIncompleteTasks: number;
}

const MockTodoFooter = ({ numberOfIncompleteTasks }: Props) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  test("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  test('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });

  test("p element should be truthy when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeTruthy();
  });

  test('should render link', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  test('should render text "Followers" in the "a" element', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={0} />);
    const followersTextElement = screen.getByText("Followers");
    expect(followersTextElement).toBeVisible();
  });
});
