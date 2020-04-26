import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import './App.css';
import Index from "./Route/index";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Index />
          </div>
        </Router>
    );
  }
}
export default App;
