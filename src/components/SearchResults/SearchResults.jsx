import React, { Component } from 'react'
import './SearchResults.scss'

export default class SearchMain extends Component {
  constructor (props) {
    super (props)
    this.posterPath = 'https://image.tmdb.org/t/p/w92_and_h138_bestv2'
  }

  render() {
    const posterPath = this.posterPath + this.props.data.poster_path
    const title = this.props.data.original_title
    const overview = this.props.data.overview
    return (
      <div className="container search-results">
        <div className="search-results__item">
          <div className="search-result__feature">
            <img src={posterPath} alt="" />
          </div>
          <div className="search-result__content">
            <h3>{title}</h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  }
}