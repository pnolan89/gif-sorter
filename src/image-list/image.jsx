import React, { Component } from "react";
import './image-list.css';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.image.id}</h1>
    );
  }
}

export default Image;