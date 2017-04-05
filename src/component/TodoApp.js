import React, { PureComponent } from "react";

import TodoLinks from "./TodoLinks"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"

export default class TodoApp extends PureComponent {
  render() {
    return (
      <div className="TodoApp">
        <TodoLinks match={this.props.match} />
        <TodoList filter={this.props.match.params.filter} />
        <TodoAdd />
      </div>
    )
  }
}
