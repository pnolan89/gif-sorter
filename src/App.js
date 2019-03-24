import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainInput from './main-input/main-input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainInput: ""
    };
    this.handleMainInputSubmit = this.handleMainInputSubmit.bind(this);
  }

  handleMainInputSubmit(input) {
    let newState = this.state;
    newState.mainInput = input;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <form id="main-input">
          <MainInput handleMainInputSubmit={this.handleMainInputSubmit}/>
        </form>
      </div>
    );
  }
}

export default App;
