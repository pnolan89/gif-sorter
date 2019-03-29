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
        <h3 className="left-align">Sort by: </h3>
        <table>
          <tr>
            <td rowspan="2" className="border-bottom">Filesize: </td>
            <td><button className="sort-btn" name="size-l" onClick={this.props.handleSortUpdate}>Largest - smallest</button></td>
          </tr>
          <tr>
            <td className="border-bottom"><button className="sort-btn" name="size-s" onClick={this.props.handleSortUpdate}>Smallest - largest</button></td>
          </tr>
          <tr>
            <td rowspan="2" className="border-bottom">Score: </td>
            <td><button className="sort-btn" name="score-h" onClick={this.props.handleSortUpdate}>Highest - lowest</button></td>
          </tr>
          <tr>
            <td className="border-bottom"><button className="sort-btn" name="score-l" onClick={this.props.handleSortUpdate}>Lowest - highest</button></td>
          </tr>
          <tr>
            <td rowspan="2" className="border-bottom">Frames: </td>
            <td><button className="sort-btn" name="frames-h" onClick={this.props.handleSortUpdate}>Highest - lowest</button></td>
          </tr>
          <tr>
            <td className="border-bottom"><button className="sort-btn" name="frames-l" onClick={this.props.handleSortUpdate}>Lowest - highest</button></td>
          </tr>
          <tr>
            <td rowspan="2" className="border-bottom">Height: </td>
            <td><button className="sort-btn" name="height-l" onClick={this.props.handleSortUpdate}>Largest - smallest</button></td>
          </tr>
          <tr>
            <td className="border-bottom"><button className="sort-btn" name="height-s" onClick={this.props.handleSortUpdate}>Smallest - largest</button></td>
          </tr>
          <tr>
            <td rowspan="2" className="border-bottom">Width: </td>
            <td><button className="sort-btn" name="width-l" onClick={this.props.handleSortUpdate}>Largest - smallest</button></td>
          </tr>
          <tr>
            <td className="border-bottom"><button className="sort-btn" name="width-s" onClick={this.props.handleSortUpdate}>Smallest - largest</button></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Filters;

