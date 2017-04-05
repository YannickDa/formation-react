import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { completeTodo, getTodos } from "../actions/todo"

class Todo extends PureComponent {
  constructor(props, children) {
    super(props, children)

    this._todoComplete = this.todoComplete.bind(this)
  }

  todoComplete() {
    this.props.onComplete(this.props)
  }

  render() {
    return (
      <li className="Todo" onClick={this._todoComplete}>
        {this.props.label}
      </li>
    )
  }
}

class TodoList extends PureComponent {
  constructor(props, children) {
    super(props, children)

    this._completeTodo = this.completeTodo.bind(this)
  }

  completeTodo(todo) {
    this.props.completeTodo(todo)
  }

  componentWillMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map((todo, index) =>
          <Todo {...todo} key={index} onComplete={this._completeTodo} />
        )}
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
}, dispatch => ({
  completeTodo: (todo) => dispatch(completeTodo(todo)),
  getTodos: () => dispatch(getTodos())
}))(TodoList)

export default connectedTodoList
