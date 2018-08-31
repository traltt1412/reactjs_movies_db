import React, {Component} from 'react'
import logo from "./../../logo.svg"
import './Header.scss'

export default class Header extends Component {
    render () {
        return (
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>MoviesDB Search</h1>
            </header>
        );
    }
}