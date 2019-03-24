import React, { Component } from "react";
import './main-input.css';

class MainInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInput: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handleMainInputSubmit(this.state.mainInput);
  }

  render() {
    return (
      <form id="main-input" onSubmit={this.onSubmit}>
        <input id="main-input-textbox" name="mainInput" type="text" onChange={this.onChange}/>
        <input id="main-input-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default MainInput;