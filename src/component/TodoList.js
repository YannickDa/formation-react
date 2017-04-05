import React, { Component } from "react"
import { connect } from "react-redux"

class Todo extends Component {
  render() {
    return <li className="Todo">{this.props.label}</li>
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map((todo, index) => <Todo {...todo} key={index} />)}
      </ul>
    )
  }
}

const connectedTodoList = connect((store, ownProps) => {
  let { filter } = ownProps
  if (filter !== undefined) {
    filter = filter === "completed" ? true:false
  }

  return {
    todos: store.todo.todos.filter(todo => (
      filter === undefined || todo.completed === filter
    ))
  }
})(TodoList)

export default connectedTodoList
