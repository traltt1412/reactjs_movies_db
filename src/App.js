import React, { Component } from 'react'
import Header from "./components/Header/Header"
import SearchMain from "./components/Search/Search"
// import SearchResults from "./components/SearchResults/SearchResults"
class App extends Component {
  constructor (props) {
    super (props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <SearchMain />
        {/* <SearchResults /> */}
      </div>
    );
  }

  
}

export default App;
