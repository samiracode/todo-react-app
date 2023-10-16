import React from "react";

const Todo = ({ text, todos, setTodos, todo }) => {
  // Check if todos is an array before using it
  if (!Array.isArray(todos)) {
    return <div>Error: Todos data is not available.</div>; // Customize the error message as needed.
  }

  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
  );
};

export default Todo;
