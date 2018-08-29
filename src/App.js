import React, { Component } from 'react';
import "./assets/css/app.scss"
import "font-awesome/css/font-awesome.css";
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
