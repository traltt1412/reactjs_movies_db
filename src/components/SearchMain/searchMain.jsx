import React, {Component} from 'react'
import './searchMain.scss'

export default class SearchMain extends Component {
    render () {
        return (
            <div>
                <form className="container search__main">
                    <input type="text" placeholder="Search for a movie, tv show, person..."></input>
                </form>
            </div>
        );
    }
}