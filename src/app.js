import React, { Component } from "react"
import { render } from "react-dom"

class HelloWorld extends Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

export default class Application extends Component {
  render() {
    return <HelloWorld name="Yannick" />
  }
}
