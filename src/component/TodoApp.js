import React, { Component } from "react";

import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"

export default class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <TodoList />
        <TodoAdd />
      </div>
    )
  }
}
