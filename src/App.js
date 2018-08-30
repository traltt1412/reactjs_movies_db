import React, { Component } from 'react';
import Header from "./components/header/header"
import SearchMain from "./components/SearchMain/searchMain"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchMain />
      </div>
    );
  }
}

export default App;
