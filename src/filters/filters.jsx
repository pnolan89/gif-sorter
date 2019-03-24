import React, { Component } from "react";
import './filters.css';

class Filters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="filters-box">
        <h1>Filters</h1>
        <table>
          <tr>
            <td rowspan="2">Filesize: </td>
            <td><button name="size-l" onClick={this.props.handleSortUpdate}>Largest - smallest</button></td>
          </tr>
          <tr>
            <td><button name="size-s" onClick={this.props.handleSortUpdate}>Smallest - largest</button></td>
          </tr>
          <tr>
            <td rowspan="2">Score: </td>
            <td><button name="score-h" onClick={this.props.handleSortUpdate}>Highest - lowest</button></td>
          </tr>
          <tr>
            <td><button name="score-l" onClick={this.props.handleSortUpdate}>Lowest - highest</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Filters;

