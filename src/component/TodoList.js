import React, { Component } from "react"

class Todo extends Component {
  render() {
    return <li className="Todo">{this.props.label}</li>
  }
}

export default class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map((todo, index) => <Todo {...todo} key={index} />)}
      </ul>
    )
  }
}
