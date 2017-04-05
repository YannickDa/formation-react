import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class TodoLinks extends Component {
  render() {
    const matchUrl = this.props.match.url

    return (
      <div className="TodoLinks">
        Afficher : 
        <span>
          <Link to="/" className={matchUrl === "/" ? "active":""}>
            Tous
          </Link>
        </span> |
        <span>
          <Link to="/active" className={matchUrl === "/active" ? "active":""}>
            Actives
          </Link>
        </span> | 
        <span>
          <Link to="/completed" className={matchUrl === "/completed" ? "active":""}>
            Terminées
          </Link>
        </span>
      </div>
    )
  }
}
