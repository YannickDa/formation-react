import React, { PureComponent } from "react"

export default class HTML extends PureComponent {
  render() {
    return (
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>Hello World</title>
          </head>
          <body>
            <div id="app"></div>
            <script type="text/javascript" src="/assets/app.min.js"></script>
        </body>
      </html>
    )
  }
}
