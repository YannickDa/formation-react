import React, { Component } from "react"
import { render } from "react-dom"

class HelloWorld extends Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

class Application extends Component {
  render() {
    return <HelloWorld {...this.props} />
  }
}

render(
  <Application name="Yannick" />,
  document.getElementById("app")
)
