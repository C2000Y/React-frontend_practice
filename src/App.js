import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchStudent";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
