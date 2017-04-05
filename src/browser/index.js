import React, { Component } from "react"
import { AppContainer } from "react-hot-loader"
import { render as renderDOM } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import configureStore from "store/configureStore"

import App from "component/app"

const store = configureStore()

const rootEl = document.getElementById("app")

const render = Container =>
  renderDOM(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    rootEl
  )

render(App)

if (module.hot) {
  module.hot.accept("component/app", () => render(App))
}
