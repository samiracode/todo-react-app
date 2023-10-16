import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  // Check if filteredTodos is null or empty
  if (!filteredTodos || filteredTodos.length === 0) {
    return <p>No todos to display.</p>; // You can customize the message.
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
