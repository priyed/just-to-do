import React, { Component } from "react";
import './Todo.css'

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let x = document.forms["todoForm"]["todoTask"].value;
    if (x === "") {
        document.getElementById("alert").innerHTML = "Please Enter a Todo"
        return false;
    } // Else Add the todo to the list
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
    // Resets the content of the alert
    document.getElementById("alert").innerHTML = ""
  };
  render() {
    return (
      <form
        name="todoForm"
        onSubmit={this.handleSubmit}
        className="mt-12 flex w-screen flex-col items-center"
      >
        <input
          type="text"
          name="todoTask"
          onChange={this.handleChange}
          placeholder="Enter ToDo"
          className="bg-blue-800 outline-none  py-2 px-2 rounded-md"
          value={this.state.content}
        />
        <p id="alert" className="alert-message text-xs"></p>
        <input
          type="submit"
          value="Add ToDo"
          className="bg-red-600 text-sm text-gray-300 py-3 px-8 mt-4 center rounded-md outline-none"/>
      </form>
      
    );
  }
}

export default AddTodo;
