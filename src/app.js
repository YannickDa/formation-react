class HelloWorld extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

class Application extends React.Component {
  render() {
    return <HelloWorld {...this.props} />
  }
}

ReactDOM.render(
  <Application name="Yannick" />,
  document.getElementById("app")
)
