import React, { Component } from "react"
import { Route } from "react-router-dom"

import TodoApp from "./TodoApp"

export default class Application extends Component {
  render() {
    return <Route
      path="/:filter?"
      component={TodoApp} />
  }
}
