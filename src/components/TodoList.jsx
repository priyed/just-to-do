import React from 'react';
import Todo from "../components/Todo";
import './Todo.css';

const TodoList = ({todos, deleteTodo}) => {
    if(todos.length) {
        return (
            <ul className="todo bg-gray-800 mt-8 p-2 border border-gray-800 rounded-md w-4/5 transition-all">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        )
    } else {
        return (
            <p className="text-sm mt-8 bg-gray-800 px-4 py-3 rounded-md animate-bounce">"You don't have any todos"</p>
        )
    }
    
}

export default TodoList;