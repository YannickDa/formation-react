var HelloWorld = () => {
  return React.createElement("div", null, "Hello World !")
}

var Application = React.createClass({
  render: function() {
    return React.createElement(HelloWorld)
  }
})

ReactDOM.render(
  React.createElement(Application, {
    name: "Yannick"
  }),
  document.getElementById("app")
)
