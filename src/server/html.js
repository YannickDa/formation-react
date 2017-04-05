import React, { PureComponent } from "react"
import { renderToString } from "react-dom/server"

export default class HTML extends PureComponent {
  render() {
    const { component, store } = this.props
    const data = JSON.stringify(store.getState())
    const content = component ? renderToString(component):""

    return (
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Hello World</title>
          </head>
          <body>
            <div id="app" dangerouslySetInnerHTML={{ __html: content }} />

            <script type="application/javascript" dangerouslySetInnerHTML={{
              __html: `window.__data = ${data};`
            }}></script>
            <script type="text/javascript" src="/assets/app.min.js"></script>
        </body>
      </html>
    )
  }
}
