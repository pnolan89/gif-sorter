import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MainInput from './main-input/main-input';
import ImageList from './image-list/image-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageData: []
    };
    this.handleMainInputSubmit = this.handleMainInputSubmit.bind(this);
  }

  handleMainInputSubmit(query, limit) {
    let newState = this.state;
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=W44TRfEABYfip5euY6PwifWx6vh4oLvm&q=${query}`)
      .then((response) => {
        newState.imageData = response.data.data.slice(0, limit);
        this.setState(newState);
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="App">
          <MainInput handleMainInputSubmit={this.handleMainInputSubmit}/>
          <ImageList imageData={this.state.imageData}/>
      </div>
    );
  }
}

export default App;
