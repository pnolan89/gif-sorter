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
            <td rowspan="2">Size: </td>
            <td><button name="sort-size-l" onClick={this.props.handleSortUpdate}>Largest - smallest</button></td>
          </tr>
          <tr>
            <td><button name="sort-size-s" onClick={this.props.handleSortUpdate}>Smallest - largest</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Filters;
