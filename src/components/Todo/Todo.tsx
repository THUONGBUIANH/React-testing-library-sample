import { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import "./Todo.css";
import { Todo } from '../../Types'

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;
