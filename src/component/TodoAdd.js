import React, { Component } from "react"

export class TodoAdd extends Component {
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
        <input type="text" onKeypress={this._handleInput} />
        <button type="submit">Ajouter</button>
      </form>
    )
  }
}
