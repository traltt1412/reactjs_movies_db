import React, { Component } from 'react'
import './Search.scss'
import $ from 'jquery'
import SearchResults from "../SearchResults/SearchResults"

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.count = 0
  }

  searchChangeHandler(e) {
    const searchTerm = e.target.value
    this.getMovies(searchTerm)
  }

  getMovies(searchTerm = '') {
    // const APIKey = '249bfd842941339e51fe3d4eaeeba219'
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=249bfd842941339e51fe3d4eaeeba219&query=' + searchTerm
    $.ajax({
      url: url,
      success: (data) => {
        this.setState({
          movies: data.results
        })
      },
      error: (xhr, status, err) => {
        console.log(err)
      }
    })

  }

  render() {
    let results = (this.state && this.state.movies) || null
    results = <SearchResults key='search_results' data={results} />

    return (
      <div>
        <form className="container search">
          <input className="js--search" type="text" onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a movie, tv show, person..."></input>
        </form>
        {results}
      </div>
    )
  }
}