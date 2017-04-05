import React, { PureComponent } from "react";

import TodoLinks from "component/TodoLinks"
import TodoList from "component/TodoList"
import TodoAdd from "component/TodoAdd"

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
