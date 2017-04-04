import React, { Component } from "react"
import { connect } from "react-redux"

import { addTodo } from "../actions/todo"

class TodoAdd extends Component {
  constructor(props, children) {
    super(props, children)

    this.state = {
      todo: ""
    }

    this._handleInput = this.handleInput.bind(this)
    this._handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todo)
    e.currentTarget.reset()
    this.setState({
      todo: ""
    })
  }

  handleInput(e) {
    this.setState({
      todo: e.currentTarget.value
    })
  }

  render() {
    return (
      <form
        action
        method="post"
        className="TodoAdd"
        onSubmit={this._handleSubmit}
      >
        <input type="text" onKeyUp={this._handleInput} />
        <button type="submit">Ajouter</button>
      </form>
    )
  }
}

const connectedTodoAdd = connect(null, dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
}))(TodoAdd)

export default connectedTodoAdd
