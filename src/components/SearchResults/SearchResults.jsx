import React, { Component } from 'react'
import './SearchResults.scss'
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem"

export default class SearchResults extends Component {
  constructor (props) {
    super (props)
    this.posterPath = 'https://image.tmdb.org/t/p/w92_and_h138_bestv2'
  }

  render() {
    let rows = []

    if (this.props.data !== null) {
      this.props.data.forEach(data => {
        let row = <SearchResultsItem key={data.id} data={data} />
        rows.push(row)
      })
    } else {
      rows = 'no result'
    }
    return (
      <div className="container search-results">
        {rows}
      </div>
    );
  }
}