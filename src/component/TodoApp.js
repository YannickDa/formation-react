import React, { Component } from "react";

import TodoLinks from "./TodoLinks"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"

export default class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <TodoLinks match={this.props.match} />
        <TodoList />
        <TodoAdd />
      </div>
    )
  }
}
