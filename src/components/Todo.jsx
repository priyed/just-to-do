import React from "react";
import './Todo.css';

const Todo = ({ todo, deleteTodo }) => {
  function handleDelete() {
    deleteTodo(todo.id);
  }

    return (
      <li className="flex items-row justify-between">
        <p>{todo.content}</p>
        <button onClick={handleDelete} className="">X</button>
      </li>
    );

};

export default Todo;
