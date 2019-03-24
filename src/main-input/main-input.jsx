import React, { Component } from "react";
import './main-input.css';

class MainInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInput: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form id="main-input">
        <input id="main-input-textbox" name="mainInput" type="text" onChange={this.onChange}/>

      </form>
    );
  }
}

export default MainInput;