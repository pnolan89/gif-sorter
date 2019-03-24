import React, { Component } from "react";
import './image-list.css';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>I AM AN IMAGE! FEAR ME MORTALS! {this.props.image}</h1>
    );
  }
}

export default Image;