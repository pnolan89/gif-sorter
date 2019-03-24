import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MainInput from './main-input/main-input';
import ImageList from './image-list/image-list';

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
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=W44TRfEABYfip5euY6PwifWx6vh4oLvm&q=${input}`)
      .then((response) => {
        console.log('Success!');
        console.log(response);
      })
      .catch(function (response) {
        console.log(response)
      });
  }

  render() {
    return (
      <div className="App">
          <MainInput handleMainInputSubmit={this.handleMainInputSubmit}/>
          <ImageList />
      </div>
    );
  }
}

export default App;
