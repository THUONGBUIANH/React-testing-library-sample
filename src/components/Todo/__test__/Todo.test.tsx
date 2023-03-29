import { render, screen, waitFor } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo", () => {
  test("should be able to type into input", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    await userEvent.type(inputElement, "Go Grocery Shopping");
    await userEvent.click(buttonElement);

    expect(screen.getByText(/Go Grocery Shopping/i)).toBeInTheDocument();
  });

  test("should render multiple items", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    await userEvent.type(inputElement, "Go Grocery Shopping");
    await userEvent.click(buttonElement);

    await userEvent.type(inputElement, "Go Grocery Shopping");
    await userEvent.click(buttonElement);

    await userEvent.type(inputElement, "Go Grocery Shopping");
    await userEvent.click(buttonElement);

    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);

    expect(divElements.length).toBe(3);
  });

  test("task should not have complete class when initally rendered", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    await userEvent.type(inputElement, "Go Grocery Shopping");
    await userEvent.click(buttonElement);

    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should have complete class when clicked", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    await userEvent.type(inputElement, "Go Grocery Shopping");
    await userEvent.click(buttonElement);

    const divElement = screen.getByText(/Go Grocery Shopping/i);

    await userEvent.click(divElement);

    expect(divElement).toHaveClass("todo-item-active");
  });
});
