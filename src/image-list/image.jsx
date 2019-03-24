import React, { Component } from "react";
import './image-list.css';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={this.props.image.images.original.url} />
    );
  }
}

export default Image;

