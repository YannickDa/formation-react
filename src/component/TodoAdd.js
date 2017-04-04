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
  }

  handleInput(e) {
    this.setState({
      todo: e.currentTarget.value
    })
  }

  render() {
    return (
      <form action method="post" className="TodoAdd">
        <input type="text" onKeyPress={this._handleInput} />
        <button type="submit">Ajouter</button>
      </form>
    )
  }
}

const connectedTodoAdd = connect(null, dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
}))(TodoAdd)

export default connectedTodoAdd
