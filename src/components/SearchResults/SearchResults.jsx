import React, { Component } from 'react'
import './SearchResults.scss'

export default class SearchMain extends Component {
  constructor (props) {
    super (props)
    if (this.state) {
      if (this.state.movies) {
        console.log (this.state.movies)
      }
    }
  }

  render() {
    return (
      <div className="container search-results">
        <div className="search-results__item">
          <div className="search-result__feature">
            <img src="https://image.tmdb.org/t/p/w92_and_h138_bestv2/9WqjhEjaUTUQ8GPUM4cs8cvoseB.jpg" alt="" />
          </div>
          <div className="search-result__content">
            <h3>Girls With Guns</h3>
            <p>Ballistic: Ecks vs. Sever, Barb Wire, Assault Girls, 79 more...</p>
          </div>
        </div>
      </div>
    );
  }
}