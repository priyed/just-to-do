import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo"

class App extends Component {
  state = {
    todos: [
    
    ],
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [todo, ...this.state.todos]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="text-gray-300 flex items-center flex-col mt-16">
        <h1 className="text-6xl text-gray-100 border-b border-gray-600">
          Just To Do!
        </h1>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
