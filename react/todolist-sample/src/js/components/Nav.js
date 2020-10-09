import React from "react"
import { Link } from "react-router-dom"

export default class Nav extends React.Component {
    render () {      
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="favorites">Favorites</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="settings">Settings</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}