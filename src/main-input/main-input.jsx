import React, { Component } from "react";
import './main-input.css';

class MainInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      limit: "1"
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
    this.props.handleMainInputSubmit(this.state.query, this.state.limit);
  }

  render() {
    return (
      <form id="main-input" onSubmit={this.onSubmit}>
        <select name="limit" onChange={this.onChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
        <input id="main-input-textbox" name="query" type="text" onChange={this.onChange}/>
        <input id="main-input-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default MainInput;