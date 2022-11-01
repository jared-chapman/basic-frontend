import './App.css';
import React, {Component } from "react";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3008/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  };

  componentDidMount() {
    this.callAPI();
  }

  render () {
    return (
      <div className="App">
        <p>test</p>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p>done</p>
      </div>
    );
  }
}

export default App;
