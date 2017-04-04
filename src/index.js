import React, { Component } from "react"
import { AppContainer } from "react-hot-loader"
import { render as renderDOM } from "react-dom"

import App from "./app"

const rootEl = document.getElementById("app")

const render = Container =>
  renderDOM(
    <AppContainer>
      <Container />
    </AppContainer>,
    rootEl
  )

render(App)

if (module.hot) {
  module.hot.accept("./app", () => render(App))
}
