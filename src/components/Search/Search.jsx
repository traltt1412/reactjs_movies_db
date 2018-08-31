import React, { Component } from 'react'
import './Search.scss'
import $ from 'jquery'

export default class SearchMain extends Component {
  constructor(props) {
    super(props)
    this.getMovies()

    $('.js--search').on('keyup', e => {
      const movies = this.getMovies ()
      this.setState ({movies: movies.results})
    })
  }

  getMovies() {
    // const APIKey = '249bfd842941339e51fe3d4eaeeba219'
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=249bfd842941339e51fe3d4eaeeba219&query=marvel'
    $.ajax({
      url: url,
      success: (data) => {
        return data
      },
      error: (xhr, status, err) => {
        console.log(err)
      }
    })
  }
  render() {
    return (
      <div>
        <form className="container search">
          <input className="js--search" type="text" placeholder="Search for a movie, tv show, person..."></input>
        </form>
      </div>
    );
  }
}