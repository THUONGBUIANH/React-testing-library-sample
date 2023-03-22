import "./TodoFooter.css";
import { Link } from "react-router-dom";

function TodoFooter({
  numberOfIncompleteTasks,
}: {
  numberOfIncompleteTasks: number;
}) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}

export default TodoFooter;
