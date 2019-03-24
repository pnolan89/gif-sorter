import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainInput from './main-input/main-input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form id="main-input">
          <MainInput />
        </form>
      </div>
    );
  }
}

export default App;
