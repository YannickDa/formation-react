var HelloWorld = props => {
  return React.createElement("div", null, "Hello World !")
}

var Application = React.createClass({
  render: function() {
    return React.createElement(HelloWorld, { name: this.props.name })
  }
})

ReactDOM.render(
  React.createElement(Application, {
    name: "Yannick"
  }),
  document.getElementById("app")
)
