import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const user = userEvent.setup();
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    await user.type(inputElement, "Implement test");

    expect(inputElement).toHaveValue("Implement test");
  });

  test("should be able to type into input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const user = userEvent.setup();
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    await user.type(inputElement, "Implement test");
    await user.click(buttonElement);

    expect(mockedSetTodo).toHaveBeenCalledTimes(1);
  });

  test("should have empty input when add button is cliked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const user = userEvent.setup();
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    await user.type(inputElement, "Implement test");
    await user.click(buttonElement);

    expect(inputElement).toHaveValue("");
  });
});
