import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MainInput from './main-input/main-input';
import ImageList from './image-list/image-list';
import Filters from './filters/filters'

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
      sortBy: ""
    };
    this.handleMainInputSubmit = this.handleMainInputSubmit.bind(this);
    this.handleSortUpdate = this.handleSortUpdate.bind(this);
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

  handleSortUpdate(event) {
    this.setState({
      sortBy: event.target.name
    });
  }

  render() {
    return (
      <div className="App">
          <MainInput handleMainInputSubmit={this.handleMainInputSubmit}/>
          <div id='list-container'>
            <Filters handleSortUpdate={this.handleSortUpdate}/>
            <ImageList imageData={this.state.imageData} sortBy={this.state.sortBy}/>
          </div>
      </div>
    );
  }
}

export default App;
