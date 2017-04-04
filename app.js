var HelloWorld = () => {
  return React.createElement("div", null, "Hello World !")
}

var Application = React.createClass({
  render: function() {
    return React.createElement(HelloWorld)
  }
})
