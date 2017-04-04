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

const connectedTodoList = connect(store => ({
  todos: store.todo.todos
}))(TodoList)

export default connectedTodoList
