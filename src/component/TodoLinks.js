import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class TodoLinks extends Component {
  render() {
    return (
      <div className="TodoLinks">
        Afficher : 
        <span>
          <Link to={`${this.props.match}`}>
            Tous
          </Link>
        </span> | 
        <span>
          <Link to={`${this.props.match}/active`}>
            Actives
          </Link>
        </span> | 
        <span>
          <Link to={`${this.props.match}/completed`}>
            Terminées
          </Link>
        </span>
      </div>
    )
  }
}
